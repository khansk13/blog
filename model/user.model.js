const mongoose =require("mongoose");

const schema = mongoose.Schema

const modi=new schema
({
title:{
    type:String,
    required:true
},
des:{
     type:String,
     required:true
},
data:Buffer,
contentType:String

})
const models=mongoose.model("user",modi)

module.exports=models;
