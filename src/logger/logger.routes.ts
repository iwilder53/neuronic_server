import express, { Router } from "express";
import { getData, getDeviceStatus, postData, switchDevice } from "./logger.controller";

export const DeviceRouter: Router = express.Router();


// api/logger/log-data
DeviceRouter.post("/log-data", postData);


// api/logger/get-data
DeviceRouter.get("/get-data", getData);

// api/logger/get-status
DeviceRouter.get("/get-status", getDeviceStatus);

// api/logger/switch-status
DeviceRouter.get("/switch-status", switchDevice);
