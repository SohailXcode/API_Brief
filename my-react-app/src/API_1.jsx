import { useEffect, useState } from "react";
import "./index.css"

function API_1() {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false)
      });
  }, []);

  return (
    <div>

      <h1>user info</h1>
      { loading ? ( <div className="loader"></div> ) : (
      
      
      users.map((user) => (
        <div key={user.id}>

            <h2>Name: {user.name}</h2>
            <h2>Email: {user.email}</h2>
            <h2>Phone: {user.phone}</h2>

            <hr />
        </div>
      )))}
    </div>
  );
}

export default API_1;
