import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { exhaustMap, Observable, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectId } from '../../../store/auth/auth.selector';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.store.select(selectId).pipe(
      take(1),
      exhaustMap((token) => {
        if (!token) {
          return next.handle(request);
        }

        let modReq = request.clone({
          params: request.params.append('auth', token),
        });

        return next.handle(modReq);
      }),
    );
  }
}
