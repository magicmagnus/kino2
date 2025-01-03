import { useState } from "react"

const MovieInfo = (props) => {
    const { movieData } = props
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div className='sticky top-0 left-0 flex flex-col justify-end w-screen bg-slate-900 text-white'>
            <div
                className={`
                    flex w-screen overflow-hidden
                    transition-all duration-500 ease-in-out mb-2
                    ${isExpanded ? 'h-80' : 'h-20'}
                `}
            >
                <div className="h-80 shrink-0">
                    <img
                        src={movieData.posterUrl}
                        alt={movieData.title}
                        className='h-full w-auto object-cover'
                    />
                </div>
                <div className='flex-grow flex flex-col gap-2 px-4 py-2  overflow-auto'>
                    <h1 className='text-xl font-semibold'>
                        {movieData.title}
                    </h1>
                    
                    <p className='text-sm'>
                        {movieData.genre}
                    </p>
                    <p className='text-sm'>
                        {movieData.duration}
                    </p>
                    <p className=" text-sm">
                        {movieData.description}
                    </p>
                    <p className='text-sm'>
                        Regie: {movieData.director}
                    </p>
                    <p className='text-sm'>
                        <span className="font-bold ">Darsteller:</span> {movieData.actors.join(', ')}
                    </p>
                </div>
            </div>

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`
                    w-full bg-slate-900 relative flex items-center justify-center
                    before:absolute before:w-full before:left-0 before:bottom-0
                    before:h-20 before:bg-gradient-to-t before:from-slate-900 before:via-slate-900 before:via-10% before:to-transparent
                    before:transition-all before:duration-500 before:ease-in-out before:-translate-y-2
                    ${!isExpanded
                        ? 'before:opacity-100 h-1'
                        : 'before:opacity-0 h-8'
                    }
                `}
            >
                <p className={`
                    text-white  text-center  rounded-md 
                    transition-all duration-500 ease-in-out
                    ${!isExpanded ? 'bg-opacity-100 -translate-y-14' : ''}
                `}>
                    <i className={`
                        fa-solid ${isExpanded ? 'fa-chevron-up text-indigo-500' : 'fa-chevron-down text-white'}  '}
                        text-3xl transition-all duration-300 ease-in-out hover:scale-[1.3]
                    `}></i>
                </p>
            </button>
        </div>
    )
}

export default MovieInfo