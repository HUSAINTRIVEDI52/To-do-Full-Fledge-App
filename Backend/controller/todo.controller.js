const ToDoServices = require("../services/todo.service");

exports.createTodo = async (req, res, next) => {
  try {
    const { userId, title, desc } = req.body;
    let todo = await ToDoServices.createTodo(userId, title, desc);

    res.json({ status: true, success: todo });
  } catch (error) {
    next(error);
  }
};

exports.getUser =async(req,res,next)=>{
try{
  const userId=req.query.userId;
  let todo=await ToDoServices.getTodoData(userId);
  res.json({status:true,success:todo});
}catch(error){
  next(error)
}


}
