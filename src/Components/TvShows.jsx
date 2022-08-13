import React from 'react'
import requests from '../API/requests'
import NavBar from './NavBar'
import Row from './Row'

export default function TvShows() {
  return (
    <div>
      <NavBar />
      <div className="movies-list">
        <Row title="Trending in TV" fetchUrl={requests.tvTrending} />
        <Row title="TV Top Rated" fetchUrl={requests.tvTopRated} />
        <Row title="Adventure" fetchUrl={requests.tvAdventure} />
        <Row title="Animation" fetchUrl={requests.tvAnimation} />
        <Row title="Drama" fetchUrl={requests.tvDrama} />

        <Row title="Documentary" fetchUrl={requests.tvDocumentary} />
        
        <Row title="Comedy" fetchUrl={requests.tvComedy} />
      </div>
    </div>
  )
}
