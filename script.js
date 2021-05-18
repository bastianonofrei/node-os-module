const os = require('os');
const EventEmitter = require('events');
const emitter = new EventEmitter();
let totalMemo = os.totalmem();
let freeMemo = os.freemem();

console.log(`Total memory ${totalMemo} ; Free memory ${freeMemo}`);


const fs = require('fs')

let files = fs.readdirSync('./')

console.log(`files : ${files}`)


emitter.on('messageLogged', (arg) => {
    console.log("Listener called")
    console.log(arg)
})

emitter.emit('messageLogged', {
    id: 1,
    data: "The user is moving the mouse"
});