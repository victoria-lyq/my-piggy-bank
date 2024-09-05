import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Balance extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare accountId: number

  @column()
  declare available: number | null

  @column()
  declare current: number

  @column()
  declare limit: number | null

  @column()
  declare isoCurrencyCode: string

  @column()
  declare unofficialCurrencyCode: string | null

  // @column.dateTime()
  // declare lastRefreshed: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}