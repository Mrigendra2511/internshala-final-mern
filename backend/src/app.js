import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(cors({
    origin: [
        "https://internshala-final-mern.vercel.app",
        "http://localhost:5173",
        "http://localhost:3000"
    ],
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

// Exact disk names matching
import userRouter from "./routes/user.routes.js";
import internshipRouter from "./routes/internship.routes.js";
import applicationRouter from "./routes/application.routes.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/internships", internshipRouter);
app.use("/api/v1/applications", applicationRouter);

app.get("/api/v1/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Internshala Backend is Running Smoothly! 🚀"
    });
});

app.use(errorHandler);

export { app };