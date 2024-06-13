
export default function BookFunction({classId}){
    const [bookedClasses, setBookedClasses]= useState([])
    

    const bookClass =(classId)=>{
        setBookedClasses([...bookedClasses, classId])
    }
    


    return(
        <div>
            <CalendarCard onBookClass={bookClass}/>
        </div>
    )
}