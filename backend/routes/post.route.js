import express from "express";
import PostController from "../controller/postController.js";

const router = express.Router();
const postController = new PostController();

// CRUD operation handler routes for posts

router.get("/posts", postController.getAllPosts);

router.post("/create-post", postController.createPost);

router.put("/update-post/:postId", postController.updatePost);

router.delete("/delete-post/:postId", postController.deletePost);

// Additional routes for handling like operations
router.put("/increase-likes/:postId", postController.increaseLikes);

router.put("/decrease-likes/:postId", postController.decreaseLikes);

export default router;
