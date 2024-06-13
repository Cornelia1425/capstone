//this shows all classes the student has booked after they pay
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import CalendarCard from './CalendarCard'

export default function MyAccountBookPage(){
    const [error, setError] = useState(null)
    const [bookedEnrollments, setBookedEnrollments] = useState([])

    useEffect(()=>{
        fetch('/api/book')
        .then(res=>{
            if (res.ok){
                return res.json()
            }
            else{
                throw new Error ('Somehow failed to fetch booked classes!!')
            }
        })
        .then((data)=>{
            console.log("Fetched data: ", data)
            setBookedEnrollments(data)
        })
        .catch(error=>{
            setError(error.message)
        })
    },[])

    console.log ("bookedClasses: ", bookedEnrollments)

    // const danceclasses = [...new Set(bookedEnrollments.map(
    //         enrollment => enrollment.dance_class
    //     ))]

    const danceclasses = bookedEnrollments.map(enrollment => enrollment.dance_class)
   

    return(
        <div>
            <h1>This is MyAccountBookPage.jsx</h1>
            <CalendarCard danceclasses={danceclasses}/>
        </div>
    )
}