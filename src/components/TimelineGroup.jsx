import React from "react";
import Timeline from "./Timeline";
import { formatDateString } from "../utils/utils";

const TimelineGroup = (props) => {
    const {
        groupElement,
        groupElementIdx,
        parentGroupType,
        showCard,
        setShowCard,
        date,
    } = props;

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
            {/* sticky header */}
            <div className="sticky left-0 z-10 flex h-fit w-screen items-center justify-start bg-zinc-950 text-left">
                <h1 className="mx-0 w-fit text-nowrap py-1 pl-2 text-base font-semibold text-white">
                    {/* could be theater name or date name */}
                    {parentGroupType === "theater"
                        ? groupElement.name
                        : formatDateString(groupElement.date)}
                </h1>
            </div>
            {/* loop over all schedules of the elements */}
            {parentGroupType === "theater" ? (
                groupedList.map((schedule, scheduleIdx) => (
                    <Timeline
                        key={scheduleIdx}
                        schedule={schedule}
                        scheduleIdx={scheduleIdx}
                        isLast={scheduleIdx === groupedList.length - 1}
                        title={schedule.name}
                        showCard={showCard}
                        setShowCard={setShowCard}
                        date={date}
                    />
                ))
            ) : (
                <></>
            )}
            {parentGroupType === "date" ? (
                groupedList.map((theater, theaterIdx) =>
                    theater.rooms.map((room, roomIdx) => (
                        <Timeline
                            key={roomIdx}
                            schedule={room}
                            scheduleIdx={roomIdx}
                            isLast={roomIdx === theater.rooms.length - 1}
                            title={room.name}
                            showCard={showCard}
                            setShowCard={setShowCard}
                            date={date}
                        />
                    )),
                )
            ) : (
                <></>
            )}
        </div>
    );
};

export default TimelineGroup;
