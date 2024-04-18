import React, { useEffect, useState } from 'react'
import MenuConstructor from './MenuConstructor'



function Drinks() {

  const [data,setData] = useState([])

  useEffect(()=>{
    fetch("https://w7liugfeo2.execute-api.eu-west-1.amazonaws.com/dev/drinks")
    .then(response => response.json())
    .then(data => setData(data))
 },[]);

  return (
    <>
    <MenuConstructor data={data}/>
    </>
  )
}

export default Drinks