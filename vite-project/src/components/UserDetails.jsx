import React from 'react'
import {  useParams } from 'react-router-dom'
import { useDataFetch } from '../hooks/useDataFetch'

const UserDetails = () => {
  const params = useParams();
    const {data, loading, error} = useDataFetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    if (loading) {
      return <h1>Loading...</h1>
    }
  return (
    <div>
      {
        error && <h1>{error}</h1>
      }
      <h2>{data.name}</h2>
      <p>{data.email}</p>
      <p>{data.phone}</p>
      <p>{data.website}</p>
    </div>
  )
}

export default UserDetails