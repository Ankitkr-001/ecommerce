const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User.model");


// register
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;


  try {
    const checkUser = await User.findOne({ email })
    if (checkUser) return res.json({
      success: false,
      message: "Email already exists"
    });

    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      userName,
      email,
      password: hashPassword,
    });
    await newUser.save();
    res.status(200).json({
      success: 200,
      message: "User registered Sucessfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured while registering user",
    });
  }
};



// Login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser) return res.json({
      success: false,
      message: "User does not exist"
    })
    const checkPasswordMatch = await bcrypt.compare(password, checkUser.password)
    if (!checkPasswordMatch) return res.json({
      success: false,
      message: "Password does not match"
    })
    const token = jwt.sign({ userId: checkUser._id, role: checkUser.role, email: checkUser.email }, process.env.SECRET_KEY
      , {
        expiresIn: "1h",
      }
    );
    res.cookie('token', token, {
      httponly: true,
      secure: false,
    }).json({
      success: true,
      message: "User logged in successfully",
      token: token
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};



// logout

// auth-middleware


module.exports = { registerUser }
