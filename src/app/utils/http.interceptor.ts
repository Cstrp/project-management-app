import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LocalStorageService } from '../services';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private localService: LocalStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<string>> {
    request = request.clone({
      setHeaders: {
        Authorization:
          // eslint-disable-next-line max-len
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiNTU1NWM2Ni1lZDU5LTQ1NDQtYjgxNS02OWI4ZWRiNGNhYWQiLCJsb2dpbiI6IkFuZHJleSIsImlhdCI6MTY2ODIwMjA4M30.EqLcYzOkQWhzOJt1lBbcDpj1sAn_BqA_oqkbI-nvjNY',
      },
    });

    return next.handle(request).pipe(catchError((err) => throwError(() => err)));
  }
}
