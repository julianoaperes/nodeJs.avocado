//require('fs') in Node.js, you're including the built-in File System (fs) module. This module provides an API for interacting with the file system in a way that is similar to standard POSIX functions.
const fs = require('fs'); 

// Module http:  Creating a Simple Web Server | Lecture 10 | Node.JS
//const http = require('http');: This line imports the built-in http module, which provides functionality for creating an HTTP server. The http module is assigned to the http variable, allowing you to use its functions, like http.createServer
const http = require('http');

// (req, res) refers to the request and response objects that are passed to the callback function when creating an HTTP server using the http module. These objects represent the incoming HTTP request from the client and the outgoing HTTP response from the server, respectively.
const server = http.createServer((req,res) => {
    //The http.createServer method in Node.js is used to create a new HTTP server. This server listens for HTTP requests from clients, processes them, and sends back responses. 
    res.end('Hello from the server!!!!') 
    // res.end() is a method in Node.js that is used to signal the end of the response to the client. When you call res.end(), it tells the server that all the response headers and body have been sent, and the server should consider the response complete.
})

// The server.listen(8000, () => { ... }) method in Node.js is used to make your HTTP server listen for incoming requests on a specified port, in this case, port 8000. Once the server starts listening, the callback function inside server.listen is executed.
server.listen(8000, () => {

    console.log('Listening to request on port 8000!!!');
//server.listen(8000, ...): This tells the server to start listening for incoming connections on port 8000. The port number can be any valid, available port on your machine (common ports include 3000, 8000, 8080, etc.).

//Callback Function: The function provided as the second argument to server.listen is a callback function. This function is executed once the server starts successfully. It's often used to log a message to the console, indicating that the server is running and listening for requests.

})

