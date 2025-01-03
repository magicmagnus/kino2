import React from 'react'

const SelectionButton = (props) => {
    const {onClick, selected, text } = props
    return (
        <button
            onClick={onClick}
            className={' text-white h-fit px-2 py-1 rounded-md w-fit flex-nowrap flex-shrink-0 text-sm text-center text-nowrap hover:bg-indigo-800 transition-all duration-200 ' 
                            + (selected ? '  bg-indigo-800' : ' bg-indigo-600')}>
            <p>{text}</p>
        </button>
    )
}

export default SelectionButton