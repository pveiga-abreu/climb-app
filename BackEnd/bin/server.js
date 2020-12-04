const http = require('http');
const app = require('../src/app');

const port = normalize_port(process.env.PORT || '3003');
app.set('port', port);

const server = http.createServer(app);

console.log(`Escutando porta ${port}`);
server.listen(port);

function normalize_port(value){
    const port = parseInt(value, 10);

    if(isNaN(port)) { return value; }
    if(port >= 0) { return port; }
    return false;
}
