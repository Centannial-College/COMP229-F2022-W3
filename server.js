const connect = require('connect');
const app = connect();

function logger(req, res, next){
    console.log(req.method, req.url);
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
    next();
}

function helloWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Test World</h1>');
};

function goodbyeWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('GoodBye World');
};

app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);

app.listen(3000);

console.log('Server running at http://localhost:3000/');