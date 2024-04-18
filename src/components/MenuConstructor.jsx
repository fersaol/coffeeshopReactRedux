import React from 'react'

function MenuConstructor({data}) {
    // receives data and constructs the table

    let page = document.URL
    
  return (
    <>
        <table className='table'>
            <thead>
                <tr>
                    <th>{page.endsWith("/")?"DRINKS":page.slice(-5).toUpperCase()}</th>
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
                            <td>{item["size"]["S"]}</td>
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