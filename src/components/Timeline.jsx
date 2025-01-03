import React from 'react'
import HourMarkers from './HourMarkers'
import MovieBlock from './MovieBlock'
import { HOUR_WIDTH, TIMELINE_WIDTH, TOTAL_HOURS } from '../utils/utils'

const Timeline = (props) => {
    const { schedule, scheduleIdx, isLast, title, showCard, setShowCard} = props
    return (
        <div key={scheduleIdx} className="relative flex items-center justify-center text-center bg-slate-900 w-fit " 
        >
            {/* children are Room name or Date as name - sticky left column  */}
            {/* Room name - sticky left column */}
            <div className="flex justify-center text-center items-center w-8 h-28
                                    sticky left-0 z-10  ">
                                    <div className='flex flex-col items-center justify-center bg-slate-900 w-8 h-28  shadow-xl shadow-slate-950'>
                                        <p className="transform -rotate-90 -translate-x-0.5  text-white  text-sm text-nowrap ">
                                            {/* could be "Saal Spielberg" or "2024-12-18" */}
                                            {title}
                                        </p>
                                    </div>

                                </div>
            {/* Timeline container - now with fixed width */}
            <div className={"relative h-28 bg-slate-900 ml-7" + (isLast ? "" : " border-b-2 border-slate-700")}
                style={{
                    width: TIMELINE_WIDTH,
                    minWidth: TIMELINE_WIDTH,
                }}
            >
                {/* Generate hour markers */}
                <HourMarkers HOUR_WIDTH={HOUR_WIDTH} TOTAL_HOURS={TOTAL_HOURS} />
                {/* MovieBlocks for this room */}
                {schedule.showings.map((show, showIdx) => (
                    <MovieBlock key={showIdx}
                                show={show}
                                showIdx={showIdx}
                                showCard={showCard}
                                setShowCard={setShowCard}
                                
                         />
                ))}
            </div>
        </div>
    )
}

export default Timeline