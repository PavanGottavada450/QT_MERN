function getAllProducts(){
    // alert("on working");

    var promiseObj = fetch('https://fakestoreapi.com/products');

    promiseObj.then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
        data.forEach((product)=>{
            createCard(product);
        })
    })
    .catch((error)=>{
        alert("Something went wrong while fectching the data");
    });
}


function createCard(product){

    const {image,price,title} = product;
 
    let divCard = document.createElement("div");
    divCard.className = "card";

    let imageEle = document.createElement("img");
    imageEle.src= image;
    imageEle.width="100";
    imageEle.height= "200";

    let div = document.createElement("div");
    div.style.display= "flex";
    div.style.justifyContent= "space-between";

    let h3 = document.createElement("h3");
    h3.innerText = title;
    let i = document.createElement("i");
    i.style.fontSize = "21px";
    i.className= "bi bi-suit-heart";

    div.appendChild(h3);
    div.appendChild(i);
    // div.innerHTML = <i style="font-size: 21px;" class="bi bi-suit-heart"></i>;

    let p1 = document.createElement("p");
    p1.innerText = `$ ${price}`;
    let p2 = document.createElement("p");
    p2.innerText = "Lorem ipsum dolor, sit amet consectetur";

    let button1 = document.createElement("button");
    let button2 = document.createElement("button");

    button1.innerText = "Add to Cart";
    button2.innerText = "Product Details";

    divCard.appendChild(imageEle);
    divCard.appendChild(div);
    divCard.appendChild(p1);
    divCard.appendChild(p2);
    divCard.appendChild(button1);
    divCard.appendChild(button2);

    document.querySelector("#cards").appendChild(divCard);
}