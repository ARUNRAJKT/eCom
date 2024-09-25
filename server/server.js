const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables from a .env file
dotenv.config({ path: "./config/config.env" });

const app = express();
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");

// Middleware
app.use(cors());
app.use(express.json());

// Basic route for testing
app.get("/", (req, res) => {
  res.status(200).json({ success: true });
});

// Use routes
app.use("/admins", adminRoutes);
app.use("/user", userRoutes);

// Define port from environment variable or default to 3000
const port = process.env.NODE_PORT || 3000;

// Function to connect to MongoDB with fallback logic
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.CLOUD_DB_URL);
    console.log("Connected to cloud database successfully");
  } catch (error) {
    console.error(
      "Cloud database connection failed. Trying local database...",
      error
    );
    try {
      await mongoose.connect(process.env.LOCAL_DB_URL);
      console.log("Connected to local database successfully");
    } catch (localError) {
      console.error("Local database connection failed. Error:", localError);
      process.exit(1); // Exit the process if both connections fail
    }
  }
};

// Connect to the database and start the server
const startServer = async () => {
  try {
    await connectToDatabase();
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1); // Exit the process if server startup fails
  }
};

startServer();
