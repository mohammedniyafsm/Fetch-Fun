import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [user,setUser] =useState()
 

useEffect(()=>{
  const samp = async ()=>{
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let main =await  response.json();
    setUser(main);
    console.log("data ",main)
  }
  samp();
},[])

  return (
    <>
    <Pass data={user} />
    
    </>
  )
}

export default App


import React from 'react'

export const Pass = ({data}) => {


  return (
    <>
     {data && data.map((s =>(
      <div key={s.id}>
      <h1>{s.name}</h1>
      <h1>{s.username}</h1>
      <h1>{s.email}</h1>
      <h1>{s.address.street}</h1>
      <h1>{s.phone}</h1>
      <h1>{s.website}</h1>
      </div>
     )))}
    
    </>
  )
}


