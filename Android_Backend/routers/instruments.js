const express = require('express')
const router = express.Router();
const instrumentsModel = require('../models/instruments')


router.route('/instruments/:id')
    .get(async(req,res)=>{
        const data = await instrumentsModel.find({categoryid:req.params.id})
        console.log("hit")
        res.send(data)
    })
    .post(async(req,res)=>{
        console.log(req.body)
        const post = new instrumentsModel({
            categoryid:req.body.categoryid,
            name:req.body.name,
            price: req.body.price,
            description:req.body.description,
            photo: req.body.photo

        })
        try{
        const data = await post.save();
        if(data!=null){
            res.send({
                status:true,
                message:'Added Successfully'
            })
        }
        else{
            res.send({
                status:false,
                message:'Added UnSuccessfull'
            })
        }
    }
    catch(err){
        res.send({
            status:false,
            message:'Something is missing'
        })
    }
    })
    .delete( async(req,res)=>{
        try{
            const data = await instrumentsModel.deleteMany()
            res.json(data)
        }
        catch(err){
            res.json({message:err})
        }
    })

router.route('/instruments/getInstrumentByID/:id')
    .get( async (req,res)=>{
        try{
            console.log("Instrument hit")
            const data = await instrumentsModel.findById({_id:req.params.id})
            res.json(data)
        }
        catch(err){
            res.json({message:err})
        }
    })
    .put( async (req, res)=>{
        try{
            
            const data = await instrumentsModel.updateOne({_id:req.params.id},
                {
                    $set: {
                        categoryid:req.body.categoryid,
                        name:req.body.name,
                        price: req.body.price,
                        description:req.body.description,
                        photo: req.body.photo
                    }
                })
            res.json(data)
        }
        catch(err){
            res.json({message:err})
        }
    })

    .delete( async (req, res)=>{
        try{
            const data = await instrumentsModel.deleteOne({_id:req.params.id})
            res.json(data)
        }
        catch(err){
            res.json({message:err})
        }
    })

    module.exports = router