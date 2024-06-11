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
        <div>
            <form className="ph_signupform" onSubmit={handleSubmit}>
                <input 
                className='input_field'
                type='text'
                onChange={e=>setName(e.target.value)}
                value={name}
                placeholder='Your Name Here'
                /> 

                <input
                className='input_field'
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