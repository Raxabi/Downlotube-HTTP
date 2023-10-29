import { useState, useEffect } from "react"

function VideoCard() {
    
    const [popularVideos, setPopularVideos] = useState([])
        
    /* useEffect(() => {
        const response = async _ => {const dataFetch = await fetch("http://localhost:5000/")
            dataFetch.json()
                .then(res => setPopularVideos([...popularVideos, res]))
        }
        response()
    }, []) */
    
    return (
        <div>
        </div>
    )
}

export default VideoCard