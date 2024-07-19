import express, { Router } from "express";
import { getData, postData } from "./logger.controller";

export const DeviceRouter: Router = express.Router();


// api/logger/log-data
DeviceRouter.post("/log-data", postData);


// api/logger/get-data
DeviceRouter.get("/get-data", getData);
