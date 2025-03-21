import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const port = 8989;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/getdata", async(req, res) => {
    await client.connect();

    const db = client.db("feedback");
    const coll = db.collection("formdata");

    coll.find({}).toArray().then((data) => {
        res.json({
            ok:true,
            result:data,
        })
    }).catch((error) => {
        res.json({
            ok:false,
            result:error,
        })
    })

});  // http://localhost:8989/getdata

app.post("/newdata",async(req,res) => {
    const newdata = req.body;

    try{
        await client.connect();
        const db = client.db("feedback");
        const coll = db.collection("formdata");
    
        const data = await coll.insertOne(newdata);
    
        res.send({
            ok:true,
            result:"inserted succcessfully",
            data: data,
        });
    }
    catch(error){
        res.send({
            ok:false,
            result:error,
        })
    }

}); // http://localhost:8989/newdata

app.listen(port, () => {
  console.log("server started successfully");
});


