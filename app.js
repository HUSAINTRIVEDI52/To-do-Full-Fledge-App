const express =require('express');
const userRoutes=require('./routes/user.routes');

const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.json());

app.use('/',userRoutes);
module.exports=app;

