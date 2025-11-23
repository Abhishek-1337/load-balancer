import http from 'http'

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end("Yo");
});

server.listen(3000, () => {
    console.log("Listening on 3000");
});