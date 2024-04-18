function MenuConstructor({data}) {
    // receives data and constructs the table

    let page = document.URL
    let notDrink = page.slice(-5).toUpperCase()
    let nameField = page.endsWith("/")?"DRINKS":notDrink



  return (
    <>
        <table className='table'>
            <thead>
                <tr>
                    <th>{nameField}</th>
                    <th>{nameField === "BOOKS" ? "Author" : nameField === "FOODS" ? "" : "Size"}</th>
                    <th>Price (€)</th>
                    <th>Add</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
            {
                    data.map((item)=>
                        <tr>
                            <td>{nameField === "BOOKS" ? item["title"]["S"] : item["name"]["S"]}</td>
                            <td>{nameField === "DRINKS" ? item["size"]["S"] : nameField === "BOOKS" ? item["author"]["S"] : null}</td>
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


/*


                {
                    data.map((item)=>
                        <tr>
                            <td>{current==="BOOKS"?item["title"]["S"]:item["name"]["S"]}</td>
                            <td>{current==="DRINKS"?item["size"]["S"]:current==="BOOKS"?item["author"]["S"]:null}</td>
                            <td>{item["price"]["N"]}</td>
                            <td><button className='btn btn-success'>+</button></td>
                            <td><button className='btn btn-danger'>-</button></td>
                        </tr>
                            )
                }
*/