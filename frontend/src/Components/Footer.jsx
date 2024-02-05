import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex items-center mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mr-4">Ashish Thotwe</h2>
          <p className="text-gray-300">Software Developer</p>
        </div>

        <div className="flex items-center">
          <a
            target="blank"
            href="https://github.com/ashishthotwe07"
            className="text-gray-300 hover:text-white mr-4"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/25/25657.png"
              className="w-9"
              alt=""
            />
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/in/ashish-thotwe-14512b212/"
            className="text-gray-300 hover:text-white mr-4"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
              className="w-9"
              alt=""
            />
          </a>
          <a
            target="blank"
            href="https://www.instagram.com/ashishhhh_07?igsh=MXEydzIyemNvamwydg=="
            className="text-gray-300 hover:text-white mr-4"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/174/174855.png"
              className="w-9"
              alt=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
