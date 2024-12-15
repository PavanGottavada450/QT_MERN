function getAllProducts(){
    // alert("on working");

    var promisObj = fetch('https://fakestoreapi.com/products');

    promisObj.then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        alert("Something went wrong while fectching the data");
    });
}