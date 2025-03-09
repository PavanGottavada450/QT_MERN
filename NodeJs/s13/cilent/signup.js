function fnuser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const radioInputs = document.getElementsByName("gender");
  //   console.log(radioInputs);

  let gender;

  if (radioInputs[0].checked) {
    gender = "male";
  } else if (radioInputs[1].checked) {
    gender = "female";
  } else {
    gender = "other";
  }

//   console.log(name, email, phone, gender);

  var newuser = {
    name: name,
    email: email,
    phone: phone,
    gender: gender,
  };

  fetch("http://localhost:8978/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newuser),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      alert("user registered");
      console.log(data);
    })
    .catch((error) => {
      alert("Something went wrong");
      console.log(error);
    });
}
