import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import MovieCard from './MovieCard';
import HrMovieCard from './HrMovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
const movieBaseURL = "https://api.themoviedb.org/3";
const api_key = '1289a385530462f529d9f01aff6dd9f0';
const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=1289a385530462f529d9f01aff6dd9f0';

function MovieList({ genreId, index_ }) {

    const elementRef=useRef(null);

    const [movieList, setMovieList]= useState([])
    useEffect(() => {
        getMovieByGenreId(genreId);
    }, []);

    const getMovieByGenreId = (id) => {
        axios.get(movieByGenreBaseURL + "&with_genres=" + id)
            .then(resp => {
                setMovieList(resp.data.results)
            })
            .catch(error => {
                console.error('Error fetching movies by genre:', error);
            });
    };

    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }

    return (
        <div className='relative'>
        <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute 
            ${index_%3==0?'mt-[80px]':'mt-[150px]'} `}/>
            <div ref={elementRef} className='flex overflow-x-auto gap-8
     scrollbar-none scroll-smooth pt-5 px-3 pb-5'>
        {movieList.map((item, index)=>(
            <>
            {index_%3==0?<HrMovieCard movie={item}/>: <MovieCard movie={item} key={index}/>}
            </>
            
        ))}
    </div>
    <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index_%3==0?'mt-[80px]':'mt-[150px]'}`}/> 
    </div>
    );
}

MovieList.propTypes = {
    genreId: PropTypes.number.isRequired
};

export default MovieList;
