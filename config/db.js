const mongoose =require('mongoose');

const connection=mongoose.createConnection('mongodb://127.0.0.1:27017/newtodo').on('open',()=>{
    console.log('Database connected successfully');
}).on(`error`,()=>{
    console.log('there is an eror');
});

module.exports = connection;