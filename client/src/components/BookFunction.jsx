
export default function BookFunction(){

    
    function bookClass (classId){
        const [bookedClass, setBookedClass]= useState('')
        setBookedClass(bookedClass)
        fetch('/api/book',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify({
                dance_class_id:classId
            })
        })
        .then(res=>{
            if(res.ok){
                res.json()
            }else{
                alert('Somehow failed to add to book page!!')
            }
        })
        .then(error=>{
            console.error('Failed to add to cart: ', error)
            alert('Failed to add to book page!!')
        })
    }
    

    return(
        <div>
            <CalendarCard onBookClass={bookClass}/>
        </div>
    )
}