import { Shop } from "../interfaces/shop.interface";
import ShopModel from "../models/shop.model";
import bcrypt from 'bcrypt';
import crypto from 'crypto';

const RoleShop = {
  SHOP: 'SHOP',
  WRITER: 'WRITER',
  EDITOR: 'EDITOR',
  ADMIN: 'ADMIN'
}

class AccessService {

  static signUp = async ({ name, email, password }: any) => {
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
          modulusLength: 4096
        });

        console.log(privateKey);
        console.log("-----------");
        console.log(publicKey);
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