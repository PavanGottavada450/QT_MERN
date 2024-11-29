var promiseobj = new Promise(function(resolve,reject){
    // resolve({
    //     name: "pavan",
    //     age : "22"
    // })
    reject({
        name: "sai",
        age: "23"
    })
});

promiseobj.then(function(successdata){
    console.log("then executed");
    console.log(successdata);
})
.catch(function(errordata){
    console.log("catch executed");
    console.log(errordata);
})