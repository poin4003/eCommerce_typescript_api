import { model, Schema } from "mongoose";
import { Shop } from "../interfaces/shop.interface";

const DOCUMENT_NAME = 'Shop';
const COLLECTION_NAME = 'Shops';

const shopSchema: Schema = new Schema({
  name: {
    type: String,
    trim: true,
    maxLength: 150,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: false,
  },
  verify: {
    type: Schema.Types.Boolean,
    default: false,
  },
  roles: {
    type: Array,
    default: []
  }
}, {
  timestamps: true,
  collection: COLLECTION_NAME,
});

const ShopModel = model<Shop>(DOCUMENT_NAME, shopSchema);

export default ShopModel;