import React from 'react'
import useCounter from '../../hooks/useCounter'
import './counter.css'

const CounterWithCustom = () => {

   const { state, increment, decrement,reset} = useCounter(100);
  return (
    <>

      <h1>Counter with Hook: {state}</h1>
      <hr/>

      <button  onClick={ () => increment(2)} className='btn btn-primary bt'>+1</button>
      <button  onClick={ reset} className='btn btn-primary'>RESET</button>
      <button  onClick={() => decrement( 3) } className='btn btn-primary'>-1</button>
    </>
  )
}

export default CounterWithCustom
