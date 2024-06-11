import React, {useState, useEffect} from 'react'

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

    const mappedDanceclasses = danceclasses
        .map((danceclass, index)=>(
            <div key={index}>
                <span>{danceclass.weekday}</span>
                <br/>
                <span>{danceclass.teacher.name}</span>
              
                    <li >
                    {danceclass.start_time}-{danceclass.end_time}
                    </li>
            </div>
        ))
 

    return (
        <div>
            {mappedDanceclasses}
          
        </div>
    )
}

   // const mappedDanceclasses = teachers.map(
    //     teacher=>setDanceclasses(
    //     danceclasses=>[...danceclasses,teacher.dance_classes])

    // )

    // console.log("danceclasses array:", danceclasses)
        