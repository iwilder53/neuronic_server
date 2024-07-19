import {  DevData, DeviceDataModel } from "./logger";
import { Response, Request } from "express";
import "@typegoose/typegoose";

let latestData = null;

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
            });

        } else {
            console.log(data);
            console.log()
            return res.status(200).send({
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
  
        

        if (!latestData) {
         
            return res.status(200).send({

                success: true,
            });

        } else {
            console.log(latestData);
            console.log()
            return res.status(200).send({
                success: true,
                result: latestData
            });
        }
    } catch (error) {
        return res.status(200).send({
            success: false,
            error: error,
        });
    }
};

export const switchDevice = async (
    req: Request,
    res: Response,
) => {
    try {
    } catch (error) {
        return res.status(200).send({
            success: false,
            error: error,
        });
    }
};


export const getDeviceStatus = async (
    req: Request,
    res: Response,
) => {
    try {
        
    } catch (error) {
        return res.status(200).send({
            success: false,
            error: error,
        });
    }
};


