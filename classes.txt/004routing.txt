const fs = require('fs'); 
const http = require('http');
const url = require('url');
//When you use require('url') in Node.js, you're including the built-in URL module, which provides utilities for URL resolution and parsing. This module allows you to work with URLs in a structured way, making it easier to parse and manipulate different parts of a URL.

const server = http.createServer((req,res) => {
   const pathName = req.url;
  
   if (pathName === '/' || pathName === '/overview') {
     res.end('This is the OVERVIEW.');
    } else if (pathName === '/product') {
      res.end('Here is the PRODUCT.');  
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-word'
        }); //writeHead is a method used in the http module to send a response header to the client. This method is commonly used when working with HTTP servers.
        res.end('<h1>Page not found!</h1>');  
    }
});

server.listen(8000, () => {
    console.log('Listening to request on port 8000!!!');
});

