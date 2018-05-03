import { Addresses } from './addresses';
import { Error } from './error';

export interface User {
    email: string;
}

export interface CreateUserInfo {
    email: string;
    password: string;
    passwordConfirmation: string;
}

export interface UserInfo {
    addresses: Addresses;
    name: string;
    email: string;
}

export interface UserInfoResponse {
    data: UserInfo;
    error: Error;
}

export interface UserBalances {
    balances: Balances;
    remainingBalance: RemainingBalance;
}

export interface Balances {
    btc: string;
    eth: string;
    abx: string;
}

export interface RemainingBalance {
    btc: string | number;
    eth: string | number;
    abx: string | number;
}