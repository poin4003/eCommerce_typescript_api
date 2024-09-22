export interface KeyToken {
  _id: string;
  user: string;
  privateKey: string;
  publicKey: string;
  refreshToken: string[];
}