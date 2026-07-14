import express from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import { createContent, getContentByProjectId } from "../controllers/content.controller.js";

const app = express();
app.use(express.json());

app.post("/content", verifyToken, createContent);
app.get("/content/:projectId", verifyToken, getContentByProjectId);

export default app;


