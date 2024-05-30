import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constant";
import {addUpcomingMovies } from "../../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch()

    const upcomingMovies = useSelector(store => store.movies.upcomingMovies)

    const getUpcomingMovies = async () => {
      //fetching movie list from TMDB API 
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming',
        API_OPTIONS
      );
      const json = await data.json();
  
      const result = json.results;
      // console.log(result)
      //putting movies list into the store
      dispatch(addUpcomingMovies(result))
    }
  
    useEffect(() => {
       !upcomingMovies && getUpcomingMovies()
    }, [])
}

export default useUpcomingMovies;