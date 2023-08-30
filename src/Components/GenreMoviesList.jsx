import React from 'react'
import {genere} from "../Constant/GenresList";
import { getMovieByGenreId } from '../Services/GlobalApi';
import MovieList from './MovieList';

const GenreMoviesList = () => {
    
  return (
    <div>
      {genere.map(
        (item, index) =>
          index <= 4 && (
            <div className='mt-4'>
              <div className='text-2xl pl-4 font-sans tracking-wider pb-2'>{item.name}</div>
              
                {
                  <MovieList genreId={item.id} />
                }
            
            </div>
          )
      )}
    </div>
  );
}

export default GenreMoviesList