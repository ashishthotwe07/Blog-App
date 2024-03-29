import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();
// Connect to MongoDB database
mongoose.connect(process.env.MONGO);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

export default db;
