const userModel =require('../model/user.model');

class UserServices{
static async registerUser(email,password){
    try{
        const createUser=new userModel({email,password});
        return await createUser.save();
    }catch(err){
        throw new Error(err);
    }
}
}
module.exports=UserServices;