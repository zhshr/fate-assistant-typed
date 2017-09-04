const http = require('http');
const url = require('url');
const port = 3002;

var database = {};

// /api/heartbeat
// Url {
//   protocol: null,
//   slashes: null,
//   auth: null,
//   host: null,
//   port: null,
//   hostname: null,
//   hash: null,
//   search: '',
//   query: {},
//   pathname: '/api/heartbeat',
//   path: '/api/heartbeat',
//   href: '/api/heartbeat' }

const requestHandler = (request, response) => {

    if (request.url == "/api/heartbeat") {
        response.end();
        return;
    }
    
    console.log();

    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;

    var apiType = url_parts.pathname.replace(/^\/api/, '');
    console.log(apiType, ' from ', request.connection.remoteAddress);
    switch (apiType) {
        case '/pull':
            console.log("Response: " + database[query.dataName]);
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(JSON.stringify(database[query.dataName]));
            break;
        case '/push':
            database[query.dataName] = query.content;
            console.log("Database: " + database);
            console.log(query.dataName + " = " + database[query.dataName]);
            response.end();
            break;
    }
    response.end();
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
      }
    
      console.log(`server is listening on ${port}`)
})