import { Account } from '../model/Account';
import { DateTime } from 'luxon';
type TransactionStatus = 'Pending' | 'Complete';
type TransactionType = 'Charge' | 'Deposit';

export interface Transaction {
  date: DateTime;
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