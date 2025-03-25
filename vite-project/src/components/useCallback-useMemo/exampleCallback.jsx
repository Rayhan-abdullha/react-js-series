import React, { useCallback, useState } from 'react'
import Count from './useMemo'

const ExampleUseCallback = () => {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);
    const handleClick = (props = "") => {
        console.log(props)
        if (props === 'count1') {
            setCountOne(prev => prev + 1)
        }
        else if (props === 'count2') {
            setCountTwo(prev => prev + 1)
        }
        else alert("Provide a valid input")
    }
    const callBack = useCallback(handleClick, [])
  return (
      <div className='flex flex-col gap-4 items-center mt-5'>
         <Count direction={'count1'} count={countOne} handleCount={callBack}/>
         <Count direction={'count2'} count={countTwo} handleCount={callBack}/>
    </div>
  )
}

export default ExampleUseCallback