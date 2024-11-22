import React, {useState, useEffect} from 'react'
// import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
// import { makeStyles } from '@mui/system'
import CalendarCard from './CalendarCard.jsx'

export default function CalendarByTeacher({danceclasses_by_teacher}){

    console.log("teacherdanceclasses_by_teachers in calenderbyTeacher: ", danceclasses_by_teacher)
  
    

    return(
        <div>
        <CalendarCard danceclasses={danceclasses_by_teacher}/>
        </div>
     
    )
}