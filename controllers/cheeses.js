const Cheese = require('../models/cheese');

function cheesesIndex(req, res) {
  Cheese
    .find()
    .sort({ name: 1 })
    .exec()
    .then(cheeses => {
      // get countries from the cheeses and create a unique array of countries for the dropdown
      const countries = Array.from(new Set(cheeses.map(cheese => cheese.origin).sort()));

      // if there is an origin in the querystring filter the results
      if(req.query.origin) cheeses = cheeses.filter(cheese => cheese.origin === req.query.origin);

      res.render('cheeses/index', { cheeses, countries, selectedCountry: req.query.origin });
    })
    .catch(err => res.render('error', { err }));
}

function cheesesNew(req, res) {
  res.render('cheeses/new');
}

function cheesesShow(req, res) {
  Cheese
    .findById(req.params.id)
    .populate('user')
    .exec()
    .then(cheese => res.render('cheeses/show', { cheese }))
    .catch(err => res.render('error', { err }));
}

function cheesesCreate(req, res) {

  req.body.user = req.currentUser;

  Cheese
    .create(req.body)
    .then(() => res.redirect('/cheeses'))
    .catch(err => res.render('error', { err }));
}

function cheesesEdit(req, res) {
  Cheese
    .findById(req.params.id)
    .exec()
    .then(cheese => res.render('cheeses/edit', { cheese }))
    .catch(err => res.render('error', { err }));
}

function cheesesUpdate(req, res) {
  Cheese
    .findById(req.params.id)
    .exec()
    .then(cheese => {
      cheese = Object.assign(cheese, req.body);
      return cheese.save();
    })
    .then(cheese => res.redirect(`/cheeses/${cheese.id}`))
    .catch(err => res.render('error', { err }));
}

function cheesesDelete(req, res) {
  Cheese
    .findById(req.params.id)
    .exec()
    .then(cheese => cheese.remove())
    .then(() => res.redirect('/cheeses'))
    .catch(err => res.render('error', { err }));
}

// This requires the user's favorites to be populated (see `lib/userAuth.js`)
function cheesesFavorite(req, res) {
  // if the selected cheese is not in the user's favorites
  if(!req.currentUser.favorites.find(cheese => cheese.id === req.params.id)) {
    // add the cheese id to the user's favorites
    req.currentUser.favorites.push(req.params.id);
  } else {
    // remove the cheese from the user's favorites
    req.currentUser.favorites = req.currentUser.favorites.filter(cheese => cheese.id !== req.params.id);
  }

  // save the user
  req.currentUser.save()
    .then(() => res.redirect('back'));
}

module.exports = {
  index: cheesesIndex,
  new: cheesesNew,
  show: cheesesShow,
  create: cheesesCreate,
  edit: cheesesEdit,
  update: cheesesUpdate,
  delete: cheesesDelete,
  favorite: cheesesFavorite
};
