import {  DevData, DeviceDataModel } from "./logger";
import { Response, Request } from "express";
import "@typegoose/typegoose";
import { time } from "console";
import { decrypt } from "dotenv";

export const postData = async (
    req: Request,
    res: Response,
) => {
    try {
        const data = req.body;
        
        console.log(req.body);
        if (!data) {
            const { temperature, humidity } = req.body;
            return res.status(200).send({
                message: "New User, Please register first",
                success: true,
            });

        } else {
            console.log(data);
            console.log()
            return res.status(200).send({
                message: "userfound",
                success: true,
            });
        }
    } catch (error) {
        return res.status(200).send({
            success: false,
            error: error,
        });
    }
};

export const getData = async (
    req: Request,
    res: Response,
) => {
    try {
        const data = req.body;
        
        console.log(req.body);
        if (!data) {
            const { temperature, humidity } = req.body;
            return res.status(200).send({
                message: "New User, Please register first",
                success: true,
            });

        } else {
            console.log(data);
            console.log()
            return res.status(200).send({
                message: "userfound",
                success: true,
            });
        }
    } catch (error) {
        return res.status(200).send({
            success: false,
            error: error,
        });
    }
};
