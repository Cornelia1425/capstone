import {Link} from 'react-router-dom'

export default function TheKidCard({ kid, name, profile_img, year, country, ins}){

    return(
        <div className='kidCard'>
            <p className='font-semibold text-sm sm:text-xs mb-1'>{name}</p>
            <p className='font-thin text-sm sm:text-xs'>MOPTOP Universal: {year}</p>
            <p className='font-thin text-sm sm:text-xs mb-2'>Country: {country}</p>
            <Link to={ins} key={kid.id}>
                <img className='kidprofileimg'src={`/images/${profile_img}`} alt={name}/>
            </Link>

        </div>
    )
}