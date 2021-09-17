import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import "./App.css";
import axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    const res = await axios.get("users/getAllUsers");
    setUsers(res.data);
  }, []);
  return (
    <div className="App">
      <div className="grid">
        <div className="container">
          {users.map((user, index) => {
            return <UserCard key={user.id} user={user} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
