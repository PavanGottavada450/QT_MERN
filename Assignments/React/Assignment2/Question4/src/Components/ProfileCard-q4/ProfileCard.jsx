import "./ProfileCard.css"


function ProfileCard({ name, age, bio }) {


  return (
        <div id="card">
            <div id="left">
                <img src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=" alt="pic" />
            </div>
            <div id="right">
                <h1>{name}</h1>
                <p>Age : {age}</p>
                <p>Bio : {bio}</p>

            </div>
        </div>
    
  )
}

export default ProfileCard;