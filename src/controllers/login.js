exports.login = async (req,res) => {
    let token = '0sdnOJIoinsdo9878IJNBIniiuinINiuYIUY';
    let status = 'costumer';
    try {
        res.send({
            status : 'success',
            message: 'Successfully Login!',
            data: {
                name : req.body.name,
                email : req.body.email,
                status : status,
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