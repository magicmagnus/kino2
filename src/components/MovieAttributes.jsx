import { useState } from "react";
import { containsOmdu } from "../utils/utils";

const MovieAttributes = (props) => {
    const {
        duration,
        genre,
        actors,
        attributes,
        director,
        releaseDate,
        originalTitle,
        production,
        fsk,
    } = props;

    const [isAttributesExpanded, setIsExpanded] = useState(false);

    const isOmdu = containsOmdu(attributes);

    let omduExplainer = "";
    if (isOmdu) {
        if (isOmdu === "OmdU") {
            omduExplainer = (
                <p>
                    OmdU{" "}
                    <span className="text-xs">
                        (Original mit deutschen Untertitlen
                    </span>
                </p>
            );
        } else if (isOmdu === "OmeU") {
            omduExplainer = (
                <p>
                    OmeU{" "}
                    <span className="text-xs">
                        (Original mit englischen Untertitlen
                    </span>
                </p>
            );
        } else if (isOmdu === "OV") {
            omduExplainer = (
                <p>
                    OV{" "}
                    <span className="text-xs">
                        (Original Version ohne Untertitel)
                    </span>
                </p>
            );
        } else {
            omduExplainer = <> </>;
        }
    }

    let hours = Math.floor(duration / 60);
    let minutes = duration % 60;
    let durationText = `${hours}h ${minutes}min`;

    return (
        <>
            <div className="flex flex-col items-start justify-center gap-2 rounded-md bg-zinc-800 px-2 py-2 text-left text-sm">
                {/* Always visible content */}
                <div className="flex items-center gap-2">
                    <i class="fa-solid fa-clock"></i>
                    <p>{durationText}</p>
                </div>
                {genre != "Unknown Genre" ? (
                    <div className="flex items-center gap-2">
                        <i class="fa-solid fa-tags"></i>
                        <p>{genre}</p>
                    </div>
                ) : (
                    <> </>
                )}

                {/* Expandable content wrapper */}
                <div
                    className={`grid transition-all duration-300 ease-in-out ${isAttributesExpanded ? "grid-rows-[1fr]" : "-mt-3 grid-rows-[0fr]"}`}
                >
                    <div className="overflow-hidden">
                        {director != "Unknown Director" && (
                            <div className="flex items-center gap-2">
                                <i className="fa-solid fa-clapperboard"></i>
                                <p>{director}</p>
                            </div>
                        )}
                        {actors.length > 0 && (
                            <div className="flex items-start gap-2 pt-2">
                                <i className="fa-solid fa-user-group pt-1"></i>
                                <p>{actors.join(", ")}</p>
                            </div>
                        )}
                        {releaseDate != "Unknown Release Date" && (
                            <div className="flex items-center gap-2 pt-2">
                                <i class="fa-solid fa-calendar"></i>
                                <p>Erschienen: {releaseDate}</p>
                            </div>
                        )}
                        {originalTitle != "Unknown Original Title" && (
                            <div className="flex items-center gap-2 pt-2">
                                <i class="fa-solid fa-book"></i>
                                <p>Original Titel: "{originalTitle}"</p>
                            </div>
                        )}
                        {production != "Unknown Production" && (
                            <div className="flex items-start gap-2 pt-2">
                                <i class="fa-solid fa-film pt-1"></i>
                                <p>Produktion: {production}</p>
                            </div>
                        )}
                        {fsk != "Unknown" && (
                            <div className="flex items-center gap-2 pt-2">
                                <i class="fa-solid fa-shield"></i>
                                <p>FSK: {fsk}</p>
                            </div>
                        )}
                    </div>
                </div>
                {/* Expand button */}
                <button
                    onClick={() => setIsExpanded(!isAttributesExpanded)}
                    className="flex h-4 w-full items-center justify-center rounded-md"
                >
                    <i
                        className={`fa-solid ${isAttributesExpanded ? "fa-chevron-up" : "fa-chevron-down text-white"} text-base transition-all duration-300 ease-in-out hover:scale-[1.3] hover:text-rose-500`}
                    ></i>
                </button>
            </div>
            {isOmdu && (
                <div className="flex w-fit items-center gap-2 rounded-full bg-rose-700 py-0.5 pl-1.5 pr-2 text-sm font-medium text-rose-200">
                    <i class="fa-solid fa-language"></i>
                    <p className="">{omduExplainer}</p>
                </div>
            )}
        </>
    );
};

export default MovieAttributes;
