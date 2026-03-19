const http = require('http');

const app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Holberton School!\n');
});

app.listen(4545, 'localhost', () => {
    console.log(`server running at http://localhost:4545`);
});

module.exports = app;