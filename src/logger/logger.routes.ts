import express, { Router } from "express";
import { postData } from "./logger.controller";

export const DeviceRouter: Router = express.Router();


// api/logger/log-data
DeviceRouter.post("/log-data", postData);// api/user/login
