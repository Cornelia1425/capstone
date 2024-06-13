// import React from 'react'
// import {useLocation} from 'react-router-dom'
// export default function CalendarCard({danceclasses}){
//     // console.log("danceclasses in CalenderCard: ", danceclasses)

//     const location = useLocation()

//     const isVisible = location.pathname ==='/calendar'
//     console.log("location: ", location)

//     const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

//     const classesByDay={
//         Monday:[],
//         Tuesday:[],
//         Wednesday:[],
//         Thursday:[],
//         Friday:[],
//         Saturday:[],
//         Sunday:[]
//     }
    

//     danceclasses&&danceclasses.forEach(
//         danceClass=>{
//         classesByDay[danceClass.weekday].push({
//             start_time:danceClass.start_time,
//             end_time:danceClass.end_time,
//             ...(isVisible&&{whoisteaching:danceClass.teacher.name})
//         })
//     })

    
//     return(
//         <div className="overflow-x-auto w-full flex justify-center mb-6">
//             <table className="table-auto">
//                 <thead>
//                     <tr>
//                         {daysOfWeek.map(day=>(
//                             <th key={day} className="px-8 py-3">
//                                 {day}
//                             </th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         {daysOfWeek.map(day=>(
//                             <td key={day} className="border px-4 py-2">
//                                 {classesByDay[day].map((danceClass, index)=>(
//                                     <div key={index}>
//                                        <span>{danceClass.whoisteaching}</span>
//                                         <div>
//                                             {danceClass.start_time}-{danceClass.end_time}
//                                         </div>
//                                     </div>
//                                 ))} 
                      
//                             </td>
//                         ))}
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
  
//     )
// }

import React from 'react';
import { useLocation } from 'react-router-dom';

export default function CalendarCard({ danceclasses, onBookClass }) {
    const location = useLocation();
    const isVisible = location.pathname === '/calendar';
    console.log("location: ", location);

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    // Create time slots (can be adjusted as needed)
    const timeSlots = [
        '10:00-12:00',
        '12:00-14:00',
        '14:00-16:00',
        '16:00-18:00',
        '18:00-20:00',
        '20:00-22:00'
    ];

    const classesByDayAndTime = {};

    daysOfWeek.forEach(day => {
        classesByDayAndTime[day] = {};
        timeSlots.forEach(slot => {
            classesByDayAndTime[day][slot] = [];
        });
    });

    const getTimeSlot = (start, end) => {
        return `${start}-${end}`;
    };

    danceclasses && danceclasses.forEach(danceClass => {
        const slot = getTimeSlot(danceClass.start_time, danceClass.end_time);
        if (classesByDayAndTime[danceClass.weekday] && classesByDayAndTime[danceClass.weekday][slot]) {
            classesByDayAndTime[danceClass.weekday][slot].push({
                start_time: danceClass.start_time,
                end_time: danceClass.end_time,
                ...(isVisible && { whoisteaching: danceClass.teacher.name })
            })
        }
    })

    function handleBookClick(dance_class_id){
        // console.log("card:classId", classId)
        fetch('/api/book',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({
                dance_class_id: dance_class_id
            })
        })
        .then(res=>{
            // console.log('res: ', res)
            if(res.ok){
                res.json()
            }else{
                alert('Somehow failed to add to book page!!')
            }
        })
        .then(data => {
            console.log('Enrollment data:', data);
            // Handle successful response, if needed
            // You can perform additional actions here upon successful enrollment
        })
        .then(error=>{
            console.error('Failed to add to cart: ', error)
            alert('Failed to add to book page!!')
        })
    }


    return (
        <div className="overflow-x-auto w-full flex justify-center mb-6 ">
            <table className="table-auto border-collapse">
                <thead>
                    <tr>
                        <th className="px-8 py-3">Time</th>
                        {daysOfWeek.map(day => (
                            <th key={day} className="px-8 py-3">{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {timeSlots.map(slot => (
                        <tr key={slot}>
                            <td className="border thin_border px-4 py-2 min-h-[80px] h-[80px] align-bottom ">{slot}</td>
                            {daysOfWeek.map(day => (
                                <td key={day} className="border thin_border px-4 py-2 min-h-[80px] h-[80px] align-bottom " >
                                    {classesByDayAndTime[day][slot].map((danceClass, index) => (
                                        <div key={index} className="">
                                            {isVisible && <span className="font-semibold text-lg">{danceClass.whoisteaching}</span>}
                                            <div>{danceClass.start_time}-{danceClass.end_time}</div>
                                            <button className="border thin_border min-h-[28px] min-w-[56px] rounded mt-1" onClick={()=>handleBookClick(danceClass.id)}>Book</button>
                                        </div>
                                        
                                    ))}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}