import {useLocation} from 'react-router-dom'

export default function BackgroundVideo(){
    const location = useLocation()
    const isHomePage = location.pathname === '/'
  
    return(
        <div>
            <video autoplay loop muted plays-inline className="back_video" onCanPlayThrough={(event) => event.target.play()}>
            <source src='/images/opening_muted.mp4' type="video/mp4"/>Your browser does not support the video tag.
            </video>
            {!isHomePage && <div className="video_filter"></div>}
        </div>
    )
}