import React from 'react'
import "./NextBanner.css"
const NextBanner = () => {
    return (
        <div className='next_movie_banner'>
            <div className='next_movie'>
                <div className='next_movie_heading'>
                    <h3>Up next</h3></div>
                <div className='next_movie_content'>
                    <img src="https://imgs.search.brave.com/MxVbmb-dmco55ujg7OfFef98FALyfICfMcTmPVr_WlU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MTY1MzA5NDAzNTUt/MzUxZmFiZDk1MjRi/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRWOGZH/MXZkbWxsZkdWdWZE/QjhmREI4Zkh3dw.jpeg" alt="" />
                    <div>
                        <span class="material-symbols-outlined">
                            play_circle
                        </span>
                        <h4>"Latest movie"</h4>
                        <a href=''>Watch the Trailer</a>
                    </div>
                </div>
                <div className='next_movie_content'>
                    <img src="https://imgs.search.brave.com/MxVbmb-dmco55ujg7OfFef98FALyfICfMcTmPVr_WlU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MTY1MzA5NDAzNTUt/MzUxZmFiZDk1MjRi/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRWOGZH/MXZkbWxsZkdWdWZE/QjhmREI4Zkh3dw.jpeg" alt="" />
                    <div>
                        <span class="material-symbols-outlined">
                            play_circle
                        </span>
                        <h4>"Latest movie"</h4>
                        <a href=''>Watch the Trailer</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NextBanner