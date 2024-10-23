import React from 'react'
import Nave from './Nave'

const Home = () => {
  return (
    <div className='text-5xl text-center pt-10' 
    to="/" >
    <Nave />

      <div className='w-52 h-52 bg-zinc-400'></div>
    </div>
  )
}

export default Home