import React from 'react'
import { HOURS } from '../utils/utils'
import MovieInfo from '../components/MovieInfo'

const TopSection = (props) => {

    const { children, movieData } = props

    return (
        <>
            {/* sticky top header */}
            <div className="sticky top-0 z-20 bg-slate-800 ">

                {/* dropdown + MovieInfo, or selection buttons, dynamic per view*/}
                <div className='w-screen sticky top-0 left-0 flex justify-start z-30 items-center gap-2 px-2 py-2 overflow-visible'>
                    {movieData ? (
                        <div className="flex w-full">
                            {children}
                        </div>
                    ) : (

                        <div className='flex overflow-auto gap-1.5  no-scrollbar'>
                            {children}
                        </div>

                    )}
                </div>
                { movieData && <MovieInfo movieData={movieData}/>}



                {/* Hour markers top*/}
                <div className="flex bg-slate-900  ">
                    {/* padd for the corner where the two stickys meet */}
                    <div className='flex justify-center items-center text-center sticky left-0 w-8 flex-shrink-0  bg-slate-900  z-20' />
                    {HOURS.map((hour) => (
                        <div key={hour}
                            className="flex-shrink-0 w-28 px-3 py-1 text-left ">
                            <p className='font-semibold text-white w-fit'>{hour}</p>
                        </div>
                    ))}
                </div>


            </div>
        </>
    )
}

export default TopSection