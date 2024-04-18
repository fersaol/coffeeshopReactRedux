import React from 'react'

function MenuConstructor({data}) {
    // receives data and constructs the table

    let page = document.URL
    let nameField = page.slice(-5).toUpperCase()
  return (
    <>
        <table className='table'>
            <thead>
                <tr>
                    <th>{page.endsWith("/")?"DRINKS":nameField}</th>
                    <th>Size</th>
                    <th>Price (€)</th>
                    <th>Add</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item)=>
                        <tr>
                            <td>{item["name"]["S"]}</td>
                            <td>{nameField !== "BOOKS"?item["size"]["S"]:item["author"]["S"]}</td>
                            <td>{item["price"]["N"]}</td>
                            <td><button className='btn btn-success'>+</button></td>
                            <td><button className='btn btn-danger'>-</button></td>
                        </tr>
                            )
                }

            </tbody>
        </table>
    </>
  )
}

export default MenuConstructor