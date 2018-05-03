import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/observable';

import { 
	MoneyTransfer, EthMoneyTransfer, SuccessfulTransfer 
} from '../models/money';
import { Response } from '../models/response';

@Injectable()
export class MoneyService {

	availibleCurrencies = ['eth', 'btc', 'abx', 'eos'];

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
}
