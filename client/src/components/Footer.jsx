import {Link} from 'react-router-dom'

export default function Footer(){

    return(
        <div>
            <div className="footer_links" >
                <a target="_blank" className="footer_inner" href="https://www.peridance.com/moptop-about.cfm">
                <img className="footer_logo" src="/images/peridance_logo_white.png" alt="peridance" />
                </a>

                <a target="_blank" className="footer_inner" href="https://www.36chambazofstylz.org/">
                <img className="footer_logo" src="/images/chambaz_logo1.png" alt="36 Chambaz of Stylz"/></a>

                <a target="_blank" className="footer_inner" href="https://www.eliteforcecrew.com/">
                <img className="footer_logo" src="/images/efc_logo.png" alt="Elite Force Crew" />
                </a>

                <a target="_blank" className="footer_inner" href="https://www.instagram.com/moptopuniversal/">
                <img className="footer_logo" src="/images/ins_logo_white.png" alt="MOPTOP Universal Instagram" />
                </a>

                <a target="_blank" className="footer_inner" href="https://www.youtube.com/@THEMOPTOPCHANNEL">
                <img className="footer_logo" src="/images/youtube_logo_white.png" alt="The MOPTOP Youtube Channel" />
                </a>

                

            </div>
        </div>
    )
}