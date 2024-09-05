import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'balances'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('account_id')
      table.foreign('account_id').references('accounts.id')
      table.double('available')
      table.double('current')
      table.double('limit')
      table.string('iso_currency_code')
      table.string('unofficial_currency_code')
      table.datetime('last_refreshed')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}