import React, {useState, useEffect} from 'react'
import TheKidCard from './TheKidCard'

export default function TheKids(){
    const [kids, setKids] = useState([])
    useEffect(()=>{
        fetch('/api/thekids')
        .then(res=>res.json())
        .then(data=>{
            setKids(data)
        })
        .catch(error=>alert(error))
    },[])

    const mappedKids=kids
    .map(kid=>(
        <TheKidCard 
        kid={kid} 
        key={kid.id}
        name={kid.name}
        profile_img={kid.profile_img}
        ins={kid.ins}
        year={kid.year}
        country={kid.country}
        />
    ))

    return(

        <div>
            {mappedKids}
        </div>
    )
}