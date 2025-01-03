import React, { useState, useEffect } from 'react'

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
            className={`flex justify-center items-center absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] w-full h-full z-20
                      transition-all duration-300 ease-in-out
                      ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`w-[80%] md:w-[90%] max-w-[900px]
                            h-[90%] md:h-[40%] 
                         transition-all duration-300 ease-in-out
                         bg-slate-900 rounded-2xl shadow-lg text-white
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
                <div className='h-full w-full overflow-auto relative flex flex-col justify-start md:flex-row rounded-2xl'>

                    <div className='w-full md:h-full md:w-auto bg-slate-800'> 
                        <div className='relative w-full pb-[150%] 
                                        md:h-full md:pb-0 md:aspect-[2/3] md:w-auto'> 
                            {!imageLoaded && !imageError && (
                                <div
                                    className='absolute top-0 left-0 w-full h-full bg-slate-800'
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
                    <div className='p-4 flex-1 flex flex-col justify-start gap-4'>
                        <h2 className='text-2xl font-semibold text-left'>
                            {showCard.movieInfo.title}
                        </h2>
                        <p className='text-sm text-left pt-3 md:overflow-scroll md:h-[calc(100%-6rem)]'>
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
                    <div className='w-full p-4 flex gap-4 justify-center bg-slate-700 h-fit
                        sticky bottom-0 
                        md:absolute md:bottom-0 md:right-0 md:left-auto md:w-auto md:bg-transparent '>
                        <button>
                            <a href={showCard.movieInfo.trailerUrl} target="_blank" rel="noreferrer"
                                className='bg-indigo-500 text-white rounded-md p-2 '>
                                Watch Trailer
                            </a>
                        </button>
                        <button>
                            <a
                                className='bg-violet-600 text-white rounded-md p-2 '
                                href={showCard.movieInfo.iframeUrl} target="_blank" rel="noreferrer"
                            >
                                Buy Ticket for {showCard.show.time}
                            </a>
                        </button>

                    </div>
                </div>
            </div>
        </button>
    )
}

export default MovieCard