const http = require("http");
const port = 3000;

const routes = {
    "/": "<h1>Home</h1>",
    "/livros": "<h1>Livros</h1>",
    "/autores": "<h1>Autores</h1>",
    "/co": "<h1>Co</h1>"
}



const server  = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "HTML"});
    res.end(routes[req.url] || "<h1>Nao encontrado</h1>")
})


server.listen(port, () => {
    console.log(`server funcionando na porta - http://localhost:${port}/`)
})
