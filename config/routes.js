const router = require('express').Router()
const secureRoute = require('../lib/secureRoute')

const cheeses = require('../controllers/cheeses')
const auth = require('../controllers/auth')

router.route('/cheeses')
  .get(cheeses.index)
  .post(secureRoute, cheeses.create)

router.route('/cheeses/:id')
  .get(cheeses.show)
  .put(secureRoute, cheeses.update)
  .delete(secureRoute, cheeses.delete)

router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

module.exports = router
