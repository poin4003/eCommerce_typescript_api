import mongoose, { model, Schema } from "mongoose";
import { IKeyToken } from "../interfaces/imodels/keytoken.interface";

const DOCUMENT_NAME = 'Key';
const COLLECTION_NAME = 'Keys';

const keyTokenSchema: Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Shop',
  },
  privateKey: {
    type: String,
    required: true,
  },
  publicKey: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: Array,
    default: [],
  }, 
}, {
  collection: COLLECTION_NAME,
  timestamps: true,
});

const KeyTokenModel = model<IKeyToken>(DOCUMENT_NAME, keyTokenSchema);

export default KeyTokenModel;