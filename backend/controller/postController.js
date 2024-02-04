import Post from "../models/post.model.js";

class PostController {
  getAllPosts(req, res) {
    res.send("all posts");
  }
  createPost(req, res) {
    res.send("Created");
  }

  updatePost(req, res) {
    const postId = req.params.postId;

    res.send(`update`);
  }

  deletePost(req, res) {
    const postId = req.params.postId;
    res.send("deleted");
  }
}

export default PostController;
