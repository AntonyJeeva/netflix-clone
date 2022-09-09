import React from "react";
import NavBar from "./NavBar";
import "../Styles/HomeScreen.css";
import Banner from "./Banner";
import Row from "./Row";
import requests from "../API/requests";
import GitHubIcon from "@mui/icons-material/GitHub";

/* import { ToastContainer, toast } from "react-toastify"; */

import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
/* import requestsba from "../API/requestsba"; */




function HomeScreen() {
 

  const navigate = useNavigate();
  return (
    <div className="homescreen">
       
      <NavBar />
      
        <Banner />
        
        <Row
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

        {/* <Row title="Top Rated" fetchUrl={requests.fetchTopRated} /> */}
        
      <div className="home-footer">
        <button
          onClick={() => {
            navigate("/movies");
          }}
        >
          More Movies >>{" "}
        </button>
        <h3> Developed by Antony Jeeva</h3>
        <a
          href="https://github.com/AntonyJeeva/netflix-clone"
          rel="noreferrer"
          target={"_blank"}
        >
          <GitHubIcon className="icon2" color="primary" size="large" />
        </a>
      </div>
    </div>
  );
}

export default HomeScreen;
