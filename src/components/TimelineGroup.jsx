import React from 'react'
import Timeline from './Timeline'
import { formatDateString } from '../utils/utils'

const TimelineGroup = (props) => {

    const { groupElement, groupElementIdx, parentGroupType, showCard, setShowCard, date } = props

    let groupedList = [];
    // groupElement is either a room or a date
    if (parentGroupType === "theater") {
        groupedList = groupElement.rooms;
    } else if (parentGroupType === "date") {
        groupedList = groupElement.theaters;

        
    } else if (parentGroupType === "movie") {
        // for movie view, data will be grouped by first date then by room
        groupedList = groupElement.dates;
    }

    return (
        <div key={groupElementIdx}>
            <div className="flex justify-start text-left items-center w-screen h-fit bg-zinc-900
                                sticky left-0 z-10">
                <h1 className=" text-white text-md font-medium pl-2 py-1 text-nowrap bg-zinc-800 w-full mx-0">
                    {/* could be theater name or date name */}
                    {(parentGroupType === "theater") ? (groupElement.name) : (formatDateString(groupElement.date))}
                </h1>
            </div>
            {/* loop over all schedules of the elements */}
            {(parentGroupType === "theater") ? 
                (groupedList.map((schedule, scheduleIdx) => (
                <Timeline key={scheduleIdx}
                    schedule={schedule}
                    scheduleIdx={scheduleIdx}
                    isLast={scheduleIdx === groupedList.length - 1}
                    title={schedule.name}
                    showCard={showCard}
                    setShowCard={setShowCard}
                    date={date}
                />
            ))) : <></>}
            {(parentGroupType === "date") ? 
                (groupedList.map((theater, theaterIdx) => (
                theater.rooms.map((room, roomIdx) => (
                    <Timeline key={roomIdx}
                        schedule={room}
                        scheduleIdx={roomIdx}
                        isLast={roomIdx === theater.rooms.length - 1}
                        title={room.name}
                        showCard={showCard}
                        setShowCard={setShowCard}
                        date={date}
                    />
                ))
            ))) : <></>}
            

        </div>
    )
}

export default TimelineGroup