const mongoose = require("mongoose");

const mongoDBURI = "mongodb://localhost:27017/bluebox-db";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoDBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB...");
  } catch (err) {
    console.error("Could not connect to MongoDB:", err);
    // Handle the error appropriately
  }
};

module.exports = connectDB;
