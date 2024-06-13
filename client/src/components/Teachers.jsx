import React, {useState, useEffect} from 'react'
import TeacherCard from './TeacherCard'



export default function Teachers(){

    const URL = '/api/teachers'
    const [teachers, setTeachers] = useState([])
    useEffect(()=>{
        fetch(URL)
        .then(res=>res.json())
        .then(data=>{
            console.log("Teachers from API: ", data)
            setTeachers(data)
        })
        .catch(error=>alert(error))
    },[])

    const mappedTeachers = teachers
            // .filter(user=> user.role === "teacher"), already did it in backend
            .map(user=>(
            <TeacherCard 
            user={user}
            key={user.id}
            name={user.name}
            profile_img={user.profile_img}
            role={user.role}
            />
            
     
    ))
    console.log("teachers: ", teachers)
    console.log("mappedTeachers: ", mappedTeachers)

    return (
        <div className="flex container">
            {mappedTeachers}
          
        </div>
    )

}