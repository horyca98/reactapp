import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import {Button} from "react-bootstrap";
import ModalForm from "./ModalForm";
import "./App.css";
import axios from "axios";

function Home() {
  const [users, setUsers] = useState([]);
  const [modalOpen,setModalOpen] = useState(false)
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
        <ModalForm show = {modalOpen} onHide = {()=>setModalOpen(false)} />
        <Button variant = "primary" onClick={()=>setModalOpen(true)}>Add new User</Button>
        </div>

      </div>
    </div>
  );
}

export default Home;
