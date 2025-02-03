const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res) => {

    res.setHeader("Access-Control-Allow-origin", "*");
    
    const urlPath = req.url;

    if(urlPath === "/create"){
        fs.writeFile("home.java", "",(error) => {
            if(error) {
                res.end("Failed to create File");
            } else {
                res.end(JSON.stringify({name: "File Created"}));
            }
        });
    } else if (urlPath === "/remove") {
        fs.unlink("home.java", (error) => {
            if(error){
                res.end("Failed to Remove the File");
            } else {
                res.end("File Remove");
            }
        });
    }

});

server.listen(4545,() =>{
    console.log("server started on", 4545, "Port Number");
});