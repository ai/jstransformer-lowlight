let hastToHtml = require('hast-util-to-html')
let escape = require('escape-html')
let low = require('lowlight')

exports.name = 'lowlight'
exports.inputFormats = ['code', 'lowlight']
exports.outputFormat = 'html'

function toHtml (result) {
  return hastToHtml({ type: 'root', children: result.value })
}

exports.render = (str, options = { }) => {
  if (options.lang) {
    try {
      return toHtml(low.highlight(options.lang, str, options))
    } catch (e) { }
  } else {
    try {
      return toHtml(low.highlightAuto(str, options))
    } catch (e) { }
  }

  return escape(str)
}
