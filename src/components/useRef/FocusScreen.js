import React, { useRef } from 'react'
import '../useEfects/efects.css'

const FocusScreen = () => {

    const inputRef = useRef();
    

    const handleClick = () => {
        inputRef.current.select();
        console.log(inputRef)
    }

  return (
    <div>
        <h3>FocusScreeen</h3>
        <input 
        ref={inputRef}
        name="" 
        placeholder='Su nombre'
        className='form-control'
        
        />
        <button 
        type="" 
        className='btn btn-outline-primary mt-5'
        onClick={handleClick}
        
        >Focus</button>
    </div>
  )
}

export default FocusScreen
