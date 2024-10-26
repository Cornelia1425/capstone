import React, {useState, useEffect} from 'react'
import {useParams, useLocation} from 'react-router-dom'
import CalendarByTeacher from './CalendarByTeacher'
// import CalendarCard from './CalendarCard'

export default function TeacherPage(){
    const [teacher, setTeacher] = useState({})
    const {id} = useParams()
    const teacherid = id

    const {pathname} = useLocation()
    
    useEffect(()=>{
        window.scrollTo(0,0)

        console.log("fetch classphoto1 now.." )
        fetch(`/api/teachers/${teacherid}`) //yes
        .then(res=>res.json())
        .then(teacher=>setTeacher(teacher))
    },[pathname])

    console.log("fetch classphoto by ID:", teacher)


    const imageUrl = teacher.profile_img;
    console.log("Image URL:", imageUrl); 

    console.log("teacher.dance_classes: ",teacher.dance_classes)
    // console.log("teacher's classes's images': ",teacher.dance_classes.class_img)

   

    const danceclasses_by_teacher = teacher.dance_classes
    console.log("danceclasses_by_teacher: ",danceclasses_by_teacher)

    const showCalendar = false

    return(
        <div className="flex-1 overflow-y-auto p-5 box-border">
            <div className="font-semibold text-2xl text-center mt-16 ">{teacher.name}</div>
           
        
            <img className = "teacher_profile_img" src={`/images/${teacher.profile_img}`} alt={teacher.name}/>

            {showCalendar && <CalendarByTeacher danceclasses_by_teacher={danceclasses_by_teacher}/>
}
            <div className="group_horizontal">
                {teacher.dance_classes && teacher.dance_classes.map((danceClass, index)=>(
                    <img className="class_image"
                        key={index}
                        src={`/images/${danceClass.class_img}`} alt={`${teacher.name}-${danceClass.style}`} />
                ))}
            </div>

            
        </div>
    ) 
}