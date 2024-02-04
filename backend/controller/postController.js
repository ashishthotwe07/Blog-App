import Post from "../models/post.model.js";

class PostController {
  async getAllPosts(req, res) {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (error) {
      console.error("Error fetching posts: its from controller", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async createPost(req, res) {
    try {
      const post = await Post.create(req.body);
      res.json(post);
    } catch (error) {
      console.error("Error creating post:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async updatePost(req, res) {
    const postId = req.params.postId;
    const updates = req.body; // Data to update

    try {
      // Find the post by ID and update it
      const updatedPost = await Post.findByIdAndUpdate(postId, updates, {
        new: true,
      });

      if (!updatedPost) {
        return res.status(404).json({ message: "Post not found" });
      }

      res.json(updatedPost);
    } catch (error) {
      console.error("Error updating post:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }


  async increaseLikes(req, res) {
    const postId = req.params.postId;

    try {
      // Find the post by ID and update the likes count
      const updatedPost = await Post.findByIdAndUpdate(
        postId,
        { $inc: { likes: 1 } }, // Increment likes count by 1
        { new: true }
      );

      if (!updatedPost) {
        return res.status(404).json({ message: "Post not found" });
      }

      res.json(updatedPost);
    } catch (error) {
      console.error("Error increasing likes:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async decreaseLikes(req, res) {
    const postId = req.params.postId;

    try {
      // Find the post by ID and update the likes count
      const updatedPost = await Post.findByIdAndUpdate(
        postId,
        { $inc: { likes: -1 } }, // Decrement likes count by 1
        { new: true }
      );

      if (!updatedPost) {
        return res.status(404).json({ message: "Post not found" });
      }

      res.json(updatedPost);
    } catch (error) {
      console.error("Error decreasing likes:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async deletePost(req, res) {
    const postId = req.params.postId;

    try {
      // Find the post by ID and delete it
      const deletedPost = await Post.findByIdAndDelete(postId);

      if (!deletedPost) {
        return res.status(404).json({ message: "Post not found" });
      }

      res.json({ message: "Post deleted successfully" });
    } catch (error) {
      console.error("Error deleting post:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default PostController;
