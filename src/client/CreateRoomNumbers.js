import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Hostlers.css"
import { Button } from 'react-bootstrap'

const CreateRoomNumbers = () => {
    const {id} = useParams()
   // console.log(id)

    const[roomNo,setRoomNo] = useState('')
    const[flashMessage,setFlashMessage] = useState("")

    const flashMessages = (message) => {
        setFlashMessage(message)
        setTimeout(() => {
            setFlashMessage('')
        },2000)
    }

    const createRoom = async() => {
        const fetchUrl = await fetch("http://localhost:8080/createroom/" + id,{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                roomNumber:roomNo
            })
        })
        if(fetchUrl.ok){
            const result = await fetchUrl.json()
            console.log(result)
            if(result.result === false){
                flashMessages("Room Number already Exists")
            }
            else{
                flashMessages("Room Created")
            }
        }
        setRoomNo('')
    }
  return (
    <div className='create-room'>
        <p>{flashMessage}</p>
      <input type='text' placeholder='Enter Your Number'
       name={roomNo}
       className='textBox'
       onChange={(e) => setRoomNo(e.target.value)}
      />
      <Button variant="success">Create Room</Button>{' '}
    </div>
  )
}

export default CreateRoomNumbers
