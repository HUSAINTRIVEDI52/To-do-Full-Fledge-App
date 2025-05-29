const mongoose= require('mongoose');
const db=require('../config/db');
const {Schema} =mongoose;
const userModel=require("../model/user.model");


const todoSchema =new Schema({
   userId:{
    type:Schema.Types.ObjectId,
    ref:userModel.modelName,
   },
   title :{
       type:String,
       required:true
   },
   desc:{
       type:String,
       required:true
   }
});

const ToDoModel =db.model('todo',todoSchema);

module.exports=ToDoModel;