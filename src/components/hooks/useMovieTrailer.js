import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constant";
import { addTrailerVideo } from "../../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch();

    //fetch trailer video and updating the store
    const getMovieVideo = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos",
            API_OPTIONS)
        const json = await data.json();

        //  console.log(json);
        const filterData = json.results.filter((video) => video.type === 'Trailer')

        const trailer = filterData.length ? filterData[0] : json.results[0];
        // console.log(trailer)
        // setTrailerID(trailer.key)
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(() => {
        getMovieVideo();
    }, [])
}

export default useMovieTrailer;