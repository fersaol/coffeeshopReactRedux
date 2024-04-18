import React from 'react'

function Cart() {
  return (
    <>
        <h1>Cart</h1>
        <table className='table w-50'>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Cola</td>
                    <td>1</td>
                    <td>5</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>Tortilla de Patatas</td>
                    <td>2</td>
                    <td>15</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td>El Quijote</td>
                    <td>1</td>
                    <td>35</td>
                    <td>35</td>
                </tr>
            </tbody>
        </table>

    </>
  )
}

export default Cart