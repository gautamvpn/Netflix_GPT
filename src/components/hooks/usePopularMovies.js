import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constant";
import {addPopularMovies } from "../../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = ()=>{
    const dispatch = useDispatch()

    const popularMovies = useSelector(store => store.movies.popularMovies)

    const getPopularMovies = async () => {
      //fetching movie list from TMDB API 
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated',
        API_OPTIONS
      );
      const json = await data.json();
  
      const result = json.results;
      // console.log(result)
      //putting movies list into the store
      dispatch(addPopularMovies(result))
    }
  
    useEffect(() => {
       !popularMovies && getPopularMovies()
    }, [])
}

export default usePopularMovies;