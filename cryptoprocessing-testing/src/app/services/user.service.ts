import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/observable';

import { CreateUserInfo, User, UserInfo, UserBalances, Balances, RemainingBalance } from '../models/user';
import { Response } from '../models/response';
import { Error } from '../models/error';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    createUser(user: CreateUserInfo): Observable<UserInfo> {
        let data = {
            name: user['name'],
            email: user.email,
            password: user.password,
            password_confirmation: user.passwordConfirmation,
        };
        const createUserUrl = '/api/v1/users';
        return this.http.post<Response>(createUserUrl, data)
            .map(res => res.data as UserInfo)
            .catch(error => Observable.throw(error));
    }

    updateUser(updateData: User): Observable<UserInfo> {
        const email = updateData.email;
        // set email header
        const updateUserUrl = '/api/v1/users';
        return this.http.put<Response>(updateUserUrl, updateData)
            .map(res => res.data as UserInfo)
            .catch(error => Observable.throw(error));
    }

    fetchUserInfo(email: string): Observable<UserInfo> {
        // set email header
        const url = '/api/v1/users/info';
        return this.http.get<Response>(url)
            .map(res => res.data as UserInfo)
            .catch(error => Observable.throw(error));
    }

    fetchUserBalances(email: string): Observable<UserBalances> {
        // set email header
        const url = '/api/v1/users/balances';
        return this.http.get<Response>(url)
            .map(res => {
                let balanceData = res.data as any;
                let balanceInfo = {
                    balances: balanceData.balances as Balances,
                    remainingBalance: 
                        balanceData.remaining_balance as RemainingBalance,
                } as UserBalances;
                return balanceInfo;
            })
            .catch(error => Observable.throw(error));
    }
}
