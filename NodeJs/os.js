const os = require('os');

let cpuArchitecture = os.arch();
console.log(cpuArchitecture);

let platform = os.platform();
console.log(platform);

let type = os.type();
console.log(type);

let release = os.release();
console.log(release);

let hostname = os.hostname();
console.log(hostname);

let memoryInBytes = os.totalmem();
console.log(memoryInBytes);

let freemem = os.freemem();
console.log(freemem);
