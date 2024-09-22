import KeyTokenModel from "../models/keytoken.model";
import { CreateKeyTokenParams } from "../interfaces/iparams/iServicePrams/token.interface";

class KeyTokenService {

  static createKeyToken = async (
    { userId, publicKey}: CreateKeyTokenParams
  ): Promise<string | null> => {
    try {
      const tokens = await KeyTokenModel.create({
        user: userId,
        publicKey: publicKey,
      });

      return tokens ? tokens.publicKey : null;
    } catch (error) {
      return null;
    }
  }
}

export default KeyTokenService;