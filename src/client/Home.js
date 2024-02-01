import React from 'react'
import CreateRoomNumbers from './CreateRoomNumbers'
import HostlerDetails from './HostlerDetails'
import Hostlers from './Hostlers'

const Home = () => {
  return (
    <div>
      <CreateRoomNumbers />
      <HostlerDetails />
      <Hostlers />
    </div>
  )
}

export default Home
