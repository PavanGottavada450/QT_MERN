const express = require("express");
const app = express();

app.get("/text",(req,res)=>{
    res.send("My First API using Express : ...");
}); //   http://localhost:4321/text

app.listen(4321,()=>{
    console.log("server started on port number 4321");
    
})