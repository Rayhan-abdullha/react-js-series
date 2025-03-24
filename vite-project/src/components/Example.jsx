import React from 'react'
import { MyContext } from '../context/useContext'

const Example = () => {
    const {state, setState} = MyContext()

  return (
      <div>
          <button onClick={() => setState('dark')}>Dark</button>
          <h1>{state}</h1>
    </div>
  )
}

export default Example