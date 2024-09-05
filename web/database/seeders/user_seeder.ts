import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'
export default class extends BaseSeeder {
  async run() {
    User.fetchOrCreateMany("email", [
      {
        email: "michael@piggy.com"
      },
      {
        email: "victoria@piggy.com"
      }
    ])
  }
}