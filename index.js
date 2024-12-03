const jsonServer = require('json-server') // importing json-server library
const cors = require('cors') // importing cors library
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 8080 // chose port from here like 8080, 3001

// Use the CORS middleware to allow requests from your Vercel app
server.use(
  cors({
    origin: 'https://test-rtk.vercel.app' // Replace with your frontend's URL
  })
)

server.use(middlewares)
server.use(router)

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`)
})


// const jsonServer = require("json-server"); // importing json-server library
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

// server.use(middlewares);
// server.use(router);

// server.listen(port);


