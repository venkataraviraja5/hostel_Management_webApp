import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./Hostlers.css"
import HostlerCard from './HostlerCard'
import { Button } from 'react-bootstrap'
import HostlerDetails from './HostlerDetails'

const Hostlers = () => {

    const {id} = useParams()

    const[hostlers,setHostlers] = useState([])
    const [fetched, setFetched] = useState(false);
    const[flashMessage,setFlashMessage] = useState("")
    const navigate = useNavigate()

    const flashMessages = (message) => {
        setFlashMessage(message)
        setTimeout(() => {
            setFlashMessage('')
        },2000)
    }

    const getHostlers = async() => {
        const fetchUrl = await fetch("http://localhost:8080/gethostlers/" + id)

        if(fetchUrl.ok){
            const result = await fetchUrl.json()
           // console.log(result.result)
            setHostlers(result.result)
            setFetched(true);
        }
    }

    const deleteBtn = async(value) =>{
        console.log(value.id)
        const fetchUrl = await fetch("http://localhost:8080/delete",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                userId : id,
                roomNo:value.roomNo,
                uuidNo:value.id
            })
        })

        if(fetchUrl.ok){
            flashMessages("deleted")
            const result = await fetchUrl.json()
            console.log(result)
        }
      }


    useEffect(() => {
        getHostlers()
    },[fetched])

  return (
    <div>
      <p>{flashMessage}</p>
      <div>
        {
            hostlers.length > 0 ?
            <div  className='details-card-page'>
                {
                    hostlers.map((value,index) => (
                        <div key={value.id}>
                          <HostlerCard  room={value} key={index}/>
                          <Button variant="danger" onClick={() => deleteBtn(value)}>Delete</Button>
                          <Button variant="primary" >Edit</Button>{' '}
                        </div>
                    ))
                }
            </div>
            :
            <p>NO ITEMS</p>
        }
      </div>
    </div>
  )
}

export default Hostlers
