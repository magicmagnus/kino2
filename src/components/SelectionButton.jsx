import React from 'react'

const SelectionButton = (props) => {
    const {onClick, selected, text } = props
    return (
        <button
            onClick={onClick}
            className={' text-white h-fit px-3  py-1.5 rounded-full w-fit flex-nowrap flex-shrink-0 text-sm   font-semibold text-center text-nowrap hover:bg-rose-600  transition-all duration-200 ' 
                            + (selected ? '  bg-rose-600' : ' bg-rose-900')}>
            <p>{text}</p>
        </button>
    )
}

export default SelectionButton