import React from 'react'
import { useSelector } from 'react-redux'

const CounterValue = () => {
   const value =  useSelector((state)=>state.count.countValue)
   
  return (
    <div>
      Counter value is {value}
    </div>
  )
}

export default CounterValue
