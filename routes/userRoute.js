const express=require("express")
const userRouter=express.Router()
const bcrypt=require('bcrypt')
const { UserModel } = require("../models/userModel")
const jwt=require('jsonwebtoken')
require("dotenv").config()

userRouter.post("/signup",(req,res)=>{
    const{email,pass}=req.body
    try {
        bcrypt.hash(pass,5,async(err,hash)=>{
             if(err){
                res.json({error:err.message})
             }else{
                const user=new UserModel({email,pass:hash})
                await user.save()
                res.json({msg:"user has been registered", user:req.body})
             }
        })
    } catch (error) {
        res.json({error:err.message})
    }

})

userRouter.post("/login",async(req,res)=>{
    const{email,pass}=req.body

    try {
        const user=await UserModel.findOne({email})
        if(user){
            bcrypt.compare(pass,user.pass,(err,result)=>{
                if(result){
                    let token=jwt.sign({userID:user._id,user:user.name},process.env.secret)
                    res.json({msg:"Logged in"},token,user)
                }else{
                    res.json({msg:"wrong credentials"})
                }
            })
        }else{
            res.json({msg:"user doesnot exists"})
        }

       
        
    } catch (error) {
        res.json({error:err.message})
    }

})





module.exports={userRouter}