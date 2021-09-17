import React, { useState,useEffect } from 'react'
import logo from './logo.svg'
import UserCard from './UserCard'
import './App.css'
import axios from 'axios'
import {Card} from "react-bootstrap"
import UserDetails from "./UserDetails"
import {Route} from 'react-router';
function Home() {
  <Route path="/users" component={UserDetails}></Route>
  const [users,setUsers] = useState([])
  useEffect(async () => {
      const res = await axios.get('users/getAllUsers')
      setUsers(res.data)
    },[]);
  return (
    <div className="App">
      <div className= "grid">
        <div className="container">
            {
              users.map((user,index) =>{
                return(<UserCard key={index} user={user} />)
              })
            }
        </div>
        </div>
    </div>

  )
}

export default Home
