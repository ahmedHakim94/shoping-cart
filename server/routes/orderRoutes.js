const express = require('express')
const Order = require('../models/orderModel');
const router = express.Router();


//Order Apis
router.get('/api/orders',async(req, res) => {
    const orders = await Order.find();
    res.send(orders)
});

router.post('/api/orders',async(req, res) => {
    const order = await new Order(req.body).save();
    res.send(order)
});

router.delete('/api/orders/:id',async(req,res)=> {
    const deletedOrder = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedOrder)
})

module.exports = router