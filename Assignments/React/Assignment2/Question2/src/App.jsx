import "./App.css";
import Header from "./Components/Header/Header";
import ProfileCard from "./Components/ProfileCard-q4/ProfileCard";
// import Counter from './Components/Counter-q1/Counter'
// import CounterApp from "./Components/CounterDisplay-q5/CounterApp";

function App() {

  const profiles = [
    {name: "Tanooz", age: 23, bio:"React Developer From Japan"},
    {name: "Pavan" , age:23, bio:"Web Developer From India"},
    {name: "Karthik", age:23, bio:"Python Developer From Russia"},
  ];

  return (
    <div>
      <Header />
      <div id="container">
        {profiles.map((profile, index)=>(
          <ProfileCard 
          key={index}
          name={profile.name}
          age={profile.age}
          bio={profile.bio}
        />
        ))}
      </div>
    </div>
  );
}

export default App;
