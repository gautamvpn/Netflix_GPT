import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constant";
import {addPopularMovies, addTopRatedMovies } from "../../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch()

    const topRatedMovies = useSelector(store => store.movies.TopRatedMovies)

    const getPopularMovies = async () => {
      //fetching movie list from TMDB API 
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/popular',
        API_OPTIONS
      );
      const json = await data.json();
  
      const result = json.results;
      // console.log(result)
      //putting movies list into the store
      dispatch(addTopRatedMovies(result))
    }
  
    useEffect(() => {
       !topRatedMovies && getPopularMovies()
    }, [])
}

export default useTopRatedMovies;