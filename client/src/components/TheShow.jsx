import {useLoaderData} from 'react-router-dom'
import {useState} from 'react'

export default function TheShow(){
    const videos = useLoaderData()

    const [videosSearch, setVideosSearch] = useState('')
    const mappedVideos = videos
    .filter(video=>video.name.toLowerCase().includes(videosSearch.toLowerCase()))
    .map(
        video=>{
            return(
                <iframe 
                key={video.id} 
                className="video_frame"
                width="560" 
                height="315" 
                src={video.url} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
                </iframe>
            )
        }
    )
    return(
        <div className=" video_search_container">
            <label className="centered_label">📺 Search Video 📺</label>
            <div>
                <input type='text' className='search_video_input placeholder-center text-center' onChange={e=>setVideosSearch(e.target.value)} value={videosSearch} placeholder='Search Video Here'></input>
            </div>
          
            {mappedVideos}
        </div>
    )
}


   