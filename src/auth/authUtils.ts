import JWT from 'jsonwebtoken';
import { IPayload } from '../interfaces/iparams/iUtilParams/auth.interface';

export const createTokenPair = async ( 
  payload: IPayload, 
  publicKey: string, 
  privateKey: string, 
): Promise<{ accessToken: string, refreshToken: string } | undefined> => {
  try {
    const accessToken = await JWT.sign(payload, publicKey, {
      expiresIn: '2 days',
    });

    const refreshToken = await JWT.sign(payload, privateKey, {
      expiresIn: '7 days',
    });

    JWT.verify( accessToken, publicKey, (err: any, decoded: any) => {
      if (err) {
        console.error(`error verify::`, err);
      } else {
        console.log(`decode verify::`, decoded);
      }
    });

    return { accessToken, refreshToken }
  } catch (error) {

  }
}
