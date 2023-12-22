import React from 'react'
import spinner from './spinner.gif'

const Spinner =()=> {
 
    return (
      <div className='text-center'>
        <img className='my-3' src={spinner} alt='Spinner'></img>
      </div>
    )
  
}

export default Spinner
