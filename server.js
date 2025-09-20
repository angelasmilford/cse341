const { createServer } = require('node:http'); // Creates a new HTTP server and returns it

const hostname = '127.0.0.1'; // Sets the server address to "localhost" (my computer)
const port = 3000; // Defines the port number where the server will listen for requests

const server = createServer((req, res) => { // Creates an HTTP server that runs the given function whever a request is received
    res.statusCode = 200; // Sets the statusCode property to 200, indicating a successful response
    res.setHeader('Content-Type', 'text/plain'); // Tells the client that the response will be plain text
    res.end('Hello World!'); //Ends the response and sends "Hello World!" back to the client
}); // Closes the server's request handler function

server.listen(port, hostname, () => { // Starts the server and makes it listen on the specified host and port
    console.log(`Server running at http://${hostname}:${port}/`); // Logs a message in the console showing the server's running address
}); // Closes the listen function