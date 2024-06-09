import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

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

    return(
        <div>
            <h1>This is TeacherPage.jsx</h1>
            <img className = "teacher_profile_img" src={`/images/${teacher.profile_img}`} alt={teacher.name}/>
        </div>
    ) 
}