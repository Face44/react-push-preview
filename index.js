
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-push-preview.cjs.production.min.js')
} else {
  module.exports = require('./react-push-preview.cjs.development.js')
}
