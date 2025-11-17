import React from 'react'
import Rightcards from './Rightcards'


const Rightcontent = (props) => {
  
  return (
    <div className='h-full w-2/3 flex gap-5 overflow-x-auto'>
      {props.users.map(function(elem,idx){
        return <Rightcards  key={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color}/>
      })}
     
    </div>
  )
}

export default Rightcontent
