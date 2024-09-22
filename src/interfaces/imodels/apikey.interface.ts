export interface IApikey {
  _id: string;
  key: string;
  status: boolean;
  permissions: Array<'0000' | '1111' | '2222'>;
}