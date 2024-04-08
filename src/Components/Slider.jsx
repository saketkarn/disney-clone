import React, { useEffect, useRef, useState } from 'react';
import { HiChevronLeft, HiChevronRight  } from "react-icons/hi2";
// import GlobalApi from '../Services/GlobalApi.jsx';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original"
const screenWidth=window.innerWidth

const Slider = () => {
const [movieList, setMovieList] = useState([])
const elementRef=useRef()

    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = () => {
        const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-IN&page=1';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjg5YTM4NTUzMDQ2MmY1MjlkOWYwMWFmZjZkZDlmMCIsInN1YiI6IjY2MTQyMGZkM2Q3NDU0MDE2MjA3NTc2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xohgv9YSttb5NAMIbuHOcROX5L10r1QpNxBhM3vChWc'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => setMovieList(json.results))
            .catch(err => console.error('error:' + err));

    };

    const sliderRight =(element)=>{
        element.scrollLeft+=screenWidth-110
    }

    const sliderLeft =(element)=>{
        element.scrollLeft-=screenWidth-110
    }

    return (
        <div>
        <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer' onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0' onClick={()=>sliderRight(elementRef.current)}/>
            <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
                {movieList.map((item, index)=>(
                    <img src={IMAGE_BASE_URL + item.backdrop_path } key={index}
                    className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in'
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
