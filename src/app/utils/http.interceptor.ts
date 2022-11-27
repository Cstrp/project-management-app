import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LocalStorageService } from '../services';
import { Store } from '@ngrx/store';
import { selectToken } from '../store/auth/auth.selector';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  private token$: Observable<string | undefined> = this.store.select(selectToken);

  private token: string;

  constructor(private localService: LocalStorageService, private store: Store) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<string>> {
    request = request.clone({
      setHeaders: {
        Authorization:
          // eslint-disable-next-line max-len
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0MzkyNTYwMi1iMjJjLTRiYTYtODVlOC1iMDgzYjYyMmRjZmYiLCJsb2dpbiI6IjEyMyIsImlhdCI6MTY2OTIwNjg2MX0.LlVEE_rkGPImNifpvKZZJ50lXMC3yBskKYcxZjJLgUY',
      },
    });

    return next.handle(request).pipe(catchError((err) => throwError(() => err)));
  }
}
