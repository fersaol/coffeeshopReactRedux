import React from 'react'
import MenuConstructor from './MenuConstructor'

const dataDrinks = {
  name:"Cola",
  size:"Large",
  price:5,

}

function Drinks() {
  return (
    <>
    <MenuConstructor data={dataDrinks}/>
  </>
  )
}

export default Drinks