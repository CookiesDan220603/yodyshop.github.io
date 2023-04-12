   /* Creating a server */

const http = require("http");

const handleRequest = function(request, response) {
   response.setHeader("content-type", "text/plain");
   response.statusCode = 200;
   response.end("Hello NodeJS Server !");
};

const server = http.createServer(handleRequest);

   /* Start running server */

const port = 3000;
const hostname = "127.0.0.1";

const callback = function() {
   console.log("Server is running at...");
   console.log(`http://${hostname}:${port}/`);
};

server.listen(port, hostname, callback);
