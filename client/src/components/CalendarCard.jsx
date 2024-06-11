import React from 'react'
import {useLocation} from 'react-router-dom'
export default function CalendarCard({danceclasses}){
    // console.log("danceclasses in CalenderCard: ", danceclasses)

    const location = useLocation()

    const isVisible = location.pathname ==='/calendar'
    console.log("location: ", location)

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    const classesByDay={
        Monday:[],
        Tuesday:[],
        Wednesday:[],
        Thursday:[],
        Friday:[],
        Saturday:[],
        Sunday:[]
    }
    

    danceclasses&&danceclasses.forEach(
        danceClass=>{
        classesByDay[danceClass.weekday].push({
            start_time:danceClass.start_time,
            end_time:danceClass.end_time,
            ...(isVisible&&{whoisteaching:danceClass.teacher.name})
        })
    })


    return(
        <div className="overflow-x-auto w-full flex justify-center mb-6">
            <table className="table-auto">
                <thead>
                    <tr>
                        {daysOfWeek.map(day=>(
                            <th key={day} className="px-8 py-3">
                                {day}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {daysOfWeek.map(day=>(
                            <td key={day} className="border px-4 py-2">
                                {classesByDay[day].map((danceClass, index)=>(
                                    <div key={index}>
                                       <span>{danceClass.whoisteaching}</span>
                                        <div>
                                            {danceClass.start_time}-{danceClass.end_time}
                                        </div>
                                    </div>
                                ))} 
                      
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
  
    )
}