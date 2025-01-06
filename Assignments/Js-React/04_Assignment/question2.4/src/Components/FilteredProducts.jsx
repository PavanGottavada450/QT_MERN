import React from "react";

function FilteredProducts({ products }) {
  const filteredProducts = products.filter((product) => product.price > 50);

  return (
    <div>
      <h3>Product Above $50 : </h3>
      <ol>
        {filteredProducts.map((product,index) => (
          <li>
            {index + 1}.{product.name} - ${product.price}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default FilteredProducts;
