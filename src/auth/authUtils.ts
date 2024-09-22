import JWT from 'jsonwebtoken';
import { Payload } from '../interfaces/iparams/iUtilParams/auth.interface';

export const createTokenPair = async ( 
  payload: Payload, 
  publicKey: string, 
  privateKey: string, 
): Promise<{ accessToken: string, refreshToken: string } | undefined> => {
  try {
    const accessToken = await JWT.sign(payload, privateKey, {
      algorithm: 'RS256',
      expiresIn: '2 days',
    });

    const refreshToken = await JWT.sign(payload, privateKey, {
      algorithm: 'RS256',
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
