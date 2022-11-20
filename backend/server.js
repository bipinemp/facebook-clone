const express = require("express");
const postRoutes = require("./routes/postRoutes");
const authRoutes = require("./routes/authRoutes");
const mongodb = require("./connection/db");
const cors = require("cors");

const app = express();

const PORT = 4000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/posts/", postRoutes);
app.use("/api/auth/", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Connection to Database
mongodb();

app.listen(PORT, (req, res) => {
  console.log("Backend running at http://localhost:" + PORT);
});
