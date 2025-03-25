import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export default function Posts() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            return res.data;
        }
    })
    const queryClient = useQueryClient();
    const mutation = useMutation({
      mutationFn: (newPost) => {
        return axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['posts'])
        }
    })
    const createPost = () => {
      mutation.mutate({
        id: 100544,
        title: 'Js Post',
        body: 'JavaScript is a programming language used to create interactive effects within web browsers.',
        userId: 1,
      })
    }
  
    return (
      <div>
        {mutation.isLoading ? (
          'Adding todo...'
        ) : (
          <>
            {mutation.isError ? (
              <div>An error occurred: {mutation.error.message}</div>
            ) : null}
  
            {mutation.isSuccess ? <div>Post added!</div> : null}
  
                        <button
                            className='px-4 py-2 bg-slate-700 text-white cursor-pointer rounded-md'
              onClick={createPost}
            >
              Create Post
            </button>
          </>
            )}
            
        <h1 className='text-2xl my-7 underline text-center'>Posts</h1>
            <ul className='grid sm:grid-cols-2 grid-cols-3 gap-4'>
                {
                    data?.map(post => <li className='text-xl border border-gray-400 p-[20px]' key={post.id}>{post.title}</li>)
                }
            </ul>
      </div>
    )
  }