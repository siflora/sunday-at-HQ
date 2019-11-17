var html = require('choo/html')
const Peer = require('simple-peer')

var TITLE = 'pt2 - Add a file'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body>
      <p>File sent</p>
    </body>
    `
}