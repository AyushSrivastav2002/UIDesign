import React from 'react'
import Navbar from './Navbar'
import Pagecontent from './Pagecontent'


const Page1 = (props) => {
  return (
    <div className='h-screen w-full '>
        <Navbar/>
        <Pagecontent users={props.users}/>
        
      
  
         
      
    </div>
  )
}

export default Page1
