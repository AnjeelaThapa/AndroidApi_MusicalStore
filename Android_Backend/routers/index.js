const express = require('express')
const router = express.Router();
const userModel = require('../models/index')

router.route('/signup')
    .get(async(req,res)=>{
        const data = await userModel.find({})
        res.send(data)
    })
    .post(async(req,res)=>{
        console.log(req.body)
        const post = new userModel({
            fullname:req.body.fullname,
            address:req.body.address,
            phone:req.body.phone,
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        })
        try{
        const data = await post.save();
        if(data!=null){
            res.status(201).send({
                status:true,
                message:'Register Successful'
            })
        }
        else{
            res.send({
                status:false,
                message:'Register UnSuccessful'
            })
        }
    }
    catch(err){
        res.send({
            status:false,
            message:'Something is wrong'
        })
    }
    })
    .delete( async(req,res)=>{
        try{
            const data = await userModel.deleteMany()
            res.json(data)
        }
        catch(err){
            res.json({message:err})
        }
    })

    router.patch('/update', async (req, res) => {
        try {
            await User.findByIdAndUpdate(req.body._id, req.body, {new: true}, (error, updatedUser) => {
                if (error) throw new Error(error);
                res.status(200).send(updatedUser);
            });
        } catch (error) {
            res.status(400).send({error: error})
        }
    });

router.route('/login')
    .post( async (req,res)=>{
        const username = req.body.username
        const password = req.body.password
        // console.log(req.body)
        const data = await userModel.findOne({username:username})
        console.log(data)
        if(data!=null){
            if(data.password===password){
                res.status(201).send({
                    status:true,
                    message:'Login Successful',
                    _id : data._id
                })
            }
            else{
                res.send({
                    status:false,
                    message:'Password Wrong'
                })
            }
        }
        else{
            res.send({
                status:false,
                message:'User Not Found'
            })
        }
    })

    module.exports = router