import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const CreateRoomNumbers = () => {
    const {id} = useParams()
   // console.log(id)

    const[roomNo,setRoomNo] = useState('')

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
        }
    }
  return (
    <div>
      <input type='text' placeholder='Enter Your Number'
       onChange={(e) => setRoomNo(e.target.value)}
      />
      <button onClick={createRoom}>Create Room</button>
    </div>
  )
}

export default CreateRoomNumbers
