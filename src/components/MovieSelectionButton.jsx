import React from "react";

const MovieSelectionButton = (props) => {
    const { onClick, selected, text, img } = props;
    return (
        <button
            onClick={onClick}
            className={
                "flex h-10 w-44 min-w-32 rounded-lg text-xs font-semibold transition-all duration-200 hover:bg-rose-500 hover:text-rose-50" +
                (selected
                    ? " bg-rose-600 text-rose-50"
                    : " bg-rose-900 text-gray-200")
            }
        >
            <div className="h-10 shrink-0">
                <img
                    className="h-full w-auto rounded-l-lg object-cover"
                    src={img}
                    alt="movie"
                />
            </div>

            <div className="flex flex-col items-start justify-center gap-1.5 overflow-hidden px-1.5 text-left">
                <p className="line-clamp-2 break-words">{text}</p>
            </div>
        </button>
    );
};

export default MovieSelectionButton;
