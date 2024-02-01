import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const HostlerDetails = () => {

    const {id} = useParams()

    const[hostlerName,setHostlername] = useState('')
    const[roomNo,setRoomNo] = useState('')
    const[amount,setAmount] = useState('')

    const joinRoom = async() =>{
        const fetchUrl = await fetch("http://localhost:8080/joinroom",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                hostlerName : hostlerName,
                roomNo:roomNo,
                amount:amount,
                date:new Date(),
                userId : id
            })
        })

        if(fetchUrl.ok){
            const result = await fetchUrl.json()
            console.log(result)
        }
    }
  return (
    <div>
      <input type='text' placeholder='Enter Hostler Name'
        onChange={(e) => setHostlername(e.target.value)}
      />
      <input type='text' placeholder='Enter Room Number' 
        onChange={(e) => setRoomNo(e.target.value)}
      />
      <input type='text' placeholder='Amount' 
       onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={joinRoom}>Submit</button>
    </div>
  )
}

export default HostlerDetails
