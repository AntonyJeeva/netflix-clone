import React, { useEffect, useState } from "react";
import "../Styles/NavBar.css";

import { useNavigate } from "react-router-dom";

function NavBar() {
  const [show, setShow] = useState(false);

  const transistionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transistionNavBar);
    return () => {
      window.removeEventListener("scroll", transistionNavBar);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <div className={`navbar ${show && `nav_black`}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://cdn.discordapp.com/attachments/560666490832027656/1002226762798866502/580b57fcd9996e24bc43c529_1.png"
          onClick={() => {
            navigate("/");
          }}
          alt="netflix_logo"
        ></img>
        <button className="movie-btn" onClick={() => {
            navigate("/movies")}} >Movies</button>
            <button className="tvshow-btn" onClick={() => {
            navigate("/tvshows")}} >TV Shows</button>
        <img
          className="nav_avatar_pic"
          src="https://archive.org/download/profiles_202104/penguin.png"
          onClick={() => {
            navigate("/profile");
          }}
          alt="profile_avatar"
        ></img>
      </div>
    </div>
  );
}

export default NavBar;
