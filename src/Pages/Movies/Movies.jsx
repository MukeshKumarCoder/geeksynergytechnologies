import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Movies.module.css"

const Movies = ({isLogin}) => {
  const [moviesData, setMoviesData] = useState([]);

  let obj = {
    category: "movies",
    language: "kannada",
    genre: "all",
    sort: "voting",
  };

  const getMoviesData = async () => {
    try {
      let res = await axios.post("https://geeksenery-backend-pfsv.onrender.com/api/movieList", obj);
      setMoviesData(res.data.result);
      console.log(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMoviesData();
  }, []);

  return (
    <div className={styles.movieContainer}>
      {moviesData.map((movie) => (
        <div className={styles.movie} key={movie.id}>
          <img src={movie.poster} />
          <h3>Title:{movie.title}</h3>
          <p>Total Votes {movie.totalVoted}</p>
          <p>Stars:{movie.stars}</p>
          <p>Genre:{movie.genre}</p>
          <h3>Director:{movie.director}</h3>
        </div>
      ))}
    </div>
  );
};

export default Movies;
