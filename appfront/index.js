const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000    //will first check if there is any default ports, if not then will choose 3000
 
server.use(jsonServer.bodyParser)
server.use(middlewares)
 
server.get('/data', (request, response) => {
 if (request.method === 'GET') {
   const data = require('./data/index')
   response.status(200).jsonp(data())
 }
})
 
server.listen(port, () => {
 console.log('JSON Server is running')
}) 

