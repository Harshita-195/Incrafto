const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const studentRoutes = require('./routes/students')
const teacherRoutes = require('./routes/teachers')
const courseRoutes = require('./routes/courses')
const batchRoutes = require('./routes/batches')
const placementRoutes = require('./routes/placements')
const dashboardRoutes = require('./routes/dashboard')

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log("❌ MongoDB Error:", err.message);
  });

// Test Route
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

// Auth Routes
app.use("/api/auth", authRoutes);

// Student CRUD Routes
app.use('/api/students', studentRoutes)

app.use('/api/teachers', teacherRoutes)
app.use('/api/courses', courseRoutes)
app.use('/api/batches', batchRoutes)
app.use('/api/placements', placementRoutes)
app.use('/api/admin/dashboard', dashboardRoutes)

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});