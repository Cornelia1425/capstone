export default function TheKidCard({ kid, name, profile_img, year, country, ins}){

  
    return(
        <div className='kidCard'>
            <p className='font-semibold text-sm sm:text-xs mb-1'>{name}</p>
            {/* <p className='font-thin text-sm sm:text-xs'>Year: {year}</p> */}
            <p className='font-thin text-sm sm:text-xs mb-2'>Country: {country}</p>
            <div className="clickable_img">
                <a target="_blank" href={ins} key={kid.id}>
                    <img className='kidprofileimg'src={`/images/${profile_img}`} alt={name}/>
                </a>
            </div>

        </div>
       
    )
}