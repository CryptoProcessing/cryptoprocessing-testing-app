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