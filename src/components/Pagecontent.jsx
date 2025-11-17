import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Pagecontent = (props) => {
  return (
    <div className='py-10 flex justify-between h-[90%] gap-10 px-5 '>
      <Leftcontent/>
      <Rightcontent users= {props.users}/>
    </div>
  )
}

export default Pagecontent
