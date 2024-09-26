const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables from a .env file
dotenv.config({ path: "./config/config.env" });

const app = express();
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

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
app.use("/products", productRoutes);

// Define port from environment variable or default to 3000
const port = process.env.NODE_PORT || 3000;

// Function to connect to MongoDB with fallback logic
const connectToDatabase = async () => {
    try {
      // Try to connect to the local database first
      await mongoose.connect(process.env.LOCAL_DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to local database successfully");
    } catch (localError) {
      console.error(
        "Local database connection failed. Trying cloud database...",
        localError
      );
      try {
        // Try to connect to the cloud database if local connection fails
        await mongoose.connect(process.env.CLOUD_DB_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log("Connected to cloud database successfully");
      } catch (cloudError) {
        console.error("Cloud database connection failed. Error:", cloudError);
        process.exit(1); 
    
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
    process.exit(1); 
  }
};

startServer();
