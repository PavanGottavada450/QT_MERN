import "./App.css";
import Header from "./Components/Header/Header";
import Card from "./Components/ProductsCard/Card";


function App() {

  const details = [
    { "id": 1, "name": "Laptop", "price": "$999", "image": "https://saudewala.in/cdn/shop/collections/Laptop.jpg?v=1732216115&width=1296" },
    { "id": 2, "name": "Phone", "price": "$499", "image": "https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-16-Pro/Desert-Titanium/Apple-iPhone-16-Pro-Desert-Titanium-thumbnail.png" },
    { "id": 3, "name": "Tablet", "price": "$299", "image": "https://images-cdn.ubuy.co.in/633b51122af1ce605a57ae50-10-1.jpg" }
  ];

  return (
    <div>
      <Header />
      <div id="container">
        {details.map((card,index)=>(
            <Card
              key={index}
              name={card.name}
              id={card.id}
              price={card.price}
              image={card.image}
            />
        ))}
      </div>
    </div>
  );
}

export default App;
