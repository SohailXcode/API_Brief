import { useEffect, useState } from "react";
import "./index.css"

function API_1() {
  const [users, setUser] = useState([]);
  const[search,setSearch] = useState("")

  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        
      });
  }, []);

  const filteredUsers = users.filter((user)=>
    user.name.toLowerCase().includes(search.toLocaleLowerCase())

)

  return (
    <div>

      <h1>user info</h1>
      <input type="text" placeholder="Search User" onChange={(e)=> setSearch(e.target.value)} />
      {
        filteredUsers.map((user)=>(
            <div key={user.id}>

                <h2>{user.name}</h2>

                </div>
        ))
      }
   
    </div>
  );
}

export default API_1;
