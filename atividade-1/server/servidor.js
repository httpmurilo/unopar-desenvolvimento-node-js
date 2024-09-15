const http = require('http');
const fs = require('fs');
const path = require('path');


const serveFile = (filePath, contentType, response) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            response.writeHead(404, { 'Content-Type': 'text/plain' });
            response.end('404 - Página não encontrada');
        } else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(data);
        }
    });
};

const servidor = http.createServer((req, res) => {
    if (req.url === '/') {
        serveFile(path.join('', 'index.html'), 'text/html', res);
    } else if (req.url === '/sobre') {
        serveFile(path.join('', 'sobre.html'), 'text/html', res);
    } else if (req.url === '/contato') {
        serveFile(path.join('', 'contato.html'), 'text/html', res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Pagina nao encontrada');
    }
});

const porta = 3000;

servidor.listen(porta, () => {
    console.log(`Servidor está rodando na porta ${porta}`);
});
