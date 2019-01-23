const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')
const User = require('../models/user')
const Promise = require('bluebird')
Promise.promisifyAll(jwt)

function secureRoute(req, res, next) {
  if(
    !req.headers.authorization ||
    !req.headers.authorization.match(/^Bearer /)
  ) {
    return next(new Error('Unauthorized'))
  }

  const token = req.headers.authorization.replace('Bearer ', '')

  jwt.verifyAsync(token, secret)
    .then(payload => User.findById(payload.sub))
    .then(user => {
      if(!user) return next(new Error('Unauthorized'))
      req.currentUser = user
      next()
    })
    .catch(() => next(new Error('Unauthorized')))
}

module.exports = secureRoute
