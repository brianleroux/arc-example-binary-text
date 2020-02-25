let fs = require('fs')

exports.handler = async function http (req) {
  return {
    headers: {
      'content-type': 'image/gif'
    },
    isBase64Encoded: true,
    body: fs.readFileSync(__dirname + `/bear-driving.gif`).toString('base64')
  }
}
