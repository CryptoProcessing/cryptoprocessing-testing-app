import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor() { }

    public getToken(): string {
        return localStorage.getItem('auth_token');
    }

    public isAuthenticated(): boolean {
        const token = this.getToken();
        return true;
    }
}
