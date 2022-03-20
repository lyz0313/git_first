var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    var params = url.parse(request.url, true).query;
    /*response.write("net name: " + params.name);
    response.write("\n");
    response.write("net URL: " + params.url);*/
    response.end(util.inspect(url.parse(request.url, true)));
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');