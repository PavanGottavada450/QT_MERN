import "./CardContainer.css";
import axios from "axios";
import { useState } from "react";
import Card from "../Card/Card";

function CardContainer() {
  const [State, setState] = useState([]);

  const getUsers = () => {
    let promise = axios.get("https://randomuser.me/api/?results=50");
    promise
      .then((res) => {
        // console.log(res.data.results)
        setState(res.data.results);
      })
      .catch((error) => {
        alert("something went wrong while accessing users data");
      });
  };

  const [Data,setData] = useState("male")

  const getUsersBasedOnGender = (event) => {
    // var selectDomElement = event.target.value;
    setData(event.target.value);
    axios
      .get(`https://randomuser.me/api/?gender=${event.target.value}&results=50`)

      .then((res) => {
        setState(res.data.results);
      })
      .catch((error) => {
        alert("something went wrong while accessing users data");
      });
  };

  const getUsersBasedOnNumber = (event) => {
    axios
      .get(`https://randomuser.me/api/?gender=${Data}&results=${event.target.value}`)
      .then((res) => {
        setState(res.data.results);
      })
      .catch((error) => {
        alert("something went wrong while accessing users data");
      });
  };

  return (
    <div id="container">
      <h1>User Information</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus aliquid
        id obcaecati perspiciatis eligendi? Sequi architecto soluta tenetur et
        cum, molestias vero incidunt animi dolorem vitae porro pariatur nihil
        illo repudiandae beatae exercitationem debitis odit cumque, quia atque
        excepturi obcaecati asperiores voluptatum. Nesciunt nobis at est placeat
        delectus quod voluptas vel, suscipit corrupti similique ut voluptatum
        minima. Deserunt eius blanditiis perferendis sint fugit optio sit facere
        dicta molestiae et cumque, repellendus nulla est? Quibusdam magni, saepe
        modi atque dicta fugiat porro eaque vitae laborum unde quidem accusamus
        sint rerum consectetur harum maiores est perspiciatis voluptatum! Libero
        error magni dicta deserunt?
      </p>

      <button onClick={getUsers}>Get Users</button>

      <div className="dropDown">
        {State.length > 0 && (
          <div className="filter">
            <select onChange={getUsersBasedOnGender}>
              <option>all</option>
              <option>male</option>
              <option>female</option>
            </select>
          </div>
        )}

        {State.length > 0 && (
          <div className="filter">
            <select onClick={getUsersBasedOnNumber}>
              <option>50</option>
              <option>40</option>
              <option>30</option>
              <option>20</option>
              <option>10</option>
            </select>
          </div>
        )}
      </div>

      <div>
        {State.length > 0 ? (
          <div id="containerCard">
            {State.map((user) => {
              return <Card user={user} />;
            })}
          </div>
        ) : (
          <h1 className="nouser">No Users Data</h1>
        )}
      </div>
    </div>
  );
}

export default CardContainer;
