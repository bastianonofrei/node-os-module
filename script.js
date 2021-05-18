const os = require('os');
const path = require('path');
let totalMemo = os.totalmem();
let freeMemo = os.freemem();

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/')
        res.write("Hello World");
    res.end()
});

server.listen(3000);

console.log(`Total memory ${totalMemo} ; Free memory ${freeMemo}`);


const fs = require('fs')

let files = fs.readdirSync('./')

console.log(`files : ${files}`)



const Logger = require('./logger')
const logger = new Logger();

logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg)
})

logger.log('mesajoool')

var pathObj = path.parse(__filename);
console.log(pathObj);