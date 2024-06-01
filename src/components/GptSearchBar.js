import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { generationConfig, model } from '../utils/geminiai'
import { API_OPTIONS } from '../utils/constant'
// import gemini from '../utils/geminiai'
import {addGptMovieResult} from "../utils/gptSlice"


const GptSearchBar = () => {
  const langkey = useSelector(store => store.config.lang)
  const searchText = useRef(null)
  const dispatch = useDispatch()

  //search movie in TMDB
  const searchMovieTMDB = async(movie) =>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+
    movie+
    "&include_adult=false&language=en-US&page=1",
     API_OPTIONS 
    );
    const json = await data.json();
    return json;

  }

  const handleGptSearchClick = async ()=>{
      console.log(searchText.current.value)
      // make an API call to GPT API and get Movie results

      const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query" +searchText.current.value+ ". only give me names of 5 movie, comma seperate. like the example result given ahead. Example Result:Gadar, Sholay, Don,Golmaaal, Koi Mil Gaya";

    //  const gptResult =  await openai.chat.completions.create({
    //     messages: [{ role: 'user', content: gptQuery }],
    //     model: 'gpt-3.5-turbo',
    //   });
    //   console.log(gptResult.choices)

    const chatSession = model.startChat({
      generationConfig,

  });

  const responseResults = await chatSession.sendMessage(gptQuery);
        const searchResults = responseResults?.response?.text()?.split(",");
        
        //Error handling page can create
        if (!searchResults) return

        console.log("searching",searchResults)

        // for each movie i will search TMDB API
        const promiseArray = searchResults?.map(movie => searchMovieTMDB(movie))

        const tmdbResults = await Promise.all(promiseArray)

        console.log(tmdbResults)

        dispatch(addGptMovieResult({movieNames:searchResults, movieResults:tmdbResults}))


  }

  return (
    <div className='pt-[40%]  md:pt-[10%] flex justify-center'>
      <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=> e.preventDefault()}>
        <input ref={searchText}  type="text" className='p-4 m-4 col-span-9  ' 
        placeholder= {lang[langkey].gptSearchPlaceholder} 

        />
        <button className='py-2 px-4 m-4 bg-red-700 col-span-3 text-white rounded-lg'
        onClick={handleGptSearchClick}
        >
        {lang[langkey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar