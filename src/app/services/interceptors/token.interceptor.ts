import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from './../../../environments/environment';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    const requestUrl: Array<any> = request.url.split('/');
    const apiUrl: Array<any> = environment.api_url.split('/');

    const token = sessionStorage.getItem('token')

    if (token && (requestUrl[2] === apiUrl[2])){
      const newRequest = request.clone({ setHeaders: { 'Authorization': `Bearer ${token}`}});
      return next.handle(newRequest);
    } else {
      return next.handle(request);
    }

  }
}