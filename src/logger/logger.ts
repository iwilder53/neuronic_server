
import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";


export class DevData {

    readonly _id: string;

    readonly createdAt: Date;

    @prop({})
    temperature: number;

    @prop({ required: true })
    humidity: string;

}
export const DeviceDataModel = getModelForClass(DevData, { schemaOptions: { timestamps: true } })

