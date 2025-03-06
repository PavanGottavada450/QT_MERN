const express = require("express");
const app = express();
const fs = require("fs")

app.get("/text",(req,res)=>{
    res.send("My First API using Express : ...");
}); //   http://localhost:4321/text


app.get("/home",(req,res)=>{
    fs.readFile("home.html","utf-8",(error,data)=>{
        if(error){
            res.send("<h1>Failed to read content of the file</h1>")
        } else{
            res.send(data)
        }
    })
});

app.listen(4321,()=>{
    console.log("server started on port number 4321");
    
})