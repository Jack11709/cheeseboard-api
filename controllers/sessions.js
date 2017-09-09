const User = require('../models/user');

function sessionsNew(req, res) {
  req.session.returnTo = req.headers.referer;
  res.render('sessions/new');
}

function sessionsCreate(req, res) {
  User
    .findOne({ email: req.body.email })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        req.flash('danger', 'Invalid credentials');
        return res.redirect('/login');
      }
      // user is authenticated
      req.session.userId = user.id;
      const returnTo = req.session.returnTo;
      delete req.session.returnTo;
      res.redirect(returnTo);
    });
}

function sessionsDelete(req, res) {
  req.session.regenerate(() => res.redirect('/'));
}

module.exports = {
  new: sessionsNew,
  create: sessionsCreate,
  delete: sessionsDelete
};
