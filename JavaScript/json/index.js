// JSON = (JavaScript Object Notation) data-interchange Format
//         used for exchanging data between a server and a web application
//         JSON files {key:value} OR [value1, value2, value3]

//         JSON.stringify() = converts a JS object to a JSON string
//         JSON.parse() = converts a JSON string to a JS object


const jsonNames = `["pavan","sai","bhargav","jhanavi"]`;

const jsonPerson = `{
    "name" : "pavan",
    "age" : 22,
    "city" : "eluru"
}`;

const parseData = JSON.parse(jsonPerson);

console.log(parseData);


// -------------------------------


const names = ["pavan","sai","bhargav","jhanavi"];

const person = {
    "name" : "pavan",
    "age" : 22,
    "city" : "eluru"
}

const jsonString = JSON.stringify(person);

console.log(jsonString);
