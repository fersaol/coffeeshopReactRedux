import React, { useEffect, useState } from 'react'
import MenuConstructor from './MenuConstructor'



function Books() {

  // stores the data in a variable
  const [data,setData] = useState([])

  // fetchs the data needed for the table construction
  useEffect(()=>{
    fetch("https://w7liugfeo2.execute-api.eu-west-1.amazonaws.com/dev/books")
    .then(response => response.json())
    .then(data => setData(data))
 },[]);

  return (
    <>
    <MenuConstructor data={data}/>
    {/*<div>In development</div>*/}
  </>
  )
}

export default Books