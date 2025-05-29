const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");
class UserServices {
  static async registerUser(email, password) {
    try {
      const createUser = new userModel({ email, password });
      return await createUser.save();
    } catch (err) {
      throw new Error(err);
    }
  }
  static async checkUser(email) {
    try {
      return await userModel.findOne({ email });
    } catch (err) {
      throw new Error(err);
    }
  }
  static async generateTOken(tokendata, secretKey, jwt_expir) {
    return jwt.sign(tokendata, secretKey, { expiresIn: jwt_expir });
  }
}
module.exports = UserServices;