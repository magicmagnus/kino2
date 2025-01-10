import React, { useState } from "react"
import MovieAttributes from "./MovieAttributes"

const MovieInfo = (props) => {
    const { movieData } = props
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div className='sticky top-0 left-0 flex flex-col justify-end w-screen bg-zinc-900 text-white'>
            <div
                className={`
                    flex w-screen overflow-hidden
                    transition-all duration-500 ease-in-out mb-2
                    ${isExpanded ? 'h-80' : 'h-20'}
                `}
            >
                <div className="h-80 shrink-0">
                    <img
                        src={movieData.posterUrl.split('?')[0]}
                        alt={movieData.title}
                        className='h-full w-auto object-cover'
                    />
                </div>
                <div className='flex-grow flex flex-col gap-2 px-4 py-2  overflow-auto'>
                    <h1 className='text-xl font-semibold'>
                        {movieData.title}
                    </h1>
                    
                    <MovieAttributes 
                        duration={movieData.duration.split(' ')[0]}
                        genre={movieData.genre}
                        actors={movieData.actors}
                        attributes={movieData.attributes}
                        director={movieData.director}
                        releaseDate={movieData.releaseDate}
                        originalTitle={movieData.originalTitle}
                        fsk={movieData.fsk}
                    />
                    
                    <p className=" text-sm">
                        {movieData.description.split('<br>').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                    </p>
                    
                </div>
            </div>

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`
                    w-full bg-zinc-900 relative flex items-center justify-center
                    before:absolute before:w-full before:left-0 before:bottom-0
                    before:h-20 before:bg-gradient-to-t before:from-zinc-900 before:via-zinc-900 before:via-10% before:to-transparent
                    before:transition-all before:duration-500 before:ease-in-out before:-translate-y-2
                    ${!isExpanded
                        ? 'before:opacity-100 h-1 before:h-20'
                        : 'before:opacity-0 h-8 before:h-8'
                    }
                `}
            >
                <p className={`
                    text-white  text-center  rounded-md 
                    transition-all duration-500 ease-in-out
                    ${!isExpanded ? 'bg-opacity-100 -translate-y-14' : ''}
                `}>
                    <i className={`
                        fa-solid ${isExpanded ? 'fa-chevron-up ' : 'fa-chevron-down'}  '}
                        text-3xl text-white transition-all duration-300 ease-in-out hover:scale-[1.3] hover:text-rose-500
                    `}></i>
                </p>
            </button>
        </div>
    )
}

export default MovieInfo