import React, { useState } from "react";
import MovieAttributes from "./MovieAttributes";

const MovieInfo = (props) => {
    const { movieData } = props;
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="sticky left-0 top-0 flex w-screen flex-col justify-end bg-zinc-950 text-white">
            <div
                className={`mb-2 flex w-screen overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "h-96" : "h-20"} `}
            >
                <div
                    className={`shrink-0 transition-all duration-500 ease-in-out ${isExpanded ? "h-52" : "h-20"} `}
                >
                    <img
                        src={movieData.posterUrl.split("?")[0]}
                        alt={movieData.title}
                        className="h-full w-auto object-cover"
                    />
                </div>
                <div className="flex flex-grow flex-col gap-2 overflow-auto px-4 py-2">
                    <h1 className="text-xl font-semibold">{movieData.title}</h1>

                    <MovieAttributes
                        duration={movieData.duration.split(" ")[0]}
                        genre={movieData.genre}
                        actors={movieData.actors}
                        attributes={movieData.attributes}
                        director={movieData.director}
                        releaseDate={movieData.releaseDate}
                        originalTitle={movieData.originalTitle}
                        fsk={movieData.fsk}
                    />

                    <p className="text-sm">
                        {movieData.description
                            .split("<br>")
                            .map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                    </p>
                </div>
            </div>

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`relative flex w-full items-center justify-center bg-zinc-950 before:absolute before:bottom-0 before:left-0 before:h-20 before:w-full before:-translate-y-2 before:bg-gradient-to-t before:from-zinc-950 before:to-transparent before:transition-all before:duration-500 before:ease-in-out ${
                    !isExpanded
                        ? "h-0 before:h-20 before:opacity-100"
                        : "h-8 before:h-8 before:opacity-0"
                } `}
            >
                <p
                    className={`rounded-md text-center text-white transition-all duration-500 ease-in-out ${!isExpanded ? "-translate-y-14 bg-opacity-100" : ""} `}
                >
                    <i
                        className={`fa-solid ${isExpanded ? "fa-chevron-up" : "fa-chevron-down"} '} text-3xl text-white transition-all duration-300 ease-in-out hover:scale-[1.3] hover:text-rose-500`}
                    ></i>
                </p>
            </button>
        </div>
    );
};

export default MovieInfo;
