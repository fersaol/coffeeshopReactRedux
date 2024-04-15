import React from 'react'
import MenuConstructor from './MenuConstructor'

const dataBooks = {
  name:"El Quijote",
  size:"Cervantes",
  price:25,

}

function Books() {
  return (
    <>
    <MenuConstructor data={dataBooks}/>
  </>
  )
}

export default Books