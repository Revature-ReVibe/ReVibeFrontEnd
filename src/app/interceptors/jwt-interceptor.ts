import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class JWT_Interceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const jwt = localStorage.getItem(
      'ReVibeSocialMediaApp-LocalStorageLocation'
    );

    // Clone the request and set the new header in one step.
    const authReq = req.clone({ setHeaders: { Authorization: `${jwt}` } });

    return next.handle(authReq);
  }
}
