import lodash from 'lodash';
import { IGetInfoDataParam } from '../interfaces/iparams/iUtilParams/lodash.interface';

export const getInfoData = ({ fields = [], object = {} }: IGetInfoDataParam) => {
  return lodash.pick( object, fields );
}