var html = require('choo/html')

var TITLE = 'pt2 - Add a file'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body>
      <p>Hi there! Please select a file:</p>

      <input onchange=${onChange} type=file>
    </body>`

  function onChange (e) {
    console.log('onChange', e)

    const file = e.target.files[0] 
    const reader = new FileReader()

    reader.readAsArrayBuffer(file)

    reader.onloadend = e => {
      emit('file', e.target.result)
      emit('pushstate', 'send-file/')
    }
  }
}