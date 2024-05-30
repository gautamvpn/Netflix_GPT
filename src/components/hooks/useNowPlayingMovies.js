import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../../utils/constant";
import { addNowPlayingMovies } from "../../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch()

    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)

    const getNowPlayingMovies = async () => {
      //fetching movie list from TMDB API 
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing',
        API_OPTIONS
      );
      const json = await data.json();
  
      const result = json.results;
      // console.log(result)
      //putting movies list into the store
      dispatch(addNowPlayingMovies(result))
    }
  
    useEffect(() => {
      !nowPlayingMovies && getNowPlayingMovies()
    }, [])
}

export default useNowPlayingMovies;