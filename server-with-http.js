const http = require('http');

http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;

    Logger(); //this is my first middleware

if(queryObject['a'] === 'a'){
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello World');
} else {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Bye World');
}

    
}).listen(3000);
console.log('Server running at http://localhost:3000/');