import httpPoxy from "http-proxy";
import http from "http";

const proxy = httpPoxy.createProxyServer({});

const server1 = "http://localhost:3000";

const server = http.createServer((req, res) => {
    console.log(req.pipe);

    const targetUrl = server1 + req.url;
    const options = {
        hostname: 'localhost',
        method: req.method,
        port: 3000,
        path: req.url,
        headers: req.headers
    };

    const proxyReq = http.request(options, (proxyRes) => {
        console.log(proxyRes);
        if(proxyRes.statusCode === undefined) {
            return;
        }
        res.writeHead(proxyRes.statusCode, proxyRes.headers);
        proxyRes.pipe(res);
    });
    req.pipe(proxyReq);
});

server.listen(9000, () => {console.log("Proxy is listening on 9000")});

