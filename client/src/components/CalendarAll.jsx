import React, {useState, useEffect} from 'react'
import CalendarCard from './CalendarCard'
// import BookFunction from './BookFunction'

export default function CalendarAll(){

    const [danceclasses, setDanceclasses] = useState([]) 
    useEffect(()=>{
        fetch('/api/calendar')
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(data=>{
            console.log("danceclass from API", data)
            setDanceclasses(data)
        }) 
        .catch(error=>alert(error))
    },[])

 

    return (
        <div>
         
            <CalendarCard danceclasses={danceclasses} />
    
          
        </div>
    )
}
