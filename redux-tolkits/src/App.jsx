import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { increment } from './store/slice/counter'

const App = () => {
  const dispatch = useDispatch()
  const {count} = useSelector((state) => state.counter)
  const handleClick = () => {
    dispatch(increment())
  }
  return (
    <div>
      <h1>Counter: {count}</h1>
      
      <button className='px-4 py-2 bg-slate-700 text-white cursor-pointer rounded-md' onClick={handleClick}>counter</button>
    </div>
  )
}

export default App