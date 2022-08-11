import React, { useEffect, useState } from "react";
import "../Styles/Banner.css";
import axios from "../API/axios";
import requests from "../API/requests";
/* import ReactPlayer from "react-player";

import { ToastContainer, toast } from "react-toastify"; */

import "react-toastify/dist/ReactToastify.css";
/* import Modal from "./Modal"; */

function Banner() {
  const [openModal, setOpenModal] = useState(false);

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  console.log(movie);

  //truncate function to get the ellipsis css property kinda look
  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }

  const videoplayer = () => {
    console.log("video playing");
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {" "}
          {movie?.title || movie?.name || movie?.original_name}{" "}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button" onClick={videoplayer}>
            Play
          </button>

          <button
            className="banner_button"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            {" "}
            More info
          </button>

          {/*  {openModal && <Modal closeModal={setOpenModal} />} */}
        </div>
        <div className="banner_description">
          {truncate(movie?.overview, 190)}{" "}
        </div>
      </div>

      <div className="fade_bottom"></div>
    </header>
  );
}

export default Banner;
