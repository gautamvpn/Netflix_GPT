import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { bg_URL } from '../utils/constant'

const GptSearch = () => {
  return (
   <>
   <div className='fixed -z-10'>
                <img className='h-screen object-cover w-screen object-cover' src= {bg_URL}
                    alt="background_image" />

            </div>
    <div className=''>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
    </>
  )
}

export default GptSearch