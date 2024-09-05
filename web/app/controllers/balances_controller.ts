import Balance from '#models/balance'
import type { HttpContext } from '@adonisjs/core/http'

export default class BalancesController {
  async index ({ }: HttpContext) {
    return Balance.all()
  }
  async refresh({}: HttpContext) {}
}