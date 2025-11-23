import httpPoxy from "http-proxy";
import http from "http";

const proxy = httpPoxy.createProxy({});

const server1 = "http://localhost:3000";

const server = http.createServer((req, res) => {
    proxy.web(req, res, {
        target: server1,
        changeOrigin: true
    });
});

server.listen(9000, () => {console.log("Proxy is listening on 9000")});

