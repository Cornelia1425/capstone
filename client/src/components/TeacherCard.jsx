
import {Link} from 'react-router-dom'

export default function TeacherCard({user, name, profile_img, role}){
    console.log('role: ',role)
    console.log('images url all: ',profile_img )
    return(
        <div>
       
            <div className="teacher_card">
                <span>{name}</span>
                <Link to={`/teachers/${user.id}`} key={user.id}>
                    <img className = "" src={`/images/${profile_img}`} alt={name} />
                </Link>
            </div>
        </div>
    )
}