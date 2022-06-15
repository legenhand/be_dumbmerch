exports.addProduct = async (req,res) => {
    try {
        const { image, title, desc, price, qty} = req.body;
        res.send({
            status: "success",
            data: {
                product: {
                    id: 1,
                    image: image,
                    title: title,
                    desc: desc,
                    price: price,
                    qty: qty,
                    user: {
                        id: 1,
                        name: "Admin",
                        email: "admin@mail.com",
                        Image: "admin.jpg"
                    }
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

exports.getAllProduct = async (req,res) => {
    try {
        res.send({
            status: "success",
            data: {
                products: [
                    {
                        id: 1,
                        image: "mouse-pad.png",
                        title: "Mouse Pad",
                        desc: "The best Mouse Pad ...",
                        price: 500000,
                        qty: 300
                    },
                    {
                        id: 2,
                        image: "keyboard.png",
                        title: "Keyboard",
                        desc: "The best keyboard ...",
                        price: 3500000,
                        qty: 200
                    },
                    {
                        id: 3,
                        image: "monitor.png",
                        title: "Monitor",
                        desc: "The best Monitor ...",
                        price: 7200000,
                        qty: 120
                    },
                    {
                        id: 4,
                        image: "mouse.png",
                        title: "Mouse",
                        desc: "The best Mouse ...",
                        price: 5500000,
                        qty: 230
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

exports.getProductDetail = async (req,res) => {
    const { id } = req.params;
    try {
        res.send({
            status: "success",
            data: {
                product: {
                    id: id,
                    image: "mouse-pad.png",
                    title: "Mouse Pad",
                    desc: "The best Mouse Pad ...",
                    price: 500000,
                    qty: 300,
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

exports.updateProduct = async (req,res) => {
    const { id } = req.params;
    const { desc } = req.body
    try {
        res.send({
            status: "success",
            data: {
                product: {
                    id: id,
                    image: "mouse-pad.png",
                    title: "Mouse Pad",
                    desc: desc,
                    price: 500000,
                    qty: 300,
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

exports.deleteProduct = async (req,res) => {
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