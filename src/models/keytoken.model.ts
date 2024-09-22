import mongoose, { model, Schema } from "mongoose";
import { KeyToken } from "../interfaces/imodels/keytoken.interface";

const DOCUMENT_NAME = 'Key';
const COLLECTION_NAME = 'Keys';

const keyTokenSchema: Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Shop',
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

const KeyTokenModel = model<KeyToken>(DOCUMENT_NAME, keyTokenSchema);

export default KeyTokenModel;