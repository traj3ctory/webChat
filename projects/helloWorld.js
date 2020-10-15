const http = require('http');
let dt = require('./hello');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const request = req;
    const errCode = [400, 404, 500]
    const successCode = [200, 201]
    res.setHeader('Content-Type', 'text/html');
    //  POST, GET, PUT, PATCH,

    if (request.url == '/' && request.method == 'GET') {
        res.statusCode = successCode[0];
        res.write(`Home, World! <br />`);
        res.write(`The Date and Time are currently : ${dt.myDateTime()}`);
        res.end();
    }

    res.statusCode = errCode[1]
    res.end('Page not found');

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});