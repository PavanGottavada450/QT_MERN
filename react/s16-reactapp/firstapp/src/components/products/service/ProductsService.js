import axios from "axios"

export const getProductsData = (setProducts, url) =>{
    axios
    .get(url)
    .then((res)=>{
        setProducts(res.data);
    })
    .catch((error)=>{
        alert("Error while getting the data");
    })
}