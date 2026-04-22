import express from "express";
import pinoHttp from "pino-http";
import { logger } from "./lib/logger";

export const app = express();

app.use(pinoHttp({ logger }));
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

