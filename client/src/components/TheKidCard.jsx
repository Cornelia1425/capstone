import {Link} from 'react-router-dom'

export default function TheKidCard({ kid, name, profile_img, year, country, ins}){

    return(
        <div>
            <p>{name}</p>
            <p>Year: {year}</p>
            <p>Country: {country}</p>
            <Link to={ins} key={kid.id}>
                <img src={`/images/${profile_img}`} alt={name}/>
            </Link>

        </div>
    )
}