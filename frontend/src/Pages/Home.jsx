import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [likedPosts, setLikedPosts] = useState(new Set());

  const toggleLike = (postId) => {
    const updatedLikedPosts = new Set(likedPosts);
    if (likedPosts.has(postId)) {
      updatedLikedPosts.delete(postId);
    } else {
      updatedLikedPosts.add(postId);
    }
    setLikedPosts(updatedLikedPosts);
  };

  const recentPosts = [
    {
      id: 1,
      title: "How to Improve Your Productivity",
      image:
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      user: "John Doe",
      likes: 15,
      date: "2024-02-07",
    },
    {
      id: 2,
      title: "The Benefits of Meditation",
      image:
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      user: "Jane Smith",
      likes: 10,
      date: "2024-02-06",
    },
    {
      id: 3,
      title: "10 Tips for a Healthy Lifestyle",
      image:
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
      user: "Alex Johnson",
      likes: 20,
      date: "2024-02-05",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">From the Blog</h2>
        <p className="text-gray-600">
          Learn how to grow your business with our expert advice.
        </p>
      </div>
      <div className="grid grid-cols-1 m-10 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {recentPosts.map((post) => (
          <article
            key={post.id}
            className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8)), url(${post.image})`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out"></div>
            <div className="relative flex flex-col justify-between h-full px-4 sm:px-6 lg:px-4">
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src={`https://i.pravatar.cc/100?u=${post.image}`}
                    alt={post.user}
                  />
                  <p className="text-white text-sm">{post.user}</p>
                </div>
                <p className="text-white text-sm">{post.date}</p>
              </div>
              <h3 className="text-white text-2xl font-bold text-center">
                <Link className="absolute inset-0" to={`post/${post.id}`} />
                {post.title}
              </h3>
              <div className="flex justify-center items-center mt-2">
                <img
                  src={
                    likedPosts.has(post.id)
                      ? "https://cdn-icons-png.flaticon.com/128/2550/2550290.png"
                      : "https://cdn-icons-png.flaticon.com/128/2550/2550224.png"
                  }
                  alt="like"
                  className="w-6 h-6 absolute top-52 right-10 cursor-pointer filter invert"
                  onClick={() => toggleLike(post.id)}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Home;
