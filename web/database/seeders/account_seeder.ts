import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Account from '#models/account'
export default class extends BaseSeeder {
  async run() {
    Account.fetchOrCreateMany('accountId', [
      {
        accountId: 'BxBXxLj1m4HMXBm9WZZmCWVbPjX16EHwv99vp',
        holderCategory: 'personal',
        mask: '0000',
        name: 'Plaid Checking',
        officialName: 'Plaid Gold Standard 0% Interest Checking',
        // persistentAccountId: '8cfb8beb89b774ee43b090625f0d61d0814322b43bff984eaf60386e',
        subtype: 'checking',
        type: 'depository',
      },
      {
        accountId: 'dVzbVMLjrxTnLjX4G66XUp5GLklm4oiZy88yK',
        mask: '3333',
        name: 'Plaid Credit Card',
        officialName: 'Plaid Diamond 12.5% APR Interest Credit Card',
        subtype: 'credit card',
        type: 'credit',
      },
      {
        accountId: 'Pp1Vpkl9w8sajvK6oEEKtr7vZxBnGpf7LxxLE',
        mask: '7777',
        name: 'Plaid Student Loan',
        officialName: null,
        subtype: 'student',
        type: 'loan',
      },
    ])
  }
}
