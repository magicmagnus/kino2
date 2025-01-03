import { useState } from 'react'
import { timeToPixels } from '../utils/utils'
import MovieCard from './MovieCard'
import movieReference from '../data/movies-reference.json'

const MovieBlock = (props) => {
    const { show, showIdx, showCard, setShowCard } = props

    const movieInfo = movieReference[show.movieId]

    // when clickineg on a movie block, show the movie card
    const handleClick = (e) => {
        setShowCard({
            show: show,
            movieInfo: movieInfo,
            top: e.clientY,
            left: e.clientX,
        })
    }
    return (
        <button
            onClick={handleClick}
            key={showIdx}
            className="absolute flex h-24 top-0 mt-[7px] rounded-lg bg-slate-800 text-white shadow-lg hover:bg-slate-700 hover:scale-110 group transition-all duration-200 "
            style={{
                left: `${timeToPixels(show.time)}px`,
                width: `${timeToPixels(show.endTime) - timeToPixels(show.time)}px`,
            }}
        >
            <div className="h-24 shrink-0 rounded-l-xl">
                    <img 
                        src={movieInfo.posterUrl} 
                        alt={movieInfo.title} 
                        className='h-full w-auto object-cover rounded-l-lg' 
                    />
            </div>
            <div className='flex-grow flex flex-col justify-between px-3 pt-1 pb-1.5 text-left gap-2 overflow-auto'>
                <h1 className='text-sm font-semibold'>
                    {movieInfo.title}
                </h1>
                <p className='text-sm '>
                    {show.time} - {show.endTime}
                </p>
            </div>
        </button>
    )
}

export default MovieBlock