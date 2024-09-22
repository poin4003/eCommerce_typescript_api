import { Shop } from "../interfaces/imodels/shop.interface";
import { SignUpParams } from "../interfaces/iparams/iServicePrams/access.interface";
import ShopModel from "../models/shop.model";
import bcrypt from 'bcrypt';
import crypto, { KeyObject } from 'crypto';
import KeyTokenService from "./keyToken.service";
import { createTokenPair } from "../auth/authUtils";
import { getInfoData } from "../utils";

const RoleShop = {
  SHOP: 'SHOP',
  WRITER: 'WRITER',
  EDITOR: 'EDITOR',
  ADMIN: 'ADMIN'
}

class AccessService {

  static signUp = async ({ name, email, password }: SignUpParams) => {
    try {
      const holderShop = await ShopModel.findOne({ email }).lean();

      if (holderShop) {
        return {
          code: 'xxxx',
          message: 'Shop already registerd!'
        }
      }

      const passwordHash = await bcrypt.hash(password, 10);

      const newShop = await ShopModel.create({
        name, email, password: passwordHash, roles: [RoleShop.SHOP]
      });

      if (newShop) {
        // Created privateKey and publicKey 
        const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
          modulusLength: 4096,
          publicKeyEncoding: {
            type: 'pkcs1',
            format: 'pem',
          },
          privateKeyEncoding: {
            type: 'pkcs1',
            format: 'pem',
          },
        });

        const publicKeyString: string | null = await KeyTokenService.createKeyToken({
          userId: newShop._id,
          publicKey
        });

        if (!publicKeyString) {
          return {
            code: 'xxxx',
            message: 'publicKeyString error!'
          }
        }

        const tokens = await createTokenPair(
          { userId: newShop._id, email }, publicKeyString, privateKey
        );

        console.log(`Created Token successfully::`, tokens);

        return {
          code: 201,
          metadata: {
            shop: getInfoData({ fields: ['_id', 'name', 'email'], object: newShop }),
            tokens
          }
        }
      }

      return {
        code: 200,
        metadata: null
      }
    } catch (error: any) {
      return {
        code: 'xxx',
        message: error.message,
        status: 'error'
      }
    }
  }

}

export default AccessService;