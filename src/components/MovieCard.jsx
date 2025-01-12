import React, { useState, useEffect } from "react";
import MovieAttributes from "./MovieAttributes";
import { useNavigate } from "react-router-dom";

const MovieCard = (props) => {
    const { showCard, setShowCard } = props;
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation after mount
        setIsVisible(true);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        // Wait for animation to complete before unmounting
        setTimeout(() => setShowCard(null), 200);
    };

    // Add these styles in your CSS or styled-components
    const imageStyles = {
        transition: "opacity 0.3s ease-in-out",
    };

    const placeholderStyles = {
        backgroundColor: "#2c2c2c", // Dark placeholder
        width: "100%",
        height: "100%",
    };

    // Update the image element
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    function openYouTube(videoId) {
        const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
        const appLink = isIOS
            ? `youtube://watch?v=${videoId}` // iOS deep link
            : `intent://www.youtube.com/watch?v=${videoId}#Intent;package=com.google.android.youtube;scheme=https;end;`; // Android intent link

        window.location.href = appLink;
    }

    const navigate = useNavigate();

    const handleAllShowsClick = () => {
        // Navigate immediately (will be hidden behind the modal)
        navigate(`/movie/${showCard.movieInfo.slug}`);

        // Then start the fade out animation
        setIsVisible(false);

        // Finally remove the card from DOM after animation
        setTimeout(() => {
            setShowCard(null);
        }, 200);
    };

    return (
        <button
            onClick={handleClose}
            className={`absolute left-0 top-0 z-40 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.5)] transition-all duration-300 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`absolute left-1/2 top-1/2 h-[95%] w-[90%] max-w-[900px] rounded-3xl bg-zinc-950 text-white shadow-lg transition-all duration-300 ease-in-out sm:h-[90%] sm:max-h-[500px] sm:w-[90%] ${
                    isVisible
                        ? "-translate-x-1/2 -translate-y-1/2 scale-100 opacity-100"
                        : "-translate-x-1/2 -translate-y-[45%] scale-95 opacity-0"
                } cursor-default`}
            >
                {/* Rest of your card content remains the same */}
                <button
                    onClick={handleClose}
                    className="absolute right-0 top-0 z-20 m-2 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 p-4 text-rose-500 transition-all duration-300 ease-in-out hover:scale-[1.2] hover:bg-zinc-700"
                    style={{
                        boxShadow: "0 0 10px 2px rgba(0,0,0,0.5)",
                    }}
                >
                    <i class="fa-solid fa-xmark text-2xl"></i>
                </button>
                <div className="relative flex h-full w-full flex-col justify-start overflow-auto rounded-3xl sm:flex-row">
                    <div className="w-full bg-zinc-800 sm:h-full sm:w-auto">
                        <div className="relative w-full pb-[150%] sm:aspect-[2/3] sm:h-full sm:w-auto sm:pb-0">
                            {!imageLoaded && !imageError && (
                                <div
                                    className="absolute left-0 top-0 h-full w-full bg-zinc-800"
                                    style={placeholderStyles}
                                />
                            )}
                            <img
                                src={showCard.movieInfo.posterUrl.split("?")[0]}
                                style={{
                                    ...imageStyles,
                                    opacity: imageLoaded ? 1 : 0,
                                    display: imageError ? "none" : "block",
                                }}
                                onLoad={() => setImageLoaded(true)}
                                onError={() => setImageError(true)}
                                alt={showCard.movieInfo.title}
                                className="absolute left-0 top-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="mb-4 flex flex-1 flex-col justify-start gap-4 p-4 sm:mb-12 sm:overflow-scroll">
                        <h2 className="text-left text-3xl font-semibold">
                            {showCard.movieInfo.title}
                        </h2>

                        <MovieAttributes
                            duration={showCard.movieInfo.duration.split(" ")[0]}
                            genre={showCard.movieInfo.genre}
                            actors={showCard.movieInfo.actors}
                            attributes={showCard.show.attributes}
                            director={showCard.movieInfo.director}
                            releaseDate={showCard.movieInfo.releaseDate}
                            originalTitle={showCard.movieInfo.originalTitle}
                            production={showCard.movieInfo.production}
                            fsk={showCard.movieInfo.fsk}
                        />

                        <p className="text-left text-sm">
                            {showCard.movieInfo.description
                                .split("<br>")
                                .map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                        </p>
                    </div>
                    <div className="sticky bottom-0 flex h-fit w-full flex-col justify-between gap-2 bg-zinc-800 px-2.5 py-2 shadow-xl shadow-black sm:absolute sm:bottom-0 sm:left-auto sm:right-0 sm:w-fit sm:flex-row sm:gap-2 sm:bg-transparent">
                        <div className="flex h-fit w-full items-center justify-center gap-2 opacity-100">
                            <button
                                onClick={handleAllShowsClick}
                                className="flex flex-1 items-center justify-center gap-1 text-nowrap rounded-full bg-rose-950 p-2 px-2 py-2 text-xs font-semibold text-rose-500 hover:opacity-80"
                            >
                                <i class="fa-solid fa-bars"></i>
                                <p className="pl-0">Alle Vorstellungen</p>
                            </button>

                            <button
                                className="flex flex-1 items-center justify-center gap-1 text-nowrap rounded-full bg-rose-950 p-2 px-2 py-2 text-xs font-semibold text-rose-500 hover:opacity-80"
                                onClick={() =>
                                    openYouTube(showCard.movieInfo.trailerUrl)
                                }
                            >
                                <i class="fa-brands fa-youtube"></i>
                                <p className="pl-0">Trailer</p>
                            </button>
                        </div>

                        <button className="flex-1">
                            <a
                                href={showCard.show.iframeUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex w-full items-center justify-center text-nowrap rounded-full bg-rose-600 px-2 py-2 text-xs font-semibold text-white hover:opacity-80"
                            >
                                <i className="fa-solid fa-ticket"></i>
                                <p className="pl-1">
                                    Tickets für {showCard.show.time}h kaufen
                                </p>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </button>
    );
};

export default MovieCard;
