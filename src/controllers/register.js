let user = [{
    email: "dinda@gmail.com",
    password: "myCustomPassword",
    name: "Dinda Adinda Putri"
}];

exports.addUser = async (req,res) => {
    let token = '0sdnOJIoinsdo9878IJNBIniiuinINiuYIUY';
    try {
        user = [...user, req.body];
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