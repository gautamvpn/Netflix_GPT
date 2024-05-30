import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { bg_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
    <div className='fixed -z-10'>
                <img src= {bg_URL}
                    alt="background_image" />

            </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch