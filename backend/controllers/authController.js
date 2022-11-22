const User = require("../models/authModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

// User Registration
const userRegister = async (req, res) => {
  const { fname, lname, email, password, gender, year, month, day } = req.body;
  const pic = req.file ? req.file.filename : null;
  let emptyFields = [];
  if (!fname) {
    emptyFields.push("fname");
  }
  if (!lname) {
    emptyFields.push("lname");
  }
  if (!email) {
    emptyFields.push("email");
  }
  if (!password) {
    emptyFields.push("password");
  }
  if (!gender) {
    emptyFields.push("gender");
  }
  if (!year) {
    emptyFields.push("year");
  }
  if (!month) {
    emptyFields.push("month");
  }
  if (!day) {
    emptyFields.push("day");
  }
  if (!pic) {
    emptyFields.push("pic");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ message: "** Please fill all fields **", emptyFields });
  }
  try {
    if (fname && lname && email) {
      const isUser = await User.findOne({ email: email });
      if (isUser) {
        return res.status(400).json({ message: "User already exists !!" });
      } else {
        // Password Hashing
        const genSalt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, genSalt);

        // Save the User
        const newUser = User({
          fname,
          lname,
          email,
          password: hashedPassword,
          gender,
          year,
          month,
          day,
          pic,
        });

        const regUser = await newUser.save();
        if (regUser) {
          return res
            .status(201)
            .json({ message: "Sucessfull Registered", user: regUser });
        }
      }
    } else {
      return res.status(400).json({ message: "All fields are required !!" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// User Login
const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (email && password) {
      const isUser = await User.findOne({ email: email });
      if (isUser) {
        if (
          email === isUser.email &&
          (await bcryptjs.compare(password, isUser.password))
        ) {
          // Generate token
          const token = jwt.sign(
            { userID: isUser._id },
            "secret12311231jjkjhs8wkdwqicdo",
            {
              expiresIn: "1d",
            }
          );
          return res.status(200).json({
            message: "Login Sucessfull",
            token,
            fname: isUser.fname,
            lname: isUser.lname,
            email: isUser.email,
            pic: isUser.pic,
          });
        } else {
          return res.status(400).json({ message: "Invalid Credentials" });
        }
      } else {
        return res.status(400).json({ message: "User not registered" });
      }
    } else {
      let emptyFields = [];
      if (!email) {
        emptyFields.push("email");
      }
      if (!password) {
        emptyFields.push("password");
      }
      if (emptyFields.length > 0) {
        return res
          .status(400)
          .json({ message: "** Please fill all fields **", emptyFields });
      }
      res.status(400).json({ message: "All fields are required !!" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  userRegister,
  userLogin,
};
