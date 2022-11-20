const jwt = require("jsonwebtoken");
const User = require("../models/authModel");

const reqAuth = async (req, res, next) => {
  // verify authentication
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      token = authorization.split(" ")[1];
      //verify token
      const { userID } = jwt.verify(token, "secret12311231jjkjhs8wkdwqicdo");
      // get user from token
      req.user = await User.findById(userID).select("_id");
      next();
    } catch (error) {
      return res.status(400).json({ message: "Unauthorized User" });
    }
  } else {
    return res.status(400).json({ message: "Unauthorized User" });
  }
};

module.exports = reqAuth;
