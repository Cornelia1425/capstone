import {useState} from 'react'

export default function Signup({setCurrentUser}){

    const[name, setName] = useState('')
    const [password, setPassword] = useState('')
    

    function handleSubmit (e){
        e.preventDefault()
        fetch('/api/users',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept': 'application/json'},
                body:JSON.stringify({name, password}) //align this with backend!!!!
            })
            .then(response=>{
                if(response.ok){
                    response.json()
                    .then(newUser=>setCurrentUser(newUser))
                }else{
                    alert("Signup unseccessful!!")
                }
            })
        }



    return(
        <div className ="w-full flex justify-center">
            <form className="flex flex-col justify-center bg-slate-1000 bg-black w-1/2 p-5 rounded-md mt-4" onSubmit={handleSubmit}>
                <h3 className="mb-2 text-center">New Here?</h3> 
                <input 
                  className='bg-red-950 rounded-md input1 mb-2 placeholder-center text-center'
                type='text'
                onChange={e=>setName(e.target.value)}
                value={name}
                placeholder='Your Name Here'
                /> 

                <input
                  className='bg-red-950 rounded-md input1 placeholder-center text-center'
                type='text'
                onChange={e=>setPassword(e.target.value)}
                value={password}
                placeholder='password'
                />

                <input
                type="submit"
                value="SIGNUP"/>

            </form>
        </div>
    )
}