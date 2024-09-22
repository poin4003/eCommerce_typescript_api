import lodash from 'lodash';
import { GetInfoDataParam } from '../interfaces/iparams/iUtilParams/lodash.interface';

export const getInfoData = ({ fields = [], object = {} }: GetInfoDataParam) => {
  return lodash.pick( object, fields );
}