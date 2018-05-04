import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Response } from '../models/response';
import { WalletAddress, WalletVerificationStatus } from '../models/money';

@Injectable()
export class VerificationService {

    constructor(private http: HttpClient) { }

    verifyWalletAddress(
                currency: string, walletAddress: WalletAddress
            ): Observable<WalletVerificationStatus> {
        const url = `/api/v1/verification/${currency}`;
        return this.http.post<Response>(url, walletAddress)
            .map(res => res.data as WalletVerificationStatus);
    }
}
