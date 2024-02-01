import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Hostlers.css"
import HostlerCard from './HostlerCard'

const Hostlers = () => {

    const {id} = useParams()

    const[hostlers,setHostlers] = useState([])
    const [fetched, setFetched] = useState(false);

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
            const result = await fetchUrl.json()
            console.log(result)
        }
      }

    useEffect(() => {
        getHostlers()
    },[fetched])

  return (
    <div>
      <div className='head'>
        <p>Name</p>
        <p>Room No</p>
        <p>Amount</p>
        <p>Date</p>
      </div>
      <div>
        {
            hostlers.length > 0 ?
            <div>
                {
                    hostlers.map((value,index) => (
                        <div key={value.id}>
                          <HostlerCard  room={value} key={index}/>
                          <button onClick={() => deleteBtn(value)}>Delete</button>
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
