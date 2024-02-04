import express from 'express';
import bodyParser from 'body-parser';
import db from './config/mongoose.js';
import router from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api' , router);



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
