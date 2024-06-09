
import {Link} from 'react-router-dom'

export default function TeacherCard({user, name, profile_img, role}){
    console.log('role: ',role)
    console.log('images url all: ',profile_img )
    return(
        <div>
       
            <div className="teacher_card">
                <h3>{name}</h3>
                <Link to={`/teachers/${user.id}`} key={user.id}>
                    <img className = "teacher_profile_img" src={`/images/${profile_img}`} alt={name} />
                </Link>
            </div>
        </div>
    )
}