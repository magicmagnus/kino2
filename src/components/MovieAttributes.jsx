import { useState } from 'react'

const MovieAttributes = (props) => {

    const { duration, genre, actors, attributes, director, releaseDate,
        originalTitle, fsk
     } = props

    const [isAttributesExpanded, setIsExpanded] = useState(false)

    const isOmdu = attributes.includes('OmdU') ? 'OmdU' : attributes.includes('OmeU') ? 'OmeU' : attributes.includes('OV') ? 'OV' : null

    let omduExplainer = ''
    if (isOmdu) {
        if (isOmdu === 'OmdU') {
            omduExplainer = ' (Original mit deutschen Untertiteln)'
        } else if (isOmdu === 'OmeU') {
            omduExplainer = ' (Original mit englischen Untertiteln)'
        } else if (isOmdu === 'OV') {
            omduExplainer = ' (Original Version)'
        } else {
            omduExplainer = ''
        }
    }


    let hours = Math.floor(duration / 60)
    let minutes = duration % 60
    let durationText = `${hours}h ${minutes}min`

    return (
        <div className="flex flex-col justify-center items-start text-left text-sm gap-2 bg-zinc-800 px-2 py-2 rounded-md">
            
            {/* Always visible content */}
            <div className='flex items-center gap-2'>
                <i class="fa-solid fa-clock"></i>
                <p >
                    {durationText}
                </p>
            </div>

            {(genre != "Unknown Genre") ? (
                <div className="flex items-center gap-2">
                    <i class="fa-solid fa-tags"></i>
                    <p>
                        {genre}
                    </p>
                </div>
            ) : <> </>}

            {isOmdu && (
                <div className=" flex items-center gap-2 bg-rose-600 text-white rounded-full pl-1.5 pr-2 py-0.5 ml-[-0.2rem] w-fit">
                    <i class="fa-solid fa-language"></i>
                    <p className=''>
                        {isOmdu + omduExplainer}
                    </p>
                </div>
            )}

            {/* Expandable content wrapper */}
            <div className={`grid  transition-all duration-300 ease-in-out ${isAttributesExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] -mt-3'}`}>
                <div className="overflow-hidden">
                    
                    {director != "Unknown Director" && (
                        <div className='flex items-center gap-2'>
                            <i className="fa-solid fa-clapperboard"></i>
                            <p>{director}</p>
                        </div>
                    )}
                    
                    {actors.length > 0 && (
                        <div className='flex items-start gap-2 pt-2'>
                            <i className="fa-solid fa-user-group pt-1 "></i>
                            <p>{actors.join(', ')}</p>
                        </div>
                    )}

                    {releaseDate != "Unknown Release Date" && (
                        <div className='flex items-center gap-2 pt-2'>
                            <i class="fa-solid fa-calendar"></i>
                            <p>Erschienen: {releaseDate}</p>
                        </div>
                    )}

                    {originalTitle != "Unknown Original Title" && (
                        <div className='flex items-center gap-2 pt-2'>
                            <i class="fa-solid fa-book"></i>
                            <p>Original Titel: "{originalTitle}"</p>
                        </div>
                    )}

                    {fsk != "Unknown FSK" && (
                        <div className='flex items-center gap-2 pt-2'>
                            <i class="fa-solid fa-shield"></i>
                            <p>FSK: {fsk}</p>
                        </div>
                    )}

                </div>
            </div>


            {/* Expand button */}
            <button
                onClick={() => setIsExpanded(!isAttributesExpanded)}
                className='flex justify-center items-center rounded-md w-full h-4'
            >
                <i className={`
                fa-solid ${isAttributesExpanded ? 'fa-chevron-up ' : 'fa-chevron-down text-white'} 
                text-base transition-all duration-300 ease-in-out hover:scale-[1.3] hover:text-rose-500
                `}
                ></i>
            </button>

        </div>
    )
}

export default MovieAttributes