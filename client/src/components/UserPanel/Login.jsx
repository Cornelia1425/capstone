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
        <div>
              <form className="ph_loginform" onSubmit={handleSubmit}>
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
                value="LOGIN"/>
             </form>
        </div>
    )

}