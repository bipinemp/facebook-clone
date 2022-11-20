const Post = require("../models/postModel");
const mongoose = require("mongoose");

//Create a Post
const createPost = async (req, res) => {
  const { desc } = req.body;
  const profile = req.file ? req.file.filename : null;
  try {
    const user_id = req.user._id;
    const post = await Post.create({
      desc,
      profile,
      user_id,
    });
    res.status(200).json({ post, sucess: "Post Create Sucessfully" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

//Read a Post
const readPost = async (req, res) => {
  const user_id = req.user._id;
  try {
    const posts = await Post.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json({ posts, sucess: "Posts Readed Sucessfully" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

//Read all Posts of all Users
const readPosts = async (req, res) => {
  try {
    const posts = await Post.find({})
      .populate("user_id")
      .sort({ createdAt: -1 });

    res.status(200).json({ posts, sucess: "Posts Readed Sucessfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Like || Dislike a post
const likedislikePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json({ sucess: "The post is liked" });
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json({ sucess: "The post is Disliked" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete a Post
const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Post exists" });
  }
  try {
    const post = await Post.findByIdAndDelete({ _id: id });
    res.status(200).json({ post, sucess: "Post Deleted Successfully" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

//Update a Post
const updatePost = async (req, res) => {
  const { desc } = req.body;
  const profile = req.file.filename;

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ error: error.message });
  }

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      { _id: req.params.id },
      {
        desc: desc,
        profile: profile,
      }
    );
    res.status(200).json({ updatedPost, sucess: "Post Updated Sucessfully" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  createPost,
  readPost,
  readPosts,
  likedislikePost,
  deletePost,
  updatePost,
};
