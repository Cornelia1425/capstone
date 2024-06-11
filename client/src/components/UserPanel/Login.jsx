import {useState} from 'react'

export default function Login({setCurrentUser}){

    const [name, setName]=useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        fetch('/api/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'},
            body:JSON.stringify({name, password})
        })
        .then(res=>{
            if(res.ok){
                res.json()
                .then(student=>setCurrentUser(student))
            }else{
                alert('invalid username or password')
            }
        })
    }

    return (
        <div className ="w-full flex justify-center">
              <form className="flex flex-col justify-center bg-slate-300 bg-black w-1/2 p-5 rounded-md" onSubmit={handleSubmit}>
                <h3 className="">Login</h3>
                <input 
                className='bg-lime-500'
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
                value="LOGIN"/>
             </form>
        </div>
    )

}