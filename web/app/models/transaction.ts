import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Transaction extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare accountId: number
  @column()
  declare amount: number
  @column()
  declare isoCurrencyCode: string
  @column()
  declare unofficialCurrencyCode: string | null
  @column()
  declare checkNumber: string | null
  @column()
  declare postedDate: Date
  @column()
  declare authorizedDate: Date
  @column.dateTime()
  declare postedDatetime: DateTime
  @column.dateTime()
  declare authorizedDatetime: DateTime
  @column()
  declare location: string
  @column()
  declare merchantName: string
  @column()
  declare originalDescription: string
  @column()
  declare paymentMeta: string
  @column()
  declare pending: boolean
  @column()
  declare pendingTransactionId: string
  @column()
  declare accountOwner: string | null
  @column()
  declare transactionId: string
  @column()
  declare logoUrl: string
  @column()
  declare website: string
  @column()
  declare paymentChannel: bigint
  @column()
  declare personalFinanceCategoryPrimary: string
  @column()
  declare personalFinanceCategoryDetailed: string
  @column()
  declare personalFinanceCategoryCi: string
  @column()
  declare transactionCode: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}