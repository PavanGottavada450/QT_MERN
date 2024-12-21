import { useEffect,useState } from "react";
import "./Products.css"
import Card from "../Card/Card";
import { getProductsData } from "./service/ProductsService";

function Products({url}) {

  const [products,setProducts] = useState([]);
  useEffect(()=>{
    getProductsData(setProducts,url)
  },[])

  return (
    <div className="products">
        <div id="Banner"></div>

        <div className="priceSorting"></div>

        <div className="rateSorting"></div>
        
        <div id="productsDataContainer">
          {
            products.map((productsData)=>{
              return <Card data={productsData}/>
            })
          }
        </div>
    </div>
  )
}

export default Products;