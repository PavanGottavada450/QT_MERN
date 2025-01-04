import React, { useState } from "react";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [submittedUsername, setSubmittedUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.trim() === "") {
      alert("username required");
    }
    if (password.trim() === "") {
      alert("username required");
    }
    setSubmittedUsername(userName);
    setUserName('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>UserName :</label>
          <input
            type="text"
            placeholder="Enter UserName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Password :</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>

      {submittedUsername && (
        <div>
          <h3>Wlcome, {submittedUsername}!</h3>
        </div>
      )}

    </div>
  );
}

export default LoginForm;
