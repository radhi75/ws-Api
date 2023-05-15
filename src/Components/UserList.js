import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import UserCards from './UserCards';

const UserList = () => {
    const [users,setUsers]=useState()
    const[loading,setLoading]=useState(true)
    useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>setUsers(res.data))
    .then(()=>setLoading(false))
    .catch((error)=>console.log(error))
    }, [])
    console.log(users)
  return (
    <div>{loading ?
 <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
  : users.map((el)=><UserCards key={el.id} el={el}/>)}</div>
  )
}

export default UserList