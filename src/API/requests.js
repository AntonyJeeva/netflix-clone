

const API_KEY= process.env.REACT_APP_API_KEY



const requests = {
    /* fetchTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US`, */
    video: `/videos?api_key=${API_KEY}&language=en-US`,

    /* fetchBanner: 'https://api.themoviedb.org/3/movie/550?api_key=', */

    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`, 
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchCrime:`/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`, 
    fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, 
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,


    //TV Requests
    tvTrending: `/trending/tv/week?api_key=${API_KEY}&include_adult=false`,
    tvTopRated: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
    tvNetflix: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    tvDocumentary: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=99`,
    tvAnimation: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=16`,
    tvAdventure: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=10759`,
    tvComedy: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=35`,
    tvDrama: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_genres=18`,
}

export default requests;