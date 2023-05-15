import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const MoreDetails = () => {
    const {id}=useParams()
    const [user,setUser]=useState()
    const[loading,setLoading]=useState(true)
    useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users/"+id)
    .then((res)=>setUser(res.data))
    .then(()=>setLoading(false))
    }, [])
    console.log(user)
  return (
    <div>{loading ?
        <Spinner animation="border" role="status">
           <span className="visually-hidden">Loading...</span>
         </Spinner>
         :<Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{user.username}</Card.Subtitle>
      <Card.Text>
       {user.email}
      </Card.Text>
      
    </Card.Body>
  </Card>}</div>
  )
}

export default MoreDetails