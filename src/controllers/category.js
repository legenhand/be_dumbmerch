exports.addCategory = async (req,res) => {
    try {
        const { name } = req.body;
        res.send({
            status: "success",
            data: {
                product: {
                    id: 1,
                    name: name
                }
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

exports.getAllCategory = async (req,res) => {
    try {
        res.send({
            status: "success",
            data: {
                categories: [
                    {
                        id : 1,
                        name: "Tech"
                    },
                    {
                        id: 2,
                        name: "Working"
                    }
                ]
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

exports.getCategoryDetail = async (req,res) => {
    const { id } = req.params;
    try {
        res.send({
            status: "success",
            data: {
                category: {
                    id: id,
                    name: "Tech"
                }
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

exports.updateCategory = async (req,res) => {
    const { id } = req.params;
    const { name } = req.body
    try {
        res.send({
            status: "success",
            data: {
                category: {
                    id: id,
                    name: name,
                }
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

exports.deleteCategory = async (req,res) => {
    const { id } = req.params;
    try {
        res.send({
            status: "success",
            data: {
                id: id,
            }
        });
    }catch (err){
        console.log(err)
        res.send({
            status: 'failed',
            message: 'Server Error'
        });
    }
}