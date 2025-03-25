import { useNavigate } from "react-router-dom";
import { useDataFetch } from "../hooks/useDataFetch";

const Users = () => {
  const {data: user, loading, error} = useDataFetch('https://jsonplaceholder.typicode.com/users', 10);
  const navigate = useNavigate()

  if (loading) {
    return <h1 className='text-2xl'>Loading...</h1>
  }

  return (
    <div>
      <h1>Users: {user.length}</h1>
      {
        (user.length === 0 && !error) && <p style={{color: "red"}}>Empty User</p>
      }
      {
        user.map(item => (
          <div key={item.id} style={{cursor: "pointer"}}>
            <p onClick={() => navigate(`/users/${item.id}`)}>{item.name}</p>
            </div>
          ))
      }
      {
      error && <p style={{color: "red"}}>{error}</p>
      }
    </div>
  )
};
export default Users