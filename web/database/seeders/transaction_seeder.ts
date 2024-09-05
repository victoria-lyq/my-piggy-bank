import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Transaction from '#models/transaction'
export default class extends BaseSeeder {
  async run() {
    Transaction.createMany([
      {
        accountId: 1,
        accountOwner: null,
        amount: 72.1,
        isoCurrencyCode: 'USD',
        unofficialCurrencyCode: null,
        // category: ['Shops', 'Supermarkets and Groceries'],
        // categoryId: '19046000',
        checkNumber: null,
        // counterparties: [
        //   {
        //     name: 'Walmart',
        //     type: 'merchant',
        //     logo_url: 'https://plaid-merchant-logos.plaid.com/walmart_1100.png',
        //     website: 'walmart.com',
        //     entity_id: 'O5W5j4dN9OR3E6ypQmjdkWZZRoXEzVMz2ByWM',
        //     confidence_level: 'VERY_HIGH',
        //   },
        // ],
        postedDate: new Date(Date.now()),
        // postedDatetime: '2023-09-24T11:01:01Z',
        authorizedDate: new Date(Date.now()),
        // authorizedDatetime: '2023-09-22T10:34:50Z',
        // location: {
        //   address: '13425 Community Rd',
        //   city: 'Poway',
        //   region: 'CA',
        //   postal_code: '92064',
        //   country: 'US',
        //   lat: 32.959068,
        //   lon: -117.037666,
        //   store_number: '1700',
        // },
        // name: 'PURCHASE WM SUPERCENTER #1700',
        merchantName: 'Walmart',
        // merchantEntityId: 'O5W5j4dN9OR3E6ypQmjdkWZZRoXEzVMz2ByWM',
        logoUrl: 'https://plaid-merchant-logos.plaid.com/walmart_1100.png',
        website: 'walmart.com',
        // payment_meta: {
        //   by_order_of: null,
        //   payee: null,
        //   payer: null,
        //   payment_method: null,
        //   payment_processor: null,
        //   ppd_id: null,
        //   reason: null,
        //   reference_number: null,
        // },
        // paymentChannel: 1,
        pending: false,
        pendingTransactionId: 'no86Eox18VHMvaOVL7gPUM9ap3aR1LsAVZ5nc',
          personalFinanceCategoryPrimary: 'GENERAL_MERCHANDISE',
          personalFinanceCategoryDetailed: 'GENERAL_MERCHANDISE_SUPERSTORES',
          personalFinanceCategoryCi: 'VERY_HIGH',
        transactionId: 'lPNjeW1nR6CDn5okmGQ6hEpMo4lLNoSrzqDje',
        transactionCode: null,
        // transactionType: 'place',
      },
    ])
  }
}
