import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Account extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare accountId: string

  @column()
  declare persistentAccountId: string

  @column()
  declare mask: string

  @column()
  declare name: string

  @column()
  declare officialName: string | null

  @column()
  declare holderCategory: string

  @column()
  declare type: string

  @column()
  declare subtype: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}