const express = require("express");
const { userRegister, userLogin } = require("../controllers/authController");

const router = express.Router();

const multer = require("multer");
// Multer Image Upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/auth");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Auth Routes
router.post("/register", upload.single("pic"), userRegister);
router.post("/login", userLogin);

module.exports = router;
