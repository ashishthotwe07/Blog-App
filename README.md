# Personal Blog App

## Overview

The Personal Blog App is a full-stack web application built using the MERN (MongoDB, Express, React, Node.js) stack And Redux Toolkit. It serves as a learning project aimed at mastering the fundamentals of web development with the MERN stack.

## Features

### Basic Functionality
- **Create, Read, Update, Delete (CRUD) Operations:** Admin users can perform CRUD operations on blog posts, allowing them to create new posts, view existing posts, update post content, and delete posts.
- **Category-based Organization:** Posts can be categorized based on topics such as technology, fitness, literature, etc., providing users with organized access to content.
- **Responsive Design:** The application is designed to be responsive, ensuring optimal viewing and usability across various devices and screen sizes.

### Backend
- **Express.js Backend:** The backend server is built with Express.js, a lightweight web application framework for Node.js. It handles routing, middleware, and server-side logic.
- **MongoDB Database:** MongoDB, a NoSQL database, is used to store blog post data. The database schema is designed to accommodate blog posts with fields such as title, content, author, category, and creation date.
- **RESTful API:** The backend exposes RESTful API endpoints to interact with the database, enabling frontend components to perform CRUD operations on blog posts.

### Frontend
- **React.js Frontend:** The frontend user interface is developed using React.js, a JavaScript library for building dynamic user interfaces. It leverages reusable components, state management, and virtual DOM for efficient rendering.
- **Redux Toolkit** The Redux toolkit allowing the easy state manangement and making the API Calls to backend
- **Tailwind CSS Styling:** Tailwind CSS is used for styling the frontend components, providing a utility-first approach to CSS that allows for rapid prototyping and customization.

## Getting Started

### Prerequisites
- Node.js and npm installed on your local machine.
- MongoDB installed and running locally or accessible via a MongoDB Atlas cluster.

### Installation
1. Clone the repository to your local machine.
   ```
   git clone https://github.com/ashishthotwe07/blog-app-No-Auth.git
   ```
2. Navigate to the project directory.
   ```
   cd personal-blog-app
   ```
3. Install backend dependencies.
   ```
   npm install
   ```
4. Start the backend server.
   ```
   npm start
   ```
5. Open a new terminal window/tab.
6. Navigate to the frontend directory.
   ```
   cd frontend
   ```
7. Install frontend dependencies.
   ```
   npm install
   ```
8. Start the frontend development server.
   ```
   npm start
   ```
9. Access the application in your web browser at `http://localhost:3000`.

## Usage
- **Creating a New Post:** Click on the "Create Post" button to create a new blog post. Fill in the required fields such as title, content, and category, then click "Submit" to save the post.
- **Viewing Posts:** Navigate to the Home page to view a list of existing blog posts. Click on a post title to view its full content.
- **Updating or Deleting Posts:** Admin users can edit or delete existing posts by clicking on the respective buttons in the post details view.

## Contributing
Contributions to the Personal Blog App are welcome! If you have suggestions for new features, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

