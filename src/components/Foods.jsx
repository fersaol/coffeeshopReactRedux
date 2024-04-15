import React from 'react'
import MenuConstructor from './MenuConstructor'

const dataFoods = {
  name:"Tortilla de Patatas",
  size:"Large",
  price:15,

}
function Foods() {

  // stores the data in a variable

  // fetchs the data needed for the table construction
  return (
    <>
      <MenuConstructor data={dataFoods}/>
    </>
  )
}

export default Foods