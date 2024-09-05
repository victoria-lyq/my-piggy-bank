/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const TransactionsController = () => import('#controllers/transactions_controller')
router.resource('transactions', TransactionsController).only(['index'])
const AccountsController = () => import('#controllers/accounts_controller')
router.resource('accounts', AccountsController).only(['index'])
const BalancesController = () => import('#controllers/balances_controller')
router.resource('balances', BalancesController).only(['index'])

router.get('/', async () => {
  return {
    hello: 'world',
  }
})