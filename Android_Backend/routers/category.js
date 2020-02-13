const express = require('express')
const router = express.Router();
const categoryModel = require('../models/category')

router.route('/category')
    .get(async(req,res)=>{
        console.log("Hello")
        const data = await categoryModel.find({})
        res.send(data)
    })
    .post(async(req,res)=>{
        console.log(req.body)
        const post = new categoryModel({
            name:req.body.name,
            imageName : req.body.imageName
            
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
            const data = await categoryModel.deleteMany()
            res.json(data)
        }
        catch(err){
            res.json({message:err})
        }
    })

    router.route('/:id')
    .get( async (req,res)=>{
        try{
            const data = await categoryModel.findById({_id:req.params.id})
            res.json(data)
        }
        catch(err){
            res.json({message:err})
        }
    })
    .put( async (req, res)=>{
        try{
            
            const data = await categoryModel.updateOne({_id:req.params.id},
                {
                    $set: {
                    
                        name:req.body.name,
                        imageName:req.body.imageName,
                        
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
            const data = await categoryModel.deleteOne({_id:req.params.id})
            res.json(data)
        }
        catch(err){
            res.json({message:err})
        }
    })
    module.exports = router