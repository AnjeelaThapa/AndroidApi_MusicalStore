const express = require('express')
const router = express.Router();
const ContactModel = require('../models/contactUs')

router.route('/contactUs')
    .get(async(req,res)=>{
        console.log("Hello")
        const data = await ContactModel.find({})
        res.send(data)
    })
    .post(async(req,res)=>{
        console.log(req.body)
        const post = new ContactModel({
            name:req.body.name,
            email : req.body.email,
            message: req.body.message
            
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
            const data = await ContactModel.deleteMany()
            res.json(data)
        }
        catch(err){
            res.json({message:err})
        }
    })

    router.route('/:id')
    .get( async (req,res)=>{
        try{
            const data = await ContactModel.findById({_id:req.params.id})
            res.json(data)
        }
        catch(err){
            res.json({message:err})
        }
    })
    .put( async (req, res)=>{
        try{
            
            const data = await ContactModel.updateOne({_id:req.params.id},
                {
                    $set: {
                    
                        name:req.body.name,
                        email : req.body.email,
                        message: req.body.message
                        
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
            const data = await ContactModel.deleteOne({_id:req.params.id})
            res.json(data)
        }
        catch(err){
            res.json({message:err})
        }
    })
    module.exports = router