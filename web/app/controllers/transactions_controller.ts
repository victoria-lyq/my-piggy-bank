import Transaction from '#models/transaction'
import type { HttpContext } from '@adonisjs/core/http'

export default class TransactionsController {
  async index ({ }: HttpContext) {
    return Transaction.all()
  }
  async refresh({}: HttpContext) {}
  async edit({}: HttpContext) {}
}
