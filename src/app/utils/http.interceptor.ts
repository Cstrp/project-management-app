import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private localService: LocalStorageService) {}

  intercept(request: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {
    return next.handle(this.addAuthToken(request));
  }

  addAuthToken(req: HttpRequest<string>) {
    const token = this.localService.getData('token');

    return req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization:
          // eslint-disable-next-line max-len
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiNTU1NWM2Ni1lZDU5LTQ1NDQtYjgxNS02OWI4ZWRiNGNhYWQiLCJsb2dpbiI6IkFuZHJleSIsImlhdCI6MTY2ODIwMjA4M30.EqLcYzOkQWhzOJt1lBbcDpj1sAn_BqA_oqkbI-nvjNY',
      },
    });
  }
}
