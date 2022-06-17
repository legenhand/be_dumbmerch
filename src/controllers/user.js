const { user, profile } = require('../../models');

exports.addUser = async (req,res) => {
    let token = '0sdnOJIoinsdo9878IJNBIniiuinINiuYIUY';
    try {
        await user.create(req.body);
        res.send({
            status : 'success',
            message: 'User Successfully added!',
            data: {
                name : req.body.name,
                email : req.body.email,
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

exports.getUser = async (req,res) => {
    let token = '0sdnOJIoinsdo9878IJNBIniiuinINiuYIUY';
    let status = 'costumer';
    try {
        const { id } = req.params;
        const data = await user.findOne({
            where: {
                id,
            },
            include: {
                model: profile,
                as: "profile",
                attributes: {
                    exclude: ["createdAt", "updatedAt", "idUser"],
                },
            },
            attributes: {
                exclude: ["password", "createdAt", "updatedAt"],
            },
        });
        res.send({
            status : 'success',
            message: 'Successfully Login!',
            data: {
                data
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

exports.getUsers = async (req, res) => {
    try {
        const users = await user.findAll({
            include: {
                model: profile,
                as: "profile",
                attributes: {
                    exclude: ["createdAt", "updatedAt", "idUser"],
                },
            },
            attributes: {
                exclude: ["password", "createdAt", "updatedAt"],
            },
        });

        res.send({
            status: "success",
            data: {
                users,
            },
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;

        await user.update(req.body, {
            where: {
                id,
            },
        });

        res.send({
            status: "success",
            message: `Update user id: ${id} finished`,
            data: req.body,
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        await user.destroy({
            where: {
                id,
            },
        });

        res.send({
            status: "success",
            message: `Delete user id: ${id} finished`,
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};