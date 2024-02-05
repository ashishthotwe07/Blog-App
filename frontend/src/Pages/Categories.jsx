import React from "react";
import { useSelector } from "react-redux";
import { postsSelector } from "../Redux/Reducers/PostSlice";
import { Link } from "react-router-dom";

const Categories = () => {
  const { posts } = useSelector(postsSelector);

  // Group posts by category
  const categorizedPosts = posts.reduce((acc, post) => {
    acc[post.category] = [...(acc[post.category] || []), post];
    return acc;
  }, {});

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
      {Object.keys(categorizedPosts).map((category) => (
        <div key={category}>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">
            {category.toUpperCase()}
          </h2>
          <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
            {categorizedPosts[category].map((post) => (
              <article
                key={post.id}
                className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
                style={{
                  backgroundImage: `url(${post.image})`,
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
                <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                  <h3 className="text-center">
                    <Link
                      className="text-white text-2xl font-bold text-center"
                      to={`post/${post._id}`}
                    >
                      <span className="absolute inset-0"></span>
                      {post.title}
                    </Link>
                  </h3>
                </div>
              </article>
            ))}
          </section>
        </div>
      ))}
    </div>
  );
};

export default Categories;
