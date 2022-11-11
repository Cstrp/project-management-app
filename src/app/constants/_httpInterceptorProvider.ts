import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestInterceptor } from '../utils/http.interceptor';
import { Provider } from '@angular/core';

const _httpInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpRequestInterceptor,
  multi: true,
};

export { _httpInterceptorProvider };
