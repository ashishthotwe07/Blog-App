import mongoose from "mongoose";

// Connect to MongoDB database
mongoose.connect("mongodb://0.0.0.0:27017/blogapp");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

export default db;
