import dateViewData from '../data/date-view.json'
import TimelineGroup from '../components/TimelineGroup'
import TopSection from '../components/TopSection'
import SelectionButton from '../components/SelectionButton'
import MovieCard from '../components/MovieCard'
import { useState } from 'react'
import { formatDateString, TIMELINE_WIDTH, TODAY_FORMATTED  } from '../utils/utils'


const DatePage = () => {

    // Filter the date data to only include dates starting from today
    const filteredDateData = dateViewData.filter((date) => date.date >= TODAY_FORMATTED)
    
    const [selectedDate, setSelectedData] = useState(filteredDateData[0].date)

    
    const [ showCard, setShowCard ] = useState(false)

    // dynamically get the data for the selected date
    const dateData = dateViewData.find((date) => date.date === selectedDate)


    return (
        <>
            <div className="relative w-full h-full overflow-y-auto no-scrollbar">
                <div className="relative flex flex-col gap-4 " style={{
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