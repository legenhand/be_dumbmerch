const joi = require("joi");
const {user} = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.register = async (req, res) => {
    let token = '0sdnOJIoinsdo9878IJNBIniiuinINiuYIUY';

    const schema = joi.object({
        name: joi.string().min(3).required(),
        email: joi.string().email().required(),
        password: joi.string().min(4).required(),
        status : joi.string().valid(...["customer", "admin"])
    })

    const { error } = schema.validate(req.body);

    if(error){
        return res.send({
            error: error.details[0].message
        })
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const data = await user.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });

        res.send({
            status : 'success',
            message: 'User Successfully added!',
            data: {
                name : data.name,
                email : data.email,
                token : token
            }
        })
    }catch (err){
        console.log(err)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

exports.login = async (req,res) => {
    const schema = joi.object({
        email: joi.string().email().min(6).required(),
        password: joi.string().min(4).required(),
    });

    // do validation and get error object from schema.validate
    const { error } = schema.validate(req.body);

    // if error exist send validation error message
    if (error)
        return res.status(400).send({
            error: {
                message: error.details[0].message,
            },
        });

    try {
        const userExist = await user.findOne({
            where: {
                email: req.body.email,
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
        });

        if(!userExist){
            return res.status(400).send({
                message: `Email: ${req.body.email} not found`
            });
        }

        // code here
        const isValid = await bcrypt.compare(req.body.password, userExist.password)

        if(!isValid){
            return res.status(400).send({
                message: `Password not match!`
            });
        }
        const data = {
            id: userExist.id
        }

        const token = jwt.sign(data, process.env.TOKEN_KEY || 'PisangGoreng720')
        res.status(200).send({
            status: "success...",
            data: {
                name: userExist.name,
                email: userExist.email,
                token
            },
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "failed",
            message: "Server Error",
        });
    }
};