import { IApikey } from "../interfaces/imodels/apikey.interface";
import ApiKeyModel from "../models/apikey.model"
import crypto from 'crypto';

export const findById = async ( key: string ): Promise<IApikey | null> => {
  // const newKey = await ApiKeyModel.create({ key: crypto.randomBytes(64).toString('hex'), permissions: ['0000'] });
  // console.log(newKey);
  const objKey = await ApiKeyModel.findOne({ key, status: true }).lean();
  return objKey;
}