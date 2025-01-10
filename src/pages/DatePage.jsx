import dateViewData from '../data/date-view.json'
import TimelineGroup from '../components/TimelineGroup'
import TopSection from '../components/TopSection'
import SelectionButton from '../components/SelectionButton'
import MovieCard from '../components/MovieCard'
import { useState, useEffect, useRef } from 'react'
import { formatDateString, HOUR_WIDTH, START_HOUR, END_HOUR, TIMELINE_WIDTH, TODAY_FORMATTED } from '../utils/utils'
import { useScrollToEarliest } from '../hooks/useScrollToEarliest'


const DatePage = () => {

    // Filter the date data to only include dates starting from today
    const filteredDateData = dateViewData.filter((date) => date.date >= TODAY_FORMATTED)

    const [selectedDate, setSelectedData] = useState(filteredDateData[0].date)
    const [showCard, setShowCard] = useState(false)

    // dynamically get the data for the selected date
    const dateData = dateViewData.find((date) => date.date === selectedDate)

    // const firstMovieRef = useRef(null)
    // useEffect(() => {
    //     // Find the first MovieBlock's starting time across all theaters
    //     let earliestTime = '24:00'
    //     let earliestBlock = null

    //     dateData.theaters.forEach(theater => {
    //         theater.rooms.forEach(room => {
    //             room.showings.forEach(show => {
    //                 if (show.time < earliestTime) {
    //                     earliestTime = show.time
    //                     earliestBlock = show
    //                 }
    //             })
    //         })
    //     })

    //     // If we found a MovieBlock, scroll to its position
    //     if (earliestBlock) {
    //         const hourOfShow = parseInt(earliestBlock.time.split(':')[0])
    //         const scrollPosition = (hourOfShow - START_HOUR) * HOUR_WIDTH
    //         const container = document.querySelector('.overflow-y-auto')
    //         if (container) {
    //             container.scrollTo({
    //                 left: scrollPosition,
    //                 behavior: 'smooth'
    //             })
    //         }
    //     }
    // }, [selectedDate, dateData]) // Re-run when date changes

    // Scroll to the earliest showing when the page loads
    useScrollToEarliest([selectedDate])


    return (
        <>
            <div className="relative w-full h-full overflow-y-auto no-scrollbar" >
                <div className="relative flex flex-col" style={{
                    width: `${TIMELINE_WIDTH + 28 + 48}px`,
                    minWidth: `${TIMELINE_WIDTH + 28 + 48}px`
                }}>
                    <TopSection>
                        {/* Date buttons for Date View */}
                        {filteredDateData
                            .slice(0, 7)
                            .map((date, dateIndex) => (
                                <SelectionButton
                                    onClick={() => setSelectedData(date.date)}
                                    key={dateIndex}
                                    selected={date.date === selectedDate}
                                    text={formatDateString(date.date)} />
                            ))}
                    </TopSection>
                    {dateData.theaters.map((theater, theaterIdx) => (
                        <TimelineGroup key={theaterIdx}
                            groupElement={theater}
                            groupElementIdx={theaterIdx}
                            parentGroupType="theater"
                            showCard={showCard}
                            setShowCard={setShowCard}
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

export default DatePage