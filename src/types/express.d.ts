import * as express from 'express';
import { IApikey } from '../interfaces/imodels/apikey.interface';

declare global {
  namespace Express {
    interface Request {
      objKey?: IApikey;
    }
  }
}