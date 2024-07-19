import { DevData, DeviceDataModel } from "./logger";
import { Response, Request } from "express";
import "@typegoose/typegoose";

let latestData = null;

export const postData = async (
    req: Request,
    res: Response,
) => {
    console.log(req.body);
    try {
        const data = req.body;
        latestData = data;
        return res.status(200).send({
            success: true

        });


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
        return res.status(200).send({
            success: true,
            result: latestData
        });

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


