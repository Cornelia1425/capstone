
export default function BookFunction({classId}){

    return fetch('/api/book',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body:JSON.stringify({
            dance_class_id:classId
        })
    })
    .then(res=> {
        console.log('Response status:', res.status)
        return res.json().then(data=>{
            console.log('Response data:', data)
            // return data
            if(res.ok){
                alert('Successfully added to book page!')
            }else{
                if (data.error==='You are already enrolled in this class'){
                    alert('You are already enrolled in this class')
                } else {
                alert(data.error || 'Somehow failed to add to book page!!')
                }
            }
        })})
    .catch(error=>{
        console.error('Failed to add to book page: ', error)
        alert('Failed to add to book page!!')
    })
}
