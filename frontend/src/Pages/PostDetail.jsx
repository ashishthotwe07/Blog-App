import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { postsSelector } from "../Redux/Reducers/PostSlice";
import ReactHtmlParser from "react-html-parser";

function PostDetail() {
  const { postId } = useParams();
  const { posts } = useSelector(postsSelector);
  const post = posts.find((post) => post._id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  const { title, content, author, image, createdAt } = post;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <img src={image} alt="" />
      <p className="text-gray-600 mb-2">Author: {author}</p>
      <p className="text-gray-600 mb-4">
        Published on: {createdAt.substring(0, 10)}
      </p>
      <div className="prose prose-lg max-w-none" style={{ fontSize: "1.2rem" }}>
        {/* Render HTML content using react-html-parser */}
        {ReactHtmlParser(content)}
      </div>
    </div>
  );
}

export default PostDetail;
