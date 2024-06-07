

export default function TeacherCard({name, profile_img, role}){
    console.log('role: ',role)
    return(
        <div>
       
            <div className="teacher_card">
                <h3>{name}</h3>
                <img className = "teacher_profile_img" src={profile_img} alt={name}/>
            </div>
        </div>
    )
}