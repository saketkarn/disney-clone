// import axios from "axios"

import axios from "axios"

const movieBaseURL = "https://api.themoviedb.org/3"
const api_key='1289a385530462f529d9f01aff6dd9f0'
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=1289a385530462f529d9f01aff6dd9f0';
// // const ='https://api.themoviedb.org/3/trending/add/day?api_key=1289a385530462f529d9f01aff6dd9f0'

// const getTrendingVideos = axios.get(this.movieBasedURL+"/trending/add/day?api_key"+api_key)

// export default getTrendingVideos

const getTrendingVideos= axios.get(movieBaseURL+"/trending/all/day?api_key="+api_key)
const getMovieByGenreId=(id)=>axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default getMovieByGenreId