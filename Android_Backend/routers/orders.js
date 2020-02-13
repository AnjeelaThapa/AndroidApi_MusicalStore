const express = require('express')
const router = express.Router();
const ordersModel = require('../models/orders')

router.route('/orders')
    .get(async (req, res) => {
        const data = await ordersModel.find({})
        res.send(data)
    })
    .post(async (req, res) => {
        console.log(req.body)
        const post = new ordersModel({
            userid: " req.body.userid",
            Instrumentid: req.body.Instrumentid,
            qty: req.body.qty,
            cart: false,
            sold: false

        })
        try {
            const data = await post.save();
            if (data != null) {
                res.send({
                    status: true,
                    message: 'Added Successfully'
                })
            }
            else {
                res.send({
                    status: false,
                    message: 'Added UnSuccessfull'
                })
            }
        }
        catch (err) {
            res.send({
                status: false,
                message: 'Something is missing'
            })
        }
    })
    .delete(async (req, res) => {
        try {
            const data = await ordersModel.deleteMany()
            res.json(data)
        }
        catch (err) {
            res.json({ message: err })
        }
    })
//showtocartbyid
router.route('/showtoorder/:id')
    .get(async (req, res) => {
        console.log("I'm hit")
        const data = await ordersModel.find({ userid: req.params.id })
        console.log(data)
        res.send(data)
    })
    .post(async (req, res) => {
        console.log(req.body)
        const post = new ordersModel({
            userid: req.body.userid,
            Instrumentid: req.body.Instrumentid,
            qty: req.body.qty,
            cart: false,
            sold: false

        })
        try {
            const data = await post.save();
            if (data != null) {
                res.send({
                    status: true,
                    message: 'Added Successfully'
                })
            }
            else {
                res.send({
                    status: false,
                    message: 'Added UnSuccessfull'
                })
            }
        }
        catch (err) {
            res.send({
                status: false,
                message: 'Something is missing'
            })
        }
    })

//Update Order
router.route('/updateorder/:id')
    .post(async (req, res) => {
        console.log(req.body)
        const post = new ordersModel({
            userid: req.body.userid,
            Instrumentid: req.body.Instrumentid,
            qty: req.body.qty,
            cart: false,
            sold: false

        })
        try {
            const data = await post.save();
            if (data != null) {
                res.send({
                    status: true,
                    message: 'Added Successfully'
                })
            }
            else {
                res.send({
                    status: false,
                    message: 'Added UnSuccessfull'
                })
            }
        }
        catch (err) {
            res.send({
                status: false,
                message: 'Something is missing'
            })
        }
    })
    .delete(async (req, res) => {
        try {
            const data = await ordersModel.deleteOne({ _id: req.params.id })
            res.json(data)
        }
        catch (err) {
            res.json({ message: err })
        }
    })
//Add to Cart
router.route('/addtocart')
    .get(async (req, res) => {
        const data = await ordersModel.find({})
        res.send(data)
    })
    .post(async (req, res) => {
        console.log(req.body)
        const post = new ordersModel({
            userid: req.body.userid,
            Instrumentid: req.body.Instrumentid,
            qty: req.body.qty,
            cart: true,
            sold: false

        })
        try {
            const data = await post.save();
            if (data != null) {
                res.send({
                    status: true,
                    message: 'Added Successfully'
                })
            }
            else {
                res.send({
                    status: false,
                    message: 'Added UnSuccessfull'
                })
            }
        }
        catch (err) {
            res.send({
                status: false,
                message: 'Something is missing'
            })
        }
    })

//showtocartbyid
router.route('/showtocart/:id')
    .get(async (req, res) => {
        console.log("I'm hit")
        const data = await ordersModel.find({ userid: req.params.id })
        console.log(data)
        res.send(data)
    })
    .post(async (req, res) => {
        console.log(req.body)
        const post = new ordersModel({
            userid: req.body.userid,
            Instrumentid: req.body.Instrumentid,
            qty: req.body.qty,
            cart: true,
            sold: false

        })
        try {
            const data = await post.save();
            if (data != null) {
                res.send({
                    status: true,
                    message: 'Added Successfully'
                })
            }
            else {
                res.send({
                    status: false,
                    message: 'Added UnSuccessfull'
                })
            }
        }
        catch (err) {
            res.send({
                status: false,
                message: 'Something is missing'
            })
        }
    })

// Update cart
router.route('/updatecart/:id')
    .put(async (req, res) => {
        console.log(req.body)
        try {
            const data = await ordersModel.updateOne({ _id: req.params.id },
                {
                    $set: {
                        userid: req.body.userid,
                        Instrumentid: req.body.Instrumentid,
                        qty: req.body.qty,
                        cart: false,
                        sold: true
                    }
                })
            if (data != null) {
                res.send({
                    status: true,
                    message: 'Added Successfully'
                })
            }
            else {
                res.send({
                    status: false,
                    message: 'Added UnSuccessfull'
                })
            }
        }
        catch (err) {
            res.send({
                status: false,
                message: 'Something is missing'
            })
        }
    })
    .delete(async (req, res) => {
        try {
            const data = await ordersModel.deleteOne({ _id: req.params.id })
            res.json(data)
        }
        catch (err) {
            res.json({ message: err })
        }
    })

module.exports = router
