import {Link} from 'react-router-dom'

export default function Footer(){

    return(
        <div>
            <div className="footer_links">
                <Link className="footer_inner" to="https://www.peridance.com/moptop-about.cfm">Program Info</Link>

                <Link className="footer_inner" to="https://www.36chambazofstylz.org/">36 Chambaz of Stylz</Link>

                <Link className="footer_inner" to="https://www.eliteforcecrew.com/">Elite Force Crew</Link>
               

                <Link className="footer_inner" to="https://www.instagram.com/moptopuniversal/">MOPTOP Universal Instagram</Link>

                <Link className="footer_inner" to="https://www.youtube.com/@THEMOPTOPCHANNEL">The MOPTOP Youtube Channel</Link>
                

            </div>
        </div>
    )
}