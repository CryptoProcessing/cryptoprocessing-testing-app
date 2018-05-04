import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/observable';

import { 
    MoneyTransfer, EthMoneyTransfer, SuccessfulTransfer, BalanceChangeInfo,
} from '../models/money';
import { Response } from '../models/response';
import { UserTransactions } from '../models/transaction';

@Injectable()
export class MoneyService {

    availibleCurrencies = ['eth', 'btc', 'abx', 'eos'];
    changeBalanceAvailibleCurrencies = ['eth', 'btc', 'abx'];

    constructor(private http: HttpClient) { }

    transferMoney(
            email: string, currency: string, transferInfo: MoneyTransfer) {
        if (!(currency in this.availibleCurrencies)) {
            throw new TypeError(`Currency ${currency} is not availible`);           
        }
        // set email header
        const url = `/api/v1/wallets/${currency}`;
        return this.http.post<Response>(url, transferInfo)
            .map(res => res.data as SuccessfulTransfer)
            .catch(error => Observable.throw(error));
    }

    changeBalance(
            email: string, currency: string, changeInfo: BalanceChangeInfo,
            airbidexDomain: string = 'somedomain') {
        if (!(currency in this.changeBalanceAvailibleCurrencies)) {
            throw new TypeError(`Currency ${currency} is not availible`);           
        }
        // set email header
        const url = `${airbidexDomain}/api/wallets/${currency}`;
        return this.http.post<Response>(url, changeInfo);
    }

    getTransactions(
            email: string, currency: string): Observable<UserTransactions[]> {
        if (!(currency in this.availibleCurrencies)) {
            throw new TypeError(`Currency ${currency} is not availible`);           
        }
        // set email header
        const url = `/api/v1/transactions/${currency}`;
        return this.http.get<Response>(url)
            .map(res => res.data as UserTransactions[]);
    }
}
