import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-3xl mx-auto px-4 bg-cyan-500">
        <div className="rounded-lg shadow-lg overflow-hidden bg-cyan-500">
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <p className="text-lg mb-4">
              Welcome to my personal blog! My name is{" "}
              <b className="text-red-600">Ashish Thotwe</b> and I'm passionate
              about exploring the intersection of technology, science, and
              fitness.
            </p>
            <p className="text-lg mb-4">
              I hold a degree in{" "}
              <b className="text-purple-600">B.Sc Bioinformatics</b>. Through
              this blog, I share my insights, experiences, and discoveries in
              biotechnology, bioinformatics, software development, and fitness.
            </p>
            <p className="text-lg mb-4">
              As a biotechnology enthusiast, I'm fascinated by the latest
              advancements in genetic engineering, molecular biology, and
              biopharmaceuticals. <br></br>In the field of bioinformatics, I delve into
              data analysis, computational biology, and genomics.<br></br> My journey in
              software development began with a curiosity to build and create.
              Over the years, I've honed my skills in web development, mobile
              app development, and machine learning. I'm passionate about
              leveraging technology to solve real-world problems and improve
              lives.
            </p>
            <p className="text-lg">
              Alongside my love for science and technology, I'm committed to
              maintaining a healthy and active lifestyle. Fitness is not just a
              hobby for me; it's a way of life. From strength training to yoga,
              I enjoy exploring different fitness modalities and challenging
              myself to achieve new goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
