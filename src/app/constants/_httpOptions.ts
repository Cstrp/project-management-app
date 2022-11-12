import { HttpHeaders } from '@angular/common/http';

const _httpOptions = {
  headers: new HttpHeaders({
    accept: 'application/json',
    'Content-Type': 'application/json',
  }),
};

export { _httpOptions };
