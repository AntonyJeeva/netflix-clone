import React, { useEffect, useState } from "react";
import "../Styles/Row.css";
import axios from "../API/axios";


/* import 'react-lazy-load-image-component/src/effects/blur.css'; */

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  /* console.log(movies) */

  /* https://image.tmdb.org/t/p/original/ */
  /*   props.isLargeRow = false; */

  return (
    <div className="row">
      <h2 className="row_title">{title} </h2>

      <div className="row_posters">
        
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              /* conditional rendering just so we dont get dead links / dead img poster*/
              <img loading="lazy"
              
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />


            )
        )}
      </div>
    </div>
  );
}

export default Row;
