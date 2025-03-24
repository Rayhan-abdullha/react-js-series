import React from 'react'
import {  useParams } from 'react-router-dom'

const UserDetails = () => {
    const params = useParams()
    // const location = useLocation()
    // console.log(location)
  return (
      <div>
          {
              params.id
          }
    </div>
  )
}

export default UserDetails