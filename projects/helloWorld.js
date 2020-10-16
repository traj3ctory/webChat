const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

let dt = require('./hello');
let fs = require('fs');
// let mongo = require('mongodb');
var mysql = require('mysql');

const server = http.createServer((req, res) => {
    const request = req;
    const errCode = [400, 404, 500]
    const successCode = [200, 201]
    res.setHeader('Content-Type', 'text/html');
    //  POST, GET, PUT, PATCH,
    
    
    if (request.url == '/') {
        res.statusCode = successCode[0];
        
        // fs.readFile('./hello.html', (data) => {
        //     res.write(data);
        // })
        
        res.write(`Home, World! <br />`);
        res.write(`The Date and Time are currently : ${dt.myDateTime()}`); //write the response to the client
        res.end(); //end the response
    }
    

    res.statusCode = errCode[1]
    res.end('Page not found');

});



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});