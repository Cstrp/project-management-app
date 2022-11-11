import * as CryptoJS from 'crypto-js';
import { _secretKey } from './_secretKey';

const _encrypt = (value: string) => CryptoJS.AES.encrypt(value, _secretKey).toString();

export { _encrypt };
