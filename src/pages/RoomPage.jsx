import roomViewData from '../data/room-view.json'
import Timeline from '../components/Timeline'
import TopSection from '../components/TopSection'
import SelectionButton from '../components/SelectionButton'
import MovieCard from '../components/MovieCard'
import { useState } from 'react'
import { formatDateString, TIMELINE_WIDTH } from '../utils/utils'



const RoomPage = () => {

    const [selectedRoom, setSelectedRoom] = useState('Saal Spielberg')

    const [ showCard, setShowCard ] = useState(false)

    const roomData = roomViewData.map(theater => ({
        ...theater,
        rooms: theater.rooms.filter(room => room.name === selectedRoom)
    })).filter(theater => theater.rooms.length > 0);
    console.log(roomData)


    return (
        <>
            <div className="relative w-full h-full overflow-y-auto no-scrollbar">
                <div className="relative flex flex-col " style={{
                    width: `${TIMELINE_WIDTH + 28 + 48}px`,
                    minWidth: `${TIMELINE_WIDTH + 28 + 48}px`
                }}>
                    <TopSection >
                        {/* Room buttons for Room View */}
                        {roomViewData
                            .map((theater, theaterIdx) => (
                                theater.rooms.map((room, roomIdx) => (
                                    <SelectionButton
                                        key={roomIdx}
                                        onClick={() => setSelectedRoom(room.name)}
                                        selected={room.name === selectedRoom}
                                        text={room.name} />
                                ))
                            ))}
                    </TopSection>
                    {roomData.map((theater, theaterIdx) => (
                        theater.rooms.map((room, roomIdx) => (
                            room.dates.map((date, dateIdx) => (
                                <Timeline key={dateIdx}
                                    schedule={date}
                                    scheduleIdx={dateIdx}
                                    title={formatDateString(date.date)}
                                    showCard={showCard}
                                    setShowCard={setShowCard}
                                />
                            ))
                        ))
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

export default RoomPage