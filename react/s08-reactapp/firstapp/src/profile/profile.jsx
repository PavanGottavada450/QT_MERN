import "./profile.css";
import { useState } from "react";

function Profile() {
  
  const [theme, setTheme] = useState(true);

  const handleChange = () => {
    setTheme(!theme);
  };

  //     const [name,setName] = useState("Ronaldo");
  //     const [gender,setGender] = useState("Male");
  //     const [email,setEmail] = useState("ronaldo@gmail.com");
  //     const [image,setImage] = useState("https://www.mensjournal.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk2MTM1ODYxNzYyODYwNTQ5/cristiano-ronaldo-real-madrid-champions-league.jpg")

  // function cr7(){
  //     setName("Cristiano Ronaldo");
  //     setGender("male");
  //     setEmail("ronaldo@gmail.com");
  //     setImage("https://www.mensjournal.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk2MTM1ODYxNzYyODYwNTQ5/cristiano-ronaldo-real-madrid-champions-league.jpg");
  // }

  // function dhoni(){
  //     setName("M S Dhoni");
  //     setGender("male");
  //     setEmail("dhoni@gmail.com");
  //     setImage("https://pbs.twimg.com/profile_images/1768318620571205632/5J2IrT2M_400x400.jpg");
  // }

  const [state, setState] = useState({
    name: "Ronaldo",
    gender: "male",
    email: "ronaldo@gmail.com",
    image:
      "https://www.mensjournal.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk2MTM1ODYxNzYyODYwNTQ5/cristiano-ronaldo-real-madrid-champions-league.jpg",
  });

  function cr7() {
    setState({
      name: "Ronaldo",
      gender: "male",
      email: "ronaldo@gmail.com",
      image:
        "https://www.mensjournal.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk2MTM1ODYxNzYyODYwNTQ5/cristiano-ronaldo-real-madrid-champions-league.jpg",
    });
  }

  function dhoni() {
    setState({
      name: "dhoni",
      gender: "male",
      email: "dhoni@gmail.com",
      image:
        "https://pbs.twimg.com/profile_images/1768318620571205632/5J2IrT2M_400x400.jpg",
    });
  }

  return (
    <div className={`${theme ? "light" : "dark"} container`}>
      <div className="left">
        <img src={state.image} alt="pic" width={"100%"} height={"100%"} />
      </div>
      <div className="right">
        <dl>
          <dt>
            <b>User Name</b>
          </dt>
          <dd>{state.name}</dd>
          <br />
          <dt>
            <b>Gender</b>
          </dt>
          <dd>{state.gender}</dd>
          <br />
          <dt>
            <b>Email</b>
          </dt>
          <dd>{state.email}</dd>
          <br />
          <dt>
            <b>Discription</b>
          </dt>
          <dd>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum
            quod atque voluptatum cupiditate dolor expedita similique molestiae
            accusamus commodi, eum consectetur iusto sequi repellendus velit ea
            laudantium vel debitis, non nam? Deserunt officia autem perferendis
            sequi modi dicta mollitia blanditiis, deleniti sunt iusto suscipit
            ducimus id quas quaerat minima.
          </dd>
        </dl>
        <br />
        <button onClick={cr7}>CR7</button>
        <button onClick={dhoni}>Dhoni</button>
        <br />
        <br />
        <input type="checkbox" onChange={handleChange} />
        <label>click toget dark mode</label>
      </div>
    </div>
  );
}

export default Profile;
