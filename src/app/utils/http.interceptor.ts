import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private localService: LocalStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<string>> {
    request = request.clone({
      setHeaders: { Authorization: `Bearer ${this.localService.getData('token')}` },
    });

    return next.handle(request).pipe(catchError((err) => throwError(() => err)));
  }
}
