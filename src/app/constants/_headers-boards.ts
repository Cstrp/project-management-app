import { HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from '../services/local-storage.service';
const localStorageService = new LocalStorageService();

export const _headersBoards = {
  headers: new HttpHeaders({
    accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorageService.getData('USER')}`,
  }),
};
