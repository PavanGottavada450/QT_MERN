import "./ProfileCard.css"


function ProfileCard({profile}) {


  return (
        <div id="card">
            <div id="left">
                <img src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=" alt="pic" />
            </div>
            <div id="right">
                <h1>{profile.name}</h1>
                <p>Age : {profile.age}</p>
                <p>Bio : {profile.bio}</p>

            </div>
        </div>
    
  )
}

export default ProfileCard;