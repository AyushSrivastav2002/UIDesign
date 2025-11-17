import React from 'react'

const Rightcardcontent = (props) => {
  return (
    
      <div className='h-full w-full top-0 left-0 absolute p-6 flex flex-col justify-between'>
          <h2 className=' font-semi-bold bg-white text-2xl rounded-full h-10 w-10 flex items-center justify-center'>{props.id+1}</h2> 
           <div>
           
            <p className='text-lg text-white mb-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde sequi sit itaque cupiditate. Veritatis.</p>
            <div className=' flex items-center justify-between'> 
                <button style={{backgroundColor:props.color}} className=' px-6 py-2 rounded-full font-medium text-white'>{props.tag}</button>
                <button className=' px-3 py-3 rounded-full '><img className='size-4' src='https://cdn-icons-png.flaticon.com/128/271/271226.png '></img></button>
    </div>
    </div>
    </div>

  )
}

export default Rightcardcontent
