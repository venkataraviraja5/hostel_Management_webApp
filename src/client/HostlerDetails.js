import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./Hostlers.css"
import { Button } from 'react-bootstrap'

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
    <div className='hostlers-details'>
      <input type='text' placeholder='Enter Hostler Name'
        className='textBox'
        name={hostlerName}
        onChange={(e) => setHostlername(e.target.value)}
      />
      <input type='text' placeholder='Enter Room Number' 
        className='textBox'
        name={roomNo}
        onChange={(e) => setRoomNo(e.target.value)}
      />
      <input type='text' placeholder='Amount' 
       className='textBox'
       name={amount}
       onChange={(e) => setAmount(e.target.value)}
      />
     
      <Button variant="success" onClick={joinRoom}>Enter</Button>{' '}
      
    </div>
  )
}

export default HostlerDetails
