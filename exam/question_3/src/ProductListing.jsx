import { useState, useEffect } from "react";

export default function ProductListing() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8989/getdata")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
        if (data.ok) {
          setProducts(data.result);
          setFilteredProducts(data.result);
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    let filtered = products;

    if (search) {
      filtered = filtered.filter((product) =>
        product.pname.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    setFilteredProducts(filtered);
  }, [search, category, products]);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Product Listing</h2>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Categories</option>
          {Array.from(new Set(products.map((p) => p.category))).map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map((product, index) => (
          <div key={product._id || index} className="border p-4 rounded shadow">
            <h3 className="font-semibold">PName : {product.pname}</h3>
            <p className="font-bold text-green-600">Price : ${product.price}</p>
            <p className="text-gray-600">Rating : {product.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
