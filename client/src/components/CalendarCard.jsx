import React from 'react';
import { useLocation } from 'react-router-dom';

export default function CalendarCard({ danceclasses, onCancel }) {
    const location = useLocation();
    const nameVisible = location.pathname === '/calendar' || location.pathname ==='/book';
    // console.log("location: ", location);

    // cancel button only  showing on student page, not on other pages
    const cancelButtonVisible = location.pathname === '/book'

     // book button not showing on student page
    const bookButtonVisible = location.pathname != '/book'

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
                style:danceClass.style,
                start_time: danceClass.start_time,
                end_time: danceClass.end_time,
                ...(nameVisible && { whoisteaching: danceClass.teacher.name })
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
        .then(res => {
            console.log('res: ', res)
            if (res.ok || res.status===400) {
                return res.json(); // Return the parsed JSON if the response is OK
            } else {
                throw new Error('Failed to add to book page!!') // Throw an error if the response is not OK
            }
        })
        .then(data => {
            console.log('Response data:', data);
            if (data.error) {
                alert(data.error) // Handle other error messages from backend
            } else {
                alert('Successfully added to book page!!');
            }
        })
        .catch(error => {
            console.error('Failed to add to book page: ', error)
            alert('Failed to add to book page!!')
        })
        
    }


    return (
        <div className="overflow-x-auto w-full flex justify-center mb-6 px-4 sm:px-0">
            <div className="w-full max-w-screen-lg overflow-x-auto mx-auto">
                <table className="table-auto border-collapse w-full">
                    <thead>
                        <tr>
                            {/* <th className="px-8 py-3">Time</th> */}
                            {daysOfWeek.map(day => (
                                <th key={day} className="px-2 py-2 sm:px-3 sm:py-2 text-center text-sm sm:text-base">{day}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {timeSlots.map(slot => (
                            <tr key={slot}>
                                {/* <td className="border thin_border px-4 py-2 min-h-[80px] h-[80px] align-bottom ">{slot}</td> */}
                                {daysOfWeek.map(day => (
                                    <td key={day} className="border thin_border h-[40px]  w-[140px] align-bottom px-2 py-2 sm:px-3 sm:py-2 text-center" >
                                        {classesByDayAndTime[day][slot].map((danceClass, index) => {
                                            console.log('classesByDayAndTime[day][slot]', classesByDayAndTime[day][slot]);
                                            console.log('danceClass', danceClass);
                                            return(
                                            <div key={index} className="flex flex-col items-center">
                                                {nameVisible && <span className="font-semibold text-lg sm:text-lg">{danceClass.whoisteaching}</span>}
                                                { <div className='mb-1'>
                                                    <span className="font-semibold text-lg text-base sm:text-lg">{danceClass.style}</span>
                                                </div>}
                                                <div className="text-xs sm:text-sm">
                                                    {danceClass.start_time}-{danceClass.end_time}
                                                </div>
                                                {bookButtonVisible&& 
                                                <button className="border thin_border min-h-[28px] min-w-[56px] rounded mt-1" onClick={()=>handleBookClick(danceClass.id)}>
                                                    Book
                                                </button>}
                                                {cancelButtonVisible &&
                                                <button className="border thin_border min-h-[28px] min-w-[56px] rounded mt-1 text-xs sm:text-sm" onClick={()=>onCancel(danceClass.id)}>
                                                    Cancel
                                                </button>}
                                                
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
        </div>
    );
}