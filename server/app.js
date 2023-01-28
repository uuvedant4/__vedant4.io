import express from "express";
import { userRouter } from "./routes/User.js";

export const app = express();

app.use("/api/v1", userRouter);

// 02 : 16 : 00
