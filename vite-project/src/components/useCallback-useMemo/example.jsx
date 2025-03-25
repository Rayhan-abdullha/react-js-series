import React from 'react'
import { useDataFetch } from './../../hooks/useDataFetch';

const UseMemoExample = () => {
    const { data, loading } = useDataFetch(`https://jsonplaceholder.typicode.com/posts`, 10);
    
    if (loading) return <h1 className='text-2xl'>Posts is Loading...</h1>
    return (
        <div>
            <h1 className='text-2xl my-7 underline text-center'>Posts</h1>
            <ul className='grid sm:grid-cols-2 grid-cols-3 gap-4'>
                {
                    data.map(post => <li className='text-xl border border-gray-400 p-[20px]' key={post.id}>{post.title}</li>)
                }
            </ul>
    </div>
  )
}

export default UseMemoExample