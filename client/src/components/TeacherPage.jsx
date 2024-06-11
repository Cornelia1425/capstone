import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import CalendarByTeacher from './CalendarByTeacher'

export default function TeacherPage(){
    const [teacher, setTeacher] = useState({})
    const {id} = useParams()
    const teacherid = id

    useEffect(()=>{
        console.log("fetch classphoto1 now.." )
        fetch(`/api/teachers/${teacherid}`) //yes
        .then(res=>res.json())
        .then(teacher=>setTeacher(teacher))
    },[])

    console.log("fetch classphoto by ID:", teacher)


    const imageUrl = teacher.profile_img;
    console.log("Image URL:", imageUrl); 

    console.log("teacher.dance_classes: ",teacher.dance_classes)
    // console.log("teacher's classes's images': ",teacher.dance_classes.class_img)

    const danceclasses_by_teacher = teacher.dance_classes
    console.log("danceclasses_by_teacher: ",danceclasses_by_teacher)

    return(
        <div>
            {/* <h1>This is TeacherPage.jsx</h1> */}
            <div>{teacher.name}</div>
            <CalendarByTeacher danceclasses_by_teacher={danceclasses_by_teacher}/>
        
            <img className = "teacher_profile_img" src={`/images/${teacher.profile_img}`} alt={teacher.name}/>

            <div className="ph_class_images">
                {teacher.dance_classes && teacher.dance_classes.map((danceClass, index)=>(
                    <img 
                        key={index}
                        src={`/images/${danceClass.class_img}`} alt={`${teacher.name}-${danceClass.style}`} />
                ))}
            </div>

            
        </div>
    ) 
}