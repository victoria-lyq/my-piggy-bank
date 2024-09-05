import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'transactions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('account_id')
      table.foreign('account_id').references('accounts.id')
      table.double('amount')
      table.string('iso_currency_code').nullable()
      table.string('unofficial_currency_code').nullable()
      // table.string('iso_currency_code').nullable()
      table.string('check_number').nullable()
      table.date('posted_date').nullable()
      table.date('authorized_date').nullable()
      table.datetime('posted_datetime').nullable()
      table.datetime('authorized_datetime').nullable()
      table.string('location').nullable()
      table.string('merchant_name').nullable()
      table.string('original_description').nullable()
      // table.string('payment_meta').nullable()
      table.boolean('pending')
      table.string('pending_transaction_id').nullable()
      table.string('account_owner').nullable()
      table.string('transaction_id').unique()
      table.string('logo_url').nullable()
      table.string('website').nullable()
      table.enum('payment_channel', ['online', 'in store', 'other'])
      table.string('personal_finance_category_primary')
      table.string('personal_finance_category_detailed')
      table.string('personal_finance_category_ci').nullable()
      table.string('transaction_code').nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}