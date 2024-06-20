import React, { useState, useEffect } from 'react';
import CalendarCard from './CalendarCard';

export default function MyAccountBookPage() {
    const [error, setError] = useState(null);
    const [bookedEnrollments, setBookedEnrollments] = useState([]);

    // Fetch booked enrollments when the component mounts
    useEffect(() => {
        fetch('/api/book')
            .then(response => response.json())
            .then(data => setBookedEnrollments(data))
            .catch(error => console.error('Error fetching enrolled classes:', error));
    }, []);

    console.log("bookedEnrollments: ", bookedEnrollments);

    // Function to handle cancellation of a dance class
    function handleCancel(danceclassId) {
        fetch(`/api/book/${danceclassId}`, {
            method: 'DELETE',
        })
        .then(res => {
            if (res.ok) {
                // Update state to remove canceled enrollment
                setBookedEnrollments(prevEnrolls => prevEnrolls.filter(enrollment => enrollment.dance_class_id !== danceclassId));
                // alert('Class successfully cancelled!')
            } else {
                throw new Error('Failed to delete Enroll');
            }
        })
        .catch(error => {
            setError(error.message);
        });
    }

    // Extract dance classes from booked enrollments
    const danceclasses = bookedEnrollments.map(enrollment => enrollment.dance_class);
    console.log("danceclasses mybook: ", danceclasses);

    return (
        <div>
           
            {/* Pass dance classes and cancel function to CalendarCard component */}
            <CalendarCard danceclasses={danceclasses} onCancel={handleCancel} />
        </div>
    );
}