import "./App.css";
import Header from "./Components/Header/Header";
import Card from "./Components/profilecard/Card";

function App() {

  const name = "Pavan";
  const bio = "Aspiring MERN Stack Developer";
  const profileImage = "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=";

  return (
    <div>
      <Header />
      <Card name={name} bio = {bio} profileImage = {profileImage}/>
    </div>
  );
}

export default App;
