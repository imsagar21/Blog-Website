import React from 'react'
import { useDispatch } from 'react-redux'
import { handleIncrement } from '../../redux/CounterSlice'

const CounterButton = () => {
 const dispatch = useDispatch()
 function handleCount(){
    dispatch(handleIncrement())
 }

  return (
    <div>
      <button onClick={handleCount}>Count</button>
    </div>
  )
}

export default CounterButton
