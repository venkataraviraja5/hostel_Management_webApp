import React from 'react'
import "./Hostlers.css"

const HostlerCard = ({room,indexno}) => {
const dateString = room.date;
const dateObject = new Date(dateString);

const year = dateObject.getFullYear(); 
const month = dateObject.getMonth() + 1;
const day = dateObject.getDate(); 

  return (
    <div>
      <div className='head'>
      <p>{room.name}</p>
      <p>{room.roomNo}</p>
      <p>{room.amount}</p>
      <p>{day}/{month}/{year}</p>
      
      </div>
      
    </div>
  )
}

export default HostlerCard
