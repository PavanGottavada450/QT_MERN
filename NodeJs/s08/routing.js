// const http = require("http");
// const fs = require("fs");
// const { error } = require("console");
// let port = 9848;

// const server = http.createServer((req, res) => {
//   console.log(req.url);

//   if (req.url === "/html") {
//     fs.readFile("home.html", "utf-8", (error, data) => {
//       if (error) {
//         res.end("failed to fetch the data from file");
//       } else {
//         res.end(data);
//       }
//     });
//   } else if (req.url === "/json") {
//     fs.readFile("info.json", "utf-8", (error, data) => {
//       if (error) {
//         res.end("failed to fetch the data from file");
//       } else {
//         res.end(data);
//       }
//     });
//   }
// });

// server.listen(port, () => {
//   console.log("server started");
// });

const http = require('http');
const fs = require('fs');
const port = 1234;

const server = http.createServer((req, res) => {
  console.log(req.url);

  if(req.url === '/html'){
    fs.readFile('home.html','utf-8', (error, data) => {
        if(error){
          res.end('failed to fetch the data')
        }else{
          res.end(data);
        }
    })
  }else if(req.url === '/json'){
      fs.readFile('info.json','utf-8', (error ,data) => {
        if(error){
          res.end("error to fetch the data")
        }else{
          res.end(data)
        }
      });
  }

});

server.listen(port, () =>{
  console.log('server started');

})
