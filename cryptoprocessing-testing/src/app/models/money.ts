export interface MoneyTransfer {
	amount: string;
	address: string;
}

export interface EthMoneyTransfer extends MoneyTransfer {
	gas_limit: string;
}

export interface SuccessfulTransfer {
	txid: string;
}

export interface BalanceChangeInfo {
    prev_balance: string;
    new_balance: string;
}

export interface FeeValue {
    eth: number;
    btc: number;
}

export interface ContractPrice {
    tokenPrice: number;
}

export interface USDInput {
    usd: number;
}

export interface WalletAddress {
    address: string;
}

export interface WalletVerificationStatus {
    status: string;
}
