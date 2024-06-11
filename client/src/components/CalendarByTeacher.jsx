import React, {useState, useEffect} from 'react'

export default function CalendarByTeacher({danceclasses_by_teacher}){


    console.log("teacherdanceclasses_by_teachers in calenderbyTeacher: ", danceclasses_by_teacher)


    const mappedTime = danceclasses_by_teacher &&danceclasses_by_teacher.map((danceClass, index)=>(

        <div key={index}>
            <div>{danceClass.weekday}</div>
           
            <li >
                {danceClass.start_time}-{danceClass.end_time}
            </li>

        </div>
    )
    
    )

    return(
        <div>
               
                {mappedTime}
        </div>
    )
}