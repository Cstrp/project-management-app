import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  public errorMessage: string = '';

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((err: HttpErrorResponse) => {
        if (err.error instanceof ErrorEvent) {
          this.errorMessage = err.error.message;
        } else {
          this.errorMessage = `Status: ${err.error.status},\nMessage: ${err.error.message}`;
        }

        return throwError(this.errorMessage);
      }),
    );
  }
}
