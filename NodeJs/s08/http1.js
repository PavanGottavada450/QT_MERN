// const http = require('http');
// const fs = require('fs');
// // const { error } = require('console');
// let port = 9876;

// const server = http.createServer((req,res) => {
//     fs.readFile("home.html", "utf-8", (error, data) => {
//         if(error){
//             res.end("failed to fetch the data from file");
//         } else {
//             res.end(data);
//         }
//     });
// });

// server.listen(port,()=>{
//     console.log("server started");
    
// });



const http = require('http');
const fs = require('fs');

const port = 1234;

const server = http.createServer((req,res) => {
    fs.readFile('home.html','utf-8',(error,data) => {
        if(error){
            res.end("failed to fetch data");
        } else{
            res.end(data);
        }
    })
});

server.listen(port,()=>{
    console.log('server started');
    
})