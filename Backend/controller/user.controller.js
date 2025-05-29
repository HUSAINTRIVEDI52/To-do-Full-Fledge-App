const UserServices = require("../services/user.services");

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const successRes = await UserServices.registerUser(email, password);

    res.json({ status: true, success: "User Registered Successfully" });
  } catch (err) {
    throw err;
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserServices.checkUser(email);
    if (!user) {
      throw new Error("User doesn't exist");
    }
    const isMatch = user.comparePassword(password);
    if (isMatch == false) {
      throw new Error("Password Invalid");
    }

    let tokendata = { _id: user._id, email: user.email };
    const token = await UserServices.generateTOken(
      tokendata,
      "secretKey",
      '1h'
    );
    res.status(200).json({ status: true, token: token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
    throw err;
  }
};