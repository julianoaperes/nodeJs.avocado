
const fs = require('fs'); 

// Module http:  Creating a Simple Web Server | Lecture 10 | Node.JS

const http = require('http');

// req: the request object from the server 
// res: response object send out 
const server = http.createServer((req,res) => {
    // end method: send responses. 
    res.end('Hello from the server!!!!')
})

// Running a real web server on your computer 
server.listen(8000, () => {

    console.log('Listening to request on port 8000!!!');

})

