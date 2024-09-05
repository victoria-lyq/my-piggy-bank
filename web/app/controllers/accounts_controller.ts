import Account from '#models/account'
import type { HttpContext } from '@adonisjs/core/http'

export default class AccountsController {
  async index({}: HttpContext) {
    return Account.all()
  }
  async refresh({}: HttpContext) {}
}
