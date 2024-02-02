import React from 'react'
import "./Hostlers.css"

const HostlerCard = ({room,indexno}) => {
const dateString = room.date;
const dateObject = new Date(dateString);

const year = dateObject.getFullYear(); 
const month = dateObject.getMonth() + 1;
const day = dateObject.getDate(); 


  return (
    <div className='details-card-page'>
      <div className='details-card'>
      <p>Name:{room.name}</p>
      <p>RoomNo:{room.roomNo}</p>
      <p>Amount:{room.amount}</p>
      <p>Date:{day}/{month}/{year}</p>
      
      </div>
      
    </div>
  )
}

export default HostlerCard
