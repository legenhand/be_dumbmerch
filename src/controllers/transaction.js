exports.addTransaction = async (req,res) => {
    try {
        const { idProduct, idSeller, price } = req.body;
        res.send({
            status: "success",
            data: {
                transaction: {
                    id: 1,
                    idProduct: idProduct,
                    idBuyer: 2,
                    idSeller: idSeller,
                    price: price
                }
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

exports.getAllTransaction = async (req,res) => {
    try {
        res.send({
            status: "success",
            data: {
                transaction: [
                    {
                        id: 1,
                        product: {
                            id: 2,
                            image: "keyboard.png",
                            title: "Keyboard",
                            desc: "The best Keyboard ..."
                        },
                        buyer: {
                            id: 3,
                            name: "Yosep Alexander",
                            email: "yosepgans@mail.com"
                        },
                        seller: {
                            id: 1,
                            name: "Admin",
                            email: "admin@mail.com"
                        },
                        price: 3500000,
                        status: "success"
                    },
                    {
                        id: 1,
                        product: {
                            id: 2,
                            image: "keyboard.png",
                            title: "Keyboard",
                            desc: "The best Keyboard ..."
                        },
                        buyer: {
                            id: 3,
                            name: "Yosep Alexander",
                            email: "yosepgans@mail.com"
                        },
                        seller: {
                            id: 1,
                            name: "Admin",
                            email: "admin@mail.com"
                        },
                        price: 3500000,
                        status: "success"
                    },
                    {
                        id: 1,
                        product: {
                            id: 2,
                            image: "keyboard.png",
                            title: "Keyboard",
                            desc: "The best Keyboard ..."
                        },
                        buyer: {
                            id: 3,
                            name: "Yosep Alexander",
                            email: "yosepgans@mail.com"
                        },
                        seller: {
                            id: 1,
                            name: "Admin",
                            email: "admin@mail.com"
                        },
                        price: 3500000,
                        status: "success"
                    },
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