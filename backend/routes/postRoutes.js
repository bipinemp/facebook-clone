const express = require("express");
const reqAuth = require("../middleware/reqAuth");
const {
  createPost,
  readPost,
  deletePost,
  updatePost,
  readPosts,
  likedislikePost,
} = require("../controllers/postController");

const multer = require("multer");
// Multer Image Upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage: storage });

const router = express.Router();

//Require auth for all post routes
router.use(reqAuth);

//Read all Posts of all users
router.get("/all", readPosts);

//Create a Post
router.post("/", upload.single("profile"), createPost);

//Read a Post of a single user
router.get("/", readPost);

//Read all Posts of all users
router.get("/posts", readPosts);

// Like || Dislike a post
router.put("/:id/like", likedislikePost);

//Delete a Post
router.delete("/:id", deletePost);

//Update a Post
router.patch("/:id", upload.single("profile"), updatePost);

module.exports = router;
