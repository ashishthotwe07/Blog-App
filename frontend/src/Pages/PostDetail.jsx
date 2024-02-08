import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { postsSelector } from "../Redux/Reducers/PostSlice";

export default function PostDetail() {
  const { id } = useParams();
  const { posts } = useSelector(postsSelector);

  // Find the post with the given ID
  const post = posts.find((post) => post._id === id);

  // If post not found, display a message
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className=" mx-auto mb-10 py-10 px-10">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full h-80">
          <img
            className="w-full  rounded h-full"
            src={post.image}
            alt={post.title}
          />
        </div>

        <div className="p-6">
          <div className="mb-4">
            <h2 className="text-center text-3xl font-bold mb-2">
              {post.title}
            </h2>
            <div className="flex justify-center mb-2">
              <h1 className="text-gray-600 font-bold ml-1">{post.category}</h1>
            </div>
            <p className="text-gray-600 text-sm text-center mb-2">
              Posted on {new Date(post.createdAt).toLocaleDateString()} by{" "}
              {post.author}
            </p>
          </div>
          <div
            className="text-gray-700 text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );
}
