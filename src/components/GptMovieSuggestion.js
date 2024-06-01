import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from "./MovieList"
const GptMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector(store => store.gpt);
//  if(!movieNames) return null; 

  if (!movieNames || !movieResults) return <div className=' font-bold text-3xl p-10 text-center text-white'>Search your favourite Movies With Gemini Ai</div>;
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
    <div>
    {movieNames.map((movieName,index) => ( 
    <MovieList 
    key={movieName} 
    title ={movieName} 
    movies={movieResults[index].results}

    />))}
      
    </div>
    </div>
  )
}

export default GptMovieSuggestion