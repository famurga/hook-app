import React, { useState } from 'react'

const useCounter = (initialState = 10) => {
 const [counter, setCounter] = useState(initialState)

 const increment=  () =>{
     setCounter(counter+1);
 }

 const decrement=  (factor) =>{
     setCounter(counter-factor);
 }
 const reset=  (factor) =>{
     setCounter(initialState);
 }

 return {
    counter,
     increment,
     decrement,
     reset
 }
}

export default useCounter
