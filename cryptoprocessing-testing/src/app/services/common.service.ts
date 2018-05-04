import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/observable';

import { Response } from '../models/response';
import { FeeValue, ContractPrice, USDInput } from '../models/money';

@Injectable()
export class CommonService {

    constructor(private http: HttpClient) { }

    getFeeValue(): Observable<FeeValue> {
        const url = '/api/v1/common/fee';
        return this.http.get<Response>(url)
            .map(res => res.data as FeeValue);
    }

    getContractPriceETH(): Observable<ContractPrice> {
        const url = '/api/v1/common/contract_eth_price';
        return this.http.get<Response>(url)
            .map(res => res.data as ContractPrice);
    }

    getTotalUSDInput(): Observable<USDInput> {
        const url = '/api/v1/common/total_usd_input';
        return this.http.get<Response>(url)
            .map(res => res.data as USDInput);
    }
}
