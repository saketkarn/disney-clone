import React from 'react'
import GenresList from '../Constant/GenresList'
import MovieList from './MovieList'

function GenreMovieList() {
  return (
    <div>
      {GenresList.genre.map((item, index)=>index<=4&&(
        <div className='p-8 px-10 md:px-16' key={item.id}>
            <h2 className='text-[20px] text-white font-bold'>
                {item.name}
                <MovieList genreId={item.id} index_={index}/>
            </h2>
        </div>
      ))}
    </div>
  )
}

export default GenreMovieList
