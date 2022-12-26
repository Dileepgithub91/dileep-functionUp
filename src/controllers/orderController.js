const userSchema = require("../models/userModel")
const productSchema = require("../models/productModel")
const orderSchema = require("../models/orderModel")

const createOrder = async function(req, res) {
    let headerData = req.headers["isfreeappuser"]
    let orderData = req.body;
    let productData = await productSchema.findById(orderData.productId)
    let userData = await userSchema.findById(orderData.userId)





    if (headerData === "true") {
        orderData.amount = 0
        orderData.isFreeAppUser = "true"
    }

    if (headerData === "false") {
        if (userData.balance >= productData.price) {
            await userSchema.findByIdAndUpdate(orderData.userId, { $inc: { balance: -(productData.price) }, new: true })
            orderData.isFreeAppUser = "false"
            orderData.amount = productData.price
        } else {
            return res.send("User haven't Sufficient Balance to buy Product.")
        }
    }

    let orderCreated = await orderSchema.create(orderData);
    res.send({ data: orderCreated });

}


const getAllOrderData = async function(req, res) {
    let allData = await orderSchema.find().populate(["userId", "productId"])
    res.send({ data: allData });

};

module.exports = { createOrder, getAllOrderData }