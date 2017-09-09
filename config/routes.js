const router = require('express').Router();
const secureRoute = require('../lib/secureRoute');

const cheeses = require('../controllers/cheeses');
const users = require('../controllers/users');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');

router.get('/', (req, res) => res.render('home', { isHomepage: true }));

router.route('/cheeses')
  .get(cheeses.index)
  .post(secureRoute, cheeses.create);

router.route('/cheeses/new')
  .get(secureRoute, cheeses.new);

router.route('/cheeses/:id')
  .get(cheeses.show)
  .put(secureRoute, cheeses.update)
  .delete(secureRoute, cheeses.delete);

router.route('/cheeses/:id/edit')
  .get(secureRoute, cheeses.edit);

router.route('/cheeses/:id/favorite')
  .post(secureRoute, cheeses.favorite);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/users/:id')
  .get(users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.delete);

router.route('/users/:id/edit')
  .get(secureRoute, users.edit);

router.get('/logout', sessions.delete);

module.exports = router;
