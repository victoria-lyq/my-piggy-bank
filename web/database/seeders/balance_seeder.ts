import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Balance from '#models/balance'

export default class extends BaseSeeder {
  async run() {
    Balance.createMany([
      {
        accountId: 1,
        available: 100,
        current: 110,
        isoCurrencyCode: 'USD',
        limit: null,
        unofficialCurrencyCode: null,
      },
      {
        accountId: 2,
        available: null,
        current: Math.random()*2000,
        isoCurrencyCode: 'USD',
        limit: 2000,
        unofficialCurrencyCode: null,
      },
      {
        accountId: 3,
        available: null,
        current: Math.random() * 65262,
        isoCurrencyCode: 'USD',
        limit: null,
        unofficialCurrencyCode: null,
      },
    ])
  }
}