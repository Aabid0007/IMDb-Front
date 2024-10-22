import React from 'react'
import "./MainLayout.css"
import MovieBanner from '../MovieBanner/MovieBanner'
const MainLayout = () => {
  return (
    <div className='MainPage'>
      <div className='container'>
        <div className='movie_main_section'>
          <MovieBanner />
         
        </div>
      </div>
    </div>
  )
}

export default MainLayout