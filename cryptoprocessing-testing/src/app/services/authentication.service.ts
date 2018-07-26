import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { BackendDomainService } from './backend-domain.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(
        private http: HttpClient,
        private domainService: BackendDomainService) { }
 
    login(email: string, password: string) {
        const domain = this.getDomainUrl();
        const url = `http://${domain}/api/auth/login`;
        return this.http.post<any>(url, { email: email, password: password })
            .pipe(map((res:any) => {
                // login successful if there's a jwt token in the response
                if (res && res.auth_token) {
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem(
                        'currentUser', 
                        JSON.stringify({
                            email: email,
                            token: res.auth_token,
                            user_id: res.user_id,
                            domain: domain
                        }));
                }
            }));
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    register(email: string, password: string) {
        const url = `http://${this.getDomainUrl()}/api/auth/register`;
        return this.http.post<any>(url, { email: email, password: password })
            .pipe(map((res:any) => {
                console.log(res);
            }));
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('currentUser'));
    }

    getDomainUrl() {
        return this.domainService.currentDomain.value;
    }
}
