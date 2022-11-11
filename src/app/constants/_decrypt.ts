import * as CryptoJS from 'crypto-js';
import { _secretKey } from './index';

const _decrypt = (value: string) => CryptoJS.AES.decrypt(value, _secretKey).toString(CryptoJS.enc.Utf8);

export { _decrypt };
