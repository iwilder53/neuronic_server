import express, { Router } from "express";
import { DeviceRouter } from "./logger/logger.routes";

const app = express();


// api/logger
app.use("/logger", DeviceRouter);

module.exports = app;