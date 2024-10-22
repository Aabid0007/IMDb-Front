import React from 'react'
import "./MovieBanner.css"
import NextBanner from './NextBanner/NextBanner'
const MovieBanner = () => {
  return (
    <div className='movie_page'>
     <div className='movie_content'>
   
          <img src="https://www.m9.news/wp-content/uploads/2023/10/Bollywood-Manipulation-IMDb.jpg" alt="" />
      
     </div>
      <NextBanner />
    </div>
  )
}

export default MovieBanner