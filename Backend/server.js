import exp from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import { employee } from "./API/employee.js";
import cors from "cors";

config();

const app = exp();

// Middleware
app.use(exp.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://atp-2opl.vercel.app",
    ],
    credentials: true,
  })
);

// Home Route
app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

// API Routes
app.use("/employee-api", employee);

// Port
const PORT = process.env.PORT || 3000;

// Connect Database and Start Server
async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_url);

    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.log("Database connection error:", err.message);
  }
}

connectDB();

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.log("Error:", err.message);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});
