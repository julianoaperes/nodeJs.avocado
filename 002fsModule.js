// how to read datas from files 
const fs = require('fs'); 

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
    console.log(textIn); 

// How to write datas into files

const textOut = `This is what we know about avocado: ${textIn}.\nCreated on ${Date.now()}`;
    fs.writeFileSync('./txt/output.txt', textOut);
    console.log('File written');
    














