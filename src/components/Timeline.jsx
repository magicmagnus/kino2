import React from "react";
import HourMarkers from "./HourMarkers";
import MovieBlock from "./MovieBlock";
import { TIMELINE_WIDTH } from "../utils/utils";
import TimeIndicator from "./TimeIndicator";

const Timeline = (props) => {
    const {
        schedule,
        scheduleIdx,
        isLast,
        title,
        showCard,
        setShowCard,
        date,
    } = props;
    return (
        <div
            key={scheduleIdx}
            className="relative flex w-fit items-center justify-center bg-zinc-900 text-center"
        >
            {/* children are Room name or Date as name - sticky left column  */}
            {/* Room name - sticky left column */}
            <div className="sticky left-0 z-10 flex h-28 w-8 items-center justify-center text-center">
                <div
                    className={
                        "flex h-28 w-8 flex-col items-center justify-center bg-zinc-800 shadow-xl shadow-zinc-950" +
                        (isLast ? "" : " border-b-2 border-zinc-700")
                    }
                >
                    <p className="-translate-x-0.5 -rotate-90 transform text-nowrap text-xs text-white">
                        {/* could be "Saal Spielberg" or "2024-12-18" */}
                        {title}
                    </p>
                </div>
            </div>
            {/* Timeline container - now with fixed width */}
            <div
                className={
                    "relative ml-7 h-28 bg-zinc-900" +
                    (isLast ? "" : " border-b-2 border-zinc-700")
                }
                style={{
                    width: TIMELINE_WIDTH,
                    minWidth: TIMELINE_WIDTH,
                }}
            >
                {/* Generate hour markers */}
                <HourMarkers />
                {/* Time indicator */}
                <TimeIndicator date={date} />
                {/* MovieBlocks for this room */}
                {schedule.showings.map((show, showIdx) => (
                    <MovieBlock
                        key={showIdx}
                        show={show}
                        showIdx={showIdx}
                        setShowCard={setShowCard}
                    />
                ))}
            </div>
        </div>
    );
};

export default Timeline;
