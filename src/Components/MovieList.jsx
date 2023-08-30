import React, { useEffect, useState } from 'react'
import { getMovieByGenreId } from '../Services/GlobalApi';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieList = ({genreId}) => {
    
  const [movies,setMovies]=useState([]);

  const getMovieList= async (genreId)=>{
        const data=await getMovieByGenreId(genreId);
        setMovies(data.data.results)
        console.log(movies)
  }
  useEffect(()=>{
    getMovieList(genreId);
  },[genreId])

  return (
    <div className='flex overflow-x-auto no-scrollbar space-x-4 overflow-y-visible '>
        {
            movies.map((movie)=>(
                <img className='w-[240px] rounded-md object-contain transition-all z-100 duration-[300ms] hover:scale-110 hover:rounded-md' src={`${IMAGE_BASE_URL}${movie.backdrop_path}`} alt="" />
            ))
        }
    </div>
  )
}

export default MovieList