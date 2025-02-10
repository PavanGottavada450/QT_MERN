import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./MoviesList.css";

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json"
      )
      .then((res) => {
        setMovies(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log("error while fetching data");
      });
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Movies List</h1>
      <input
        type="text"
        placeholder="Search by Title..."
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
        className="search-input"
      />

      <select className="genre-select">
        <option value=""></option>
      </select>

      <table className="movies-table" rules="all" frame="box">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Cast</th>
            <th>Genres</th>
            <th>Thumbnail</th>
          </tr>
        </thead>
        <tbody>
          {filteredMovies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              <td>{movie.cast ? movie.cast : "NA"}</td>
              <td>{movie.genres ? movie.genres : "NA"}</td>
              <td>
                {movie.thumbnail ? (
                  <img
                    src={movie.thumbnail}
                    alt={movie.title}
                    className="thambnail"
                  />
                ) : (
                  "NA"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MoviesList;
