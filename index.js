
const fs = require('fs'); 
const http = require('http');
const url = require('url');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const tempOverview  = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempProduct  = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');
const tempCard  = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req,res) => {
   const pathName = req.url;
  
   // Overview page
   if (pathName === '/' || pathName === '/overview') {
     res.writeHead(200, { 'Content-type':'text/html'});   
     res.end(tempOverview);

     // Product page
    } else if (pathName === '/product') {
      res.end('Here are the PRODUCTS.');  

      //API
    } else if (pathName === '/Api') {        
      res.writeHead(200, { 'Content-type': 'application/json'});
      res.end(data);

     // Not Found
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-word',
        });
        res.end('<h1>Page Not Found!</h1>');  
    }
});
server.listen(8000, () => {
    console.log('Listening to request on port 8000!!!');
});

