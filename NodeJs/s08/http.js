// const http = require('http');
// // const fs = require('fs');
// let port = 1234;

// const server = http.createServer((req,res) => {
//     console.log("req is recevied");
//     // res.end('recevied the request and sending response to  you');
//     res.end(JSON.stringify({name:'pavan',age:23}));
// })

// server.listen(port,()=>{
//     console.log("server started");
    
// });


const http = require('http');
const port = 1234;
const server = http.createServer((req,res) => {
    res.end('server sending response back to you');
    // res.end(JSON.stringify({name:'pavan', age:22}));
});

server.listen(port,() => {
    console.log('server started');
    
})

