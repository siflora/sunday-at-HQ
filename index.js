var css = require('sheetify')
var choo = require('choo')

css('tachyons')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.use(require('./stores/file'))

app.route('/', require('./views/add-file'))
app.route('/*', require('./views/404'))

module.exports = app.mount('body')
