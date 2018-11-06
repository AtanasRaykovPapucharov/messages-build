const Koa = require('koa')
const server = new Koa()
const statics = require('koa-static')
let port = process.env.PORT || 8080
server.use(statics(__dirname))
server.listen(port, () => console.log(`API Server is running on port: ${port}`))