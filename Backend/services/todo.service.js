const TodoModel =require("../model/todo.model");

class ToDoServices{
    static async createTodo(userId,title,desc){
        const createtodo=new TodoModel({userId,title,desc});
        return await createtodo.save();

    }
    static async getTodoData(userId){
        const todoData =await TodoModel.find({userId});
            return todoData;
    }
    

}
module.exports=ToDoServices;