// import { useState } from "react"

import { useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(5);

  const handleTimer = () => {
    setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
  };

  return (
    <div>
      <h1>{timer}</h1>
      <button onClick={handleTimer}>Click</button>
    </div>
  );
}

export default Timer;
