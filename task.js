var http = require("http");
var port = 3100;

var server = http.createServer((req, res) => {
    if (req.url == "/movies") {
        res.writeHead(200, { "content-type": "application/json" });
        res.write(JSON.stringify({ page: "movies", message: "welcome to movies" }));
    } 
    else if (req.url == "/movies/pushpa") {
        res.writeHead(200, { "content-type": "application/json" });
        res.write(JSON.stringify({ moviename: "pushpa", message: "welcome to pushpa movie" }));
    } 
    else if (req.url == "/movies/salar") {
        res.writeHead(200, { "content-type": "application/json" });
        res.write(JSON.stringify({ moviename: "salar", message: "welcome to salar movie" }));
    } 
    else if (req.url == "/movies/amaran") {
        res.writeHead(200, { "content-type": "application/json" });
        res.write(JSON.stringify({ moviename: "amaran", message: "welcome to amaran movie" }));
    } 
    else {
        res.writeHead(200, { "content-type": "application/json" });
        res.write(JSON.stringify({ page: "not found", message: "page not found" }));
    }
    res.end()
});

server.listen(port, () => {
    console.log("server is running");
});
