const os = require('os');

let totalMemo = os.totalmem();
let freeMemo = os.freemem();

console.log(`Total memory ${totalMemo} ; Free memory ${freeMemo}`);


const fs = require('fs')

let files = fs.readdirSync('./')

console.log(`files : ${files}`)