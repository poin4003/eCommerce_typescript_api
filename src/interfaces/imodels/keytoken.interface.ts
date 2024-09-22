export interface IKeyToken {
  _id: string;
  user: string;
  privateKey: string;
  publicKey: string;
  refreshToken: string[];
}