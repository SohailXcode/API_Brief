import { useEffect, useState } from "react";
import "./index.css"

function App() {

  // Store users data
  const [users, setUsers] = useState([]);

  // Store search input
  const [search, setSearch] = useState("");

  // Loading state
  const [loading, setLoading] = useState(true);

  // API call
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {

        // Store API data
        setUsers(data);

        // Stop loading
        setLoading(false);

      });

  }, []);

  // Filter users based on search
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div>

      <h1>User Search App</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search User"
        onChange={(e) => setSearch(e.target.value)}
      />

      {
        loading ? (

          <div className="loader"></div>

        ) : (

          // Print Users
          filteredUsers.map((user) => (

            <div key={user.id}>

              <h2>Name: {user.name}</h2>

              <h3>Email: {user.email}</h3>

              <h3>Phone: {user.phone}</h3>

              <hr />

            </div>

          ))

        )
      }

    </div>

  );
}

export default App;