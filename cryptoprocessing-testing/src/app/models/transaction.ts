export interface Transaction {
    amount: string;
    txid: string;
    to: string;
    status: string;
    execution: string;
    created_at: string;
}

export interface UserTransactions {
    in: Transaction[];
    out: Transaction[];
}