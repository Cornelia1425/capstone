import React, {useState, useEffect} from 'react'
import TheKidCard from './TheKidCard'

export default function TheKids(){
    const [kids, setKids] = useState([])
    useEffect(()=>{
        fetch('/api/students')
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

      // Group kids by year
      const groupedKids = kids.reduce((acc, kid) => {
        (acc[kid.year] = acc[kid.year] || []).push(kid);
        return acc;
    }, {});


    return(

        // <div className="flex kidscontainer overflow-y-auto p-1 box-border">
        //     {mappedKids}
        // </div>
        <div className="kidscontainer overflow-y-auto p-1 box-border">
        {Object.keys(groupedKids).map(year => (
            <div key={year} className="year-group mb-4">
                <h2 className="text-xl font-bold">{year}</h2>
                <div className="yearRow">
                    {groupedKids[year].map(kid => (
                        <TheKidCard 
                            kid={kid} 
                            key={kid.id}
                            name={kid.name}
                            profile_img={kid.profile_img}
                            ins={kid.ins}
                            year={kid.year}
                            country={kid.country}
                        />
                    ))}
                </div>
            </div>
        ))}
    </div>

    )
}