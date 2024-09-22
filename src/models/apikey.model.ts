import { model, Schema } from "mongoose";
import { IApikey } from "../interfaces/imodels/apikey.interface";

const DOCUMENT_NAME = 'Apikey';
const COLLECTION_NAME = 'Apikeys';

const apiKeySchema: Schema = new Schema({
  key: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  permissions: {
    type: [String],
    required: true,
    enum: ['0000', '1111', '2222'],
  },
}, {
  timestamps: true,
  collection: COLLECTION_NAME,
});

const ApiKeyModel = model<IApikey>(DOCUMENT_NAME, apiKeySchema);

export default ApiKeyModel;

