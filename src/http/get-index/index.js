exports.handler = async function http (req) {
  let env = process.env.NODE_ENV === 'testing'? '/' : `/${process.env.NODE_ENV}/`
  return {
    headers: {'content-type': 'text/html; charset=utf8'},
    body: `<img src=${env}img.gif>`
  }
}
