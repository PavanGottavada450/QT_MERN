// const { log } = require("node:console");

function createFile() {
  var promiseData = fetch("http://localhost:4545/create");

  promiseData
    .then((successData) => {
      return successData.json();
    })
    .then((data) => {
      console.log(data);
      document.querySelector("p").innerText = data.name;
    })
    .catch((errordata) => {
        alert("Something went wrong");
        console.log(errordata);
    })
}

async function removeFile(){
    try{
        var res = await fetch("http://localhost:4545/remove");
        var data = await res.text();
        console.log(data);
        document.querySelector("p").innerText = data;
    } catch (error) {
        alert("something went wrong");
        console.log(error);
    }
}


