const express =require('express');
const userRoutes=require('./routes/user.routes');
const todoRoute=require('./routes/todo.route');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.json());
app.use('/',todoRoute);

app.use('/',userRoutes);
module.exports=app;

