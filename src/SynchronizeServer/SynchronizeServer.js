<<<<<<< HEAD
const http = require('http');
const url = require('url');
const port = 3002;

var database = [];

const requestHandler = (request, response) => {
    console.log(request.url);
    console.log(request.method);
    if (request.url == '/synchronize') {
        if (request.method == 'POST') {
            database[request.body.name] = request.body.content;
            console.log(request.body.name + " = " + request.body.content);
            request.end();
        } else {
            var url_parts = url.parse(request.url, true);
            var query = url_parts.query;
            response.end(database[query.dataName]);
            console.log(query.dataName + " = " + database[query.dataName]);
        }
    }
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
      }
    
      console.log(`server is listening on ${port}`)
=======
const http = require('http');
const url = require('url');
const port = 3002;

var database = {};

const requestHandler = (request, response) => {
    console.log();
    console.log();

    console.log(request.url);
    console.log(request.method);

    var url_parts = url.parse(request.url, true);
    var query = url_parts.query;

    console.log(url_parts);

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
>>>>>>> f510df8... 11111
})