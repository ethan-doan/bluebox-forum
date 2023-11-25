// Express Setup
const express = require("express");
const app = express();
app.use(express.json());

// CORS Handling
const cors = require("cors");
app.use(cors());

// Morgan for API Logging
const morgan = require("morgan");
app.use(morgan("combined"));

// Connect to MongoDB
const connectDB = require("./config/db.js");
connectDB();

// Routes Setup
const postsRouter = require("./routes/postRoutes.js");
app.use("/api/posts", postsRouter);
// const commentsRouter = require("./routes/commentRoutes.js");
// app.use("/api/comments", commentsRouter);

// Catch-all Route for Handling 404 Errors
app.use((req, res, next) => {
  res.status(404).send("Page not found");
});

// Global Error Handler
app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send("Something broke!");
});

// Logging
app.use((req, res, next) => {
  console.log(
    `${new Date().toISOString()} - ${req.method} request to ${req.url}`
  );
  next();
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = app;
