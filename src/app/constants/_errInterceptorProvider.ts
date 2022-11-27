import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from '../modules/shared/interceptors/error.interceptor';
import { Provider } from '@angular/core';

const _errInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true,
};

export { _errInterceptorProvider };
