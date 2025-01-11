import React from "react";
import { HOURS, TODAY_FORMATTED } from "../utils/utils";
import MovieInfo from "../components/MovieInfo";
import TimeIndicator from "../components/TimeIndicator";

const TopSection = (props) => {
    const { children, movieData } = props;

    return (
        <>
            <div className="sticky top-0 z-20 bg-zinc-800">
                <div className="sticky left-0 top-0 z-30 flex w-screen items-center justify-start gap-2 overflow-visible px-2 py-2">
                    {movieData ? (
                        <div className="flex w-full">{children}</div>
                    ) : (
                        <div className="no-scrollbar flex gap-1.5 overflow-auto">
                            {children}
                        </div>
                    )}
                </div>
                {movieData && <MovieInfo movieData={movieData} />}

                {/* Hour markers top*/}
                <div className="flex bg-zinc-900 relative">
                    {/* pad for the corner where the two stickys meet */}
                    <div className="sticky left-0 z-20 flex w-8 flex-shrink-0 items-center justify-center bg-zinc-900 text-center" />
                    <div className="relative flex w-full">
                        {HOURS.map((hour) => (
                            <div
                                key={hour}
                                className="w-28 flex-shrink-0 px-3 py-1 text-left"
                            >
                                <p className="w-fit text-sm text-white">{hour}</p>
                            </div>
                        ))}
                        {/* Height adjusted to match header height */}
                        <div className="absolute inset-0 h-full">
                            <TimeIndicator date={TODAY_FORMATTED} isTop={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopSection;