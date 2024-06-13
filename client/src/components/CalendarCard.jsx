import React from 'react';
import { useLocation } from 'react-router-dom';

export default function CalendarCard({ danceclasses, onCancel }) {
    const location = useLocation();
    const isVisible = location.pathname === '/calendar';
    // console.log("location: ", location);

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
                id: danceClass.id,
                start_time: danceClass.start_time,
                end_time: danceClass.end_time,
                ...(isVisible && { whoisteaching: danceClass.teacher.name })
            })
        }
    })

    console.log ("classesByDayAndTime: ", classesByDayAndTime)
    
    


    function handleBookClick(classId){
        console.log("card:classId", classId)
        fetch('/api/book',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({
                dance_class_id: classId
            })
        })
        .then(res=>{
            // console.log('res: ', res)
            if(res.ok){
                return res.json() // do not miss the return
            }else{
                throw new Error ('Somehow failed to add to book page!!')
                // return res.json().then(err => { throw err; })
            }
        })
        .then(data => {
            console.log('Enrollment data:', data);
            // Handle successful response, if needed
            // You can perform additional actions here upon successful enrollment
            alert('Class successfully booked!')
        })
        .catch(error=>{
            console.error('Failed to add to book page: ', error)
            alert('Failed to add to book page!!')
        })
    }


    return (
        <div className="overflow-x-auto w-full flex justify-center mb-6 ">
            <table className="table-auto border-collapse">
                <thead>
                    <tr>
                        {/* <th className="px-8 py-3">Time</th> */}
                        {daysOfWeek.map(day => (
                            <th key={day} className="px-8 py-3">{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {timeSlots.map(slot => (
                        <tr key={slot}>
                            {/* <td className="border thin_border px-4 py-2 min-h-[80px] h-[80px] align-bottom ">{slot}</td> */}
                            {daysOfWeek.map(day => (
                                <td key={day} className="border thin_border px-4 py-2  h-[80px]  w-[140px] align-bottom " >
                                    {classesByDayAndTime[day][slot].map((danceClass, index) => {
                                        console.log('classesByDayAndTime[day][slot]', classesByDayAndTime[day][slot]);
                                        console.log('danceClass', danceClass);
                                        return(
                                        <div key={index} className="">
                                            {isVisible && <span className="font-semibold text-lg">{danceClass.whoisteaching}</span>}
                                            <div>{danceClass.start_time}-{danceClass.end_time}</div>
                                            <button className="border thin_border min-h-[28px] min-w-[56px] rounded mt-1" onClick={()=>handleBookClick(danceClass.id)}>Book</button>
                                        </div>
                                        
                                    )}
                                )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}