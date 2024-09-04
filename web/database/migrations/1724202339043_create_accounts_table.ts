import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'accounts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.index('account_id') // use persistent_account_id for chase accounts
      table.string('mask')
      table.string('name')
      table.string('official_name')
      table.enum('holder_category', ["personal", "business", "unrecognized"])
      table.enum('type', ["credit", "depository", "loan", "other"])
      table.enum('subtype', [
        '401a',
        '401k',
        '403B',
        '457b',
        '529',
        'auto',
        'brokerage',
        'business',
        'cash isa',
        'cash management',
        'cd',
        'checking',
        'commercial',
        'construction',
        'consumer',
        'credit card',
        'crypto exchange',
        'ebt',
        'education savings account',
        'fixed annuity',
        'gic',
        'health reimbursement arrangement',
        'home equity',
        'hsa',
        'isa',
        'ira',
        'keogh',
        'lif',
        'life insurance',
        'line of credit',
        'lira',
        'loan',
        'lrif',
        'lrsp',
        'money market',
        'mortgage',
        'mutual fund',
        'non-custodial wallet',
        'non-taxable brokerage account',
        'other',
        'other insurance',
        'other annuity',
        'overdraft',
        'paypal',
        'payroll',
        'pension',
        'prepaid',
        'prif',
        'profit sharing plan',
        'rdsp',
        'resp',
        'retirement',
        'rlif',
        'roth',
        'roth 401k',
        'rrif',
        'rrsp',
        'sarsep',
        'savings',
        'sep ira',
        'simple ira',
        'sipp',
        'stock plan',
        'student',
        'thrift savings plan',
        'tfsa',
        'trust',
        'ugma',
        'utma',
        'variable annuity',
      ])
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}