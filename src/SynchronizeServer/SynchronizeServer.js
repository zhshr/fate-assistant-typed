const http = require('http');
const url = require('url');
const port = 3002;

var database = {};

const requestHandler = (request, response) => {
    console.log();

    console.log(request.url);
    console.log(request.method);

    if (request.url == "/heartbeat") {
        response.end();
        return;
    }
    
    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;

    switch (url_parts.pathname) {
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