const express = require('express')
const router = express.Router();
const stockModel = require('../models/stock')

router.route('/stock')
    .get(async(req,res)=>{
        const data = await stockModel.find({})
        res.send(data)
    })
    .post(async(req,res)=>{
        console.log(req.body)
        const post = new stockModel({
            Instrumentid:req.body.Instrumentid,
            quantity:req.body.quantity
            
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
            const data = await stockModel.deleteMany()
            res.json(data)
        }
        catch(err){
            res.json({message:err})
        }
    })

    router.route('/:id')
    .get( async (req,res)=>{
        try{
            const data = await stockModel.findById({_id:req.params.id})
            res.json(data)
        }
        catch(err){
            res.json({message:err})
        }
    })
    .put( async (req, res)=>{
        try{
            
            const data = await stockModel.updateOne({_id:req.params.id},
                {
                    $set: {
                    
                        Instrumentid:req.body.Instrumentid,
                        quantity:req.body.quantity
                        
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
            const data = await stockModel.deleteOne({_id:req.params.id})
            res.json(data)
        }
        catch(err){
            res.json({message:err})
        }
    })
    module.exports = router