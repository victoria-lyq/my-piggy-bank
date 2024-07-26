import { Account } from '../model/Account';

type TransactionStatus = 'Pending' | 'Complete';
type TransactionType = 'Charge' | 'Deposit';

export interface Transaction {
  date: Date;
  merchant: String;
  category: String;
  account: Account;
  amount: number;
  originalStatement: String;
  notes: String;
  tags: String;
  status?: TransactionStatus;
  type?: TransactionType;
}


export interface TransactionListItem {
    transactionTime: String;
    merchant: String;
    amount: number;
    account: 
}