import { Injectable } from '@angular/core';
import {
    HttpRequest, HttpHandler, HttpEvent, HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs/observable';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
    
    constructor(public authService: AuthService) { }
    
    intercept(
            request: HttpRequest<any>, 
            next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
                'X-Authorization': `${this.authService.getToken()}`,
            }
        });
        return next.handle(request);
    }
}