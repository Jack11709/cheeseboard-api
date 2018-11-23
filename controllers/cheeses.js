const Cheese = require('../models/cheese')

function cheesesIndex(req, res, next) {
  Cheese
    .find()
    .populate('user')
    .sort({ name: 1 })
    .exec()
    .then(cheeses => res.json(cheeses))
    .catch(next)
}

function cheesesShow(req, res, next) {
  Cheese
    .findById(req.params.id)
    .populate('user')
    .exec()
    .then(cheese => res.json(cheese))
    .catch(next)
}

function cheesesCreate(req, res, next) {

  req.body.user = req.currentUser

  Cheese
    .create(req.body)
    .then(cheese => res.json(cheese))
    .catch(next)
}

function cheesesUpdate(req, res, next) {
  Cheese
    .findById(req.params.id)
    .populate('user')
    .exec()
    .then(cheese => cheese.set(req.body))
    .then(cheese => cheese.save())
    .then(cheese => res.json(cheese))
    .catch(next)
}

function cheesesDelete(req, res, next) {
  Cheese
    .findById(req.params.id)
    .exec()
    .then(cheese => cheese.remove())
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = {
  index: cheesesIndex,
  show: cheesesShow,
  create: cheesesCreate,
  update: cheesesUpdate,
  delete: cheesesDelete
}
