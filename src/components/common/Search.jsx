import React from 'react'
import "./Search.css"
const Search = () => {
    return (
        <div className='search_box'>
            <button className='details'>All</button>
            <input type="text" placeholder='Search IMDb' />
            <button className='search_btn'>
                <span className="material-symbols-outlined">search</span>
            </button>
        </div>
    )
}

export default Search