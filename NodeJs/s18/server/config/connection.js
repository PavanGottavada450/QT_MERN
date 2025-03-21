const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function createConnection(){
    await client.connect();

    const db = client.db("node17");
    const productColl = db.collection("products");

    return productColl;
}

module.exports = createConnection;