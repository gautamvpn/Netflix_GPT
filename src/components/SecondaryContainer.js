import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=> store.movies)

    return (
    <div className=' bg-black'>
    <div className='-mt-60 pl-12 relative z-20'>
    <MovieList title={"Now Playing"} movies = {movies.nowPlayingMovies}/>
    <MovieList title={"TopRated Movies"} movies = {movies.TopRatedMovies}/>
    <MovieList title={"Popular"} movies = {movies.popularMovies}/>
    <MovieList title={"Upcomming Movies"} movies = {movies.upcomingMovies}/>
    <MovieList title={"Horror"} movies = {movies.nowPlayingMovies}/>
    </div>
    {/* 
    MovieList - Popular
      -MovieCard * n
    MovieList - Now Playing
    MovieList - Horror
     */}
    </div>
  )
}

export default SecondaryContainer