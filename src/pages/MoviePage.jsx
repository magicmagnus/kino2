import movieViewData from '../data/movie-view.json'
import TimelineGroup from '../components/TimelineGroup'
import TopSection from '../components/TopSection'
import MovieCard from '../components/MovieCard'

import { Listbox } from '@headlessui/react'
import { Navigate } from 'react-router-dom'

import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useScrollToEarliest } from '../hooks/useScrollToEarliest'
import { TIMELINE_WIDTH } from '../utils/utils'



const MoviePage = () => {
    
    const { movieSlug } = useParams() // Get movieslug from URL
    const [selectedMovie, setSelectedMovie] = useState(movieSlug || movieViewData[0].slug)
    const [showCard, setShowCard] = useState(false)

    const today = new Date()
    const TODAY_FORMATTED = today.toISOString().split('T')[0]

    // Add error handling for when movie is not found
    const movieData = movieViewData.find((movie) => movie.slug === selectedMovie)
    if (!movieData) {
        return <Navigate to={"/404/"} />
        
    }

    movieData.dates = movieData.dates.filter(date => date.date >= TODAY_FORMATTED)

   
    useScrollToEarliest([selectedMovie])
    return (
        <>
            <div className="relative w-full h-full overflow-y-auto no-scrollbar">
                <div className="relative flex flex-col " style={{
                    width: `${TIMELINE_WIDTH + 28 + 48}px`,
                    minWidth: `${TIMELINE_WIDTH + 28 + 48}px`
                }}>
                    <TopSection movieData={movieData}>
                        {/* dropdown menu with "seach" btn aside */}
                        <Listbox value={selectedMovie} onChange={setSelectedMovie}>
                            {({ open }) => (
                                <>
                                    <Listbox.Button className="w-full sm:w-96 bg-rose-600 text-sm text-white flex justify-center items-center transition-all duration-200
                                                             rounded-md px-2 py-1 h-fit hover:bg-rose-800 z-20 shadow-lg">
                                        <p>{movieData.title}</p>
                                        <i className={`fa-solid  pl-2 pb-0.5 transform transition-transform duration-200 ${open ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                    </Listbox.Button>
                                    <Listbox.Options className={"absolute top-0 left-0 right-0  \
                                        m-2 w-[calc(100%-1rem)] text-center text-sm pt-8 z-10 \
                                        sm:w-96 max-h-[600px] overflow-auto  \
                                        text-white bg-rose-800 rounded-md shadow-lg \
                                        "}>
                                        {movieViewData.map((movie, movieIndex) => (
                                            <Listbox.Option
                                                key={movieIndex}
                                                value={movie.slug}
                                                className={({ active }) => `
                                                    px-3 py-2 cursor-pointer
                                                    ${active ? 'bg-rose-600' : 'bg-rose-800'}
                                                `}
                                            >
                                                {movie.title}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </>
                            )}
                        </Listbox>
                    </TopSection>
                    {movieData.dates.map((date, dateIdx) => (
                        <TimelineGroup key={dateIdx}
                            groupElement={date}
                            groupElementIdx={dateIdx}
                            parentGroupType="date"
                            showCard={showCard}
                            setShowCard={setShowCard}
                            date={date.date}
                        />
                    ))}
                </div>
            </div>
            {/* Show MovieCard */}
            {showCard && <MovieCard
                showCard={showCard}
                setShowCard={setShowCard}
            />}
        </>
    )
}

export default MoviePage