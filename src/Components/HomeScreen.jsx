import React from "react";
import NavBar from "./NavBar";
import "../Styles/HomeScreen.css";
import Banner from "./Banner";
import Row from "./Row";
import requests from "../API/requests";

import { ToastContainer, toast } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";


function HomeScreen() {
  /* console.log('homescreen rendered') */
  const notify= ()=>{
   toast.warn('ggwp')
  }

  return (
    
    <div className="homescreen">
    {/* {notify()} */}
      
      <NavBar /> 
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow 
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchAction} />
      <Row title="Crime " fetchUrl={requests.fetchCrime} />
      <Row title="Animation" fetchUrl={requests.fetchAnimation} />

      <Row title="ComedyMovies" fetchUrl={requests.fetchComedy} />
      <Row title="HorrorMovies" fetchUrl={requests.fetchHorror} />
      <Row title="Romance" fetchUrl={requests.fetchRomance} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
