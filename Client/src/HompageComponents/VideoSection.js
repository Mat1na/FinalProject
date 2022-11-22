import React from 'react'
import { Container } from 'react-bootstrap'
import Video from "../assets/Video/DJI_0010.mp4"
import photo from "../assets/photo/matthew-smith-Rfflri94rs8-unsplash.jpg"

function VideoSection() {
    
    return (

<>
        <div className='video-container'>
            <video src={Video} className="responsive-video" autoPlay loop muted></video>
            <img src={photo} alt="photo" className="photo-video" />
            <div className='overlay-photo'>
                <h1>Something</h1>
                <p>Something else</p>
            </div>
            <div className='overlay'>
                <h1>Something</h1>
                <p>Something else</p>
            </div>
            
                </div>

                
        <div className='photo-container'>
         <img src={photo} alt="photo" className="photo-video" />
        <div className='overlay-photo'>
            <h1>Something</h1>
            <p>Something else</p>
        </div>

        
            </div>
            </>

    )
}

export default VideoSection