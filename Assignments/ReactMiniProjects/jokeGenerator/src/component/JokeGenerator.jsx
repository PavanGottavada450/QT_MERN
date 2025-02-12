import React, { useEffect, useState } from "react";
import axios from "axios";

function JokeGenerator() {
  const [joke, setJoke] = useState("");

  const fetchJoke = () => {
    axios
      .get("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => setJoke(res.data.joke))
      .catch((error) => {
        setJoke("Failed to Fetch a Joke. Try Again!");
      });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-100 text-center">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Random Joke Generator 😂</h2>
        <p className="text-lg font-medium text-gray-800 mb-4">{joke}</p>
        <button onClick={fetchJoke} className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600">Get Another Joke</button>
      </div>
    </div>
  );
}

export default JokeGenerator;
