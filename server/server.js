const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const postsRouter = require("./routes/postRoutes.js");
const morgan = require("morgan");
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("combined"));
app.use("/api/posts", postsRouter);
connectDB();

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
