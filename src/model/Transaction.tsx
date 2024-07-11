import { Account } from  "../model/Account";

type TransactionStatus = "Pending" | "Complete"
type TransactionType = "Charge" | "Deposit"

export interface Transaction {
    account: Account,
    amount: number,
    status: TransactionStatus,
    type:TransactionType, 
    transactionTime: Date,
}