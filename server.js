const express = require("express");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use("/contacts", contactRoutes);

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
