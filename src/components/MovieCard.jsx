import React, { useState, useEffect } from 'react'
import MovieAttributes from './MovieAttributes'

const MovieCard = (props) => {
    const { showCard, setShowCard } = props
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Trigger animation after mount
        setIsVisible(true)
    }, [])

    const handleClose = () => {
        setIsVisible(false)
        // Wait for animation to complete before unmounting
        setTimeout(() => setShowCard(null), 200)
    }

    // Add these styles in your CSS or styled-components
    const imageStyles = {
        transition: 'opacity 0.3s ease-in-out',
    };

    const placeholderStyles = {
        backgroundColor: '#2c2c2c', // Dark placeholder
        width: '100%',
        height: '100%',
    };

    // Update the image element
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    



    return (
        <button
            onClick={handleClose}
            className={`flex justify-center items-center absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] w-full h-full z-40
                      transition-all duration-300 ease-in-out
                      ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`w-[85%] md:w-[90%] max-w-[900px]
                            h-[90%] md:h-[60%] 
                         transition-all duration-300 ease-in-out
                         bg-zinc-900 rounded-3xl shadow-lg text-white
                         absolute top-1/2 left-1/2
                         ${isVisible ? 'opacity-100 scale-100 -translate-x-1/2 -translate-y-1/2' :
                        'opacity-0 scale-95 -translate-x-1/2 -translate-y-[45%]'}
                         cursor-default`}>
                {/* Rest of your card content remains the same */}
                <button
                    onClick={handleClose}
                    className='absolute top-0 right-0 flex justify-center items-center p-6 z-20  h-8 w-8'
                >
                    <i class="fa-solid fa-xmark text-2xl "></i>
                </button>
                <div className='h-full w-full overflow-auto relative flex flex-col justify-start md:flex-row rounded-3xl'>

                    <div className='w-full md:h-full md:w-auto bg-zinc-800'>
                        <div className='relative w-full pb-[150%] 
                                        md:h-full md:pb-0 md:aspect-[2/3] md:w-auto'>
                            {!imageLoaded && !imageError && (
                                <div
                                    className='absolute top-0 left-0 w-full h-full bg-zinc-800'
                                    style={placeholderStyles}
                                />
                            )}
                            <img
                                src={showCard.movieInfo.posterUrl.split('?')[0]}
                                style={{
                                    ...imageStyles,
                                    opacity: imageLoaded ? 1 : 0,
                                    display: imageError ? 'none' : 'block'
                                }}
                                onLoad={() => setImageLoaded(true)}
                                onError={() => setImageError(true)}
                                alt={showCard.movieInfo.title}
                                className='absolute top-0 left-0 w-full h-full object-cover'
                            />
                        </div>
                    </div>
                    <div className='p-4 flex-1 flex flex-col justify-start gap-4 mb-6'>
                        
                        <h2 className='text-3xl font-semibold text-left'>
                            {showCard.movieInfo.title}
                        </h2>

                        <MovieAttributes 
                            duration={showCard.movieInfo.duration.split(' ')[0]}
                            genre={showCard.movieInfo.genre}
                            actors={showCard.movieInfo.actors}
                            attributes={showCard.show.attributes}
                            director={showCard.movieInfo.director}
                            releaseDate={showCard.movieInfo.releaseDate}
                            originalTitle={showCard.movieInfo.originalTitle}
                            fsk={showCard.movieInfo.fsk}
                        />

                        <p className='text-sm text-left md:overflow-scroll md:h-[calc(100%-6rem)]'>
                            {showCard.movieInfo.description.split('<br>').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>
                        <p>

                        </p>

                    </div>
                    <div className='w-full py-2 px-2.5 flex justify-between bg-zinc-900 h-fit
                        sticky bottom-0 
                        md:absolute md:bottom-0 md:right-0 md:left-auto md:w-auto md:bg-transparent '>
                        <button>
                            <a href={showCard.movieInfo.trailerUrl} target="_blank" rel="noreferrer"
                                className='flex justify-center w-fit items-center gap-2 px-3 py-2 bg-zinc-900 border-rose-600 border-2 text-rose-600 font-semibold rounded-full p-2 text-nowrap
                                hover:bg-rose-600 hover:text-white hover:border-rose-600 '>
                                    <i class="fa-brands fa-youtube"></i>
                                    <p className='pl-0'>Trailer</p>    
                                
                            </a>
                        </button>
                        <button>
                            <a
                                href={showCard.show.iframeUrl} target="_blank" rel="noreferrer"
                                className='w-fit bg-rose-600 text-white rounded-full px-3 py-2 text-nowrap font-semibold hover:bg-rose-800 ' >
                                Tickets für {showCard.show.time}h kaufen
                            </a>
                        </button>

                    </div>
                </div>
            </div>
        </button>
    )
}

export default MovieCard