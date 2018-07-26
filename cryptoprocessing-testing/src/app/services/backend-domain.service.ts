import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BackendDomainService {

    domainList = [
        {
            name: 'Bitcoin testnode',
            value: 'btc.testnet.backend.cryptoprocessing.io'
        },
        {
            name: 'Bitcoin mainnode',
            value: 'btc.mainnet.backend.cryptoprocessing.io'
        },
        {
            name: 'Ethereum testnet',
            value: 'eth.testnet.backend.cryptoprocessing.io'
        },
    ]

    currentDomain = this.domainList[0];

    constructor() { }

    getCurrentDomain() {
        return this.currentDomain.value;
    }

    setCurrentDomain(domain) {
        this.currentDomain = domain;
    }
}
