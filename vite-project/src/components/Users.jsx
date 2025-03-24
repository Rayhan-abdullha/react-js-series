import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  
  async function getUser() {
    try {
      setLoading(true)
      const data = await fetch("https://jsonplaceholder.typicode.com/users")
      const res = await data.json()
      setUser(res)
      if (error) {
        setError(false)
      }
    } catch (err) {
      console.log(err)
      setError("something went to wrong")
    } finally {
      setLoading(false)
    }
  }


  if (loading) {
    return <h1>Loading...</h1>
  }



  return (
    <div>
      <button onClick={getUser}>Get Users</button>
      <button onClick={() => setUser([])}>Clear</button>
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