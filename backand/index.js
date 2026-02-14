import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";

import userRoute from "./routes/userroute.js";
import companyRoute from "./routes/companyroute.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config();

const app = express();

/* ✅ MIDDLEWARES */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://jobhunt2-zune-git-main-gauravs-projects-3ab1b229.vercel.app"
  ],
  credentials: true
}));

/* ✅ ROUTES */
app.get("/", (req, res) => {
    res.send("Server working fine");
});

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

/* ✅ SERVER */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at ${PORT}`);
});
