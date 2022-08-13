import React from "react";
import "../Styles/MoviesPage.css";
import NavBar from "./NavBar";
import Row from "./Row";
import requests from "../API/requests";

function MoviesPage() {
  /* console.log("movie page rendered"); */
  return (
    <div className="movies-page">
      <NavBar />
      {/* <h1 >This is the Movies Page</h1> */}
      <div className="movies-list">
        <Row title="Action" fetchUrl={requests.fetchAction} />
        <Row title="Crime " fetchUrl={requests.fetchCrime} />
        <Row title="Animation" fetchUrl={requests.fetchAnimation} />

        <Row title="ComedyMovies" fetchUrl={requests.fetchComedy} />
        <Row title="HorrorMovies" fetchUrl={requests.fetchHorror} />
        <Row title="Romance" fetchUrl={requests.fetchRomance} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </div>
  );
}

export default MoviesPage;
