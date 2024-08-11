const fs = require('fs'); 
const http = require('http');
const url = require('url');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
//Callback Function (err, data) => { ... }:This is the function that gets executed after the file has been read.err: If an error occurs during the file read operation (e.g., if the file doesn't exist), this argument will contain the error object. Otherwise, it will be null.data: This contains the contents of the file as a string (since we specified 'utf-8' as the encoding).
 //${__dirname} is a special variable in Node.js that contains the absolute path of the directory that contains the current file.The path ${__dirname}/dev-data/data.json points to the data.json file located in the dev-data directory relative to the current file's location.
    const dataObj = JSON.parse(data);
     //JSON.parse(data):This converts the string data read from the data.json file into a JavaScript object.JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for both humans to read and machines to parse. The data.json file is expected to contain data in this format.

const server = http.createServer((req,res) => {
   const pathName = req.url;
  
   if (pathName === '/' || pathName === '/overview') {
     res.end('This is the OVERVIEW.');
    } else if (pathName === '/product') {
      res.end('Here is the PRODUCT.');  
    } else if (pathName === '/api') {        
            res.writeHead(200, { 'Content-type': 'application/json'});
            res.end(data);        
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-word'
        });
        res.end('<h1>Page not found!</h1>');  
    }
});
server.listen(8000, () => {
    console.log('Listening to request on port 8000!!!');
});

