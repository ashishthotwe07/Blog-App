import express from "express";
import postRouter from "./post.route.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello");
});


router.use('/post' , postRouter);


export default router;
