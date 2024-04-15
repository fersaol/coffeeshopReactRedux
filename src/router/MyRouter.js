import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Foods from '../components/Foods'
import Drinks from '../components/Drinks'
import Books from '../components/Books'

function MyRouter() {
  return (
    <>
        
            <nav className='navbar bg-info-subtle'>
                <form className="container-fluid justify-content-start">
                    <Link to="/"><button className="btn btn-outline-success me-2">Drinks</button></Link>
                    <Link to="/foods"><button className="btn btn-outline-success me-2">Foods</button></Link>
                    <Link to="/books"><button className="btn btn-outline-success me-2">Books</button></Link>
                </form>
            </nav>

            <Routes>
                <Route path='/' element={<Drinks />}/>
                <Route path='/foods' element={<Foods />}/>
                <Route path='/books' element={<Books />}/>
                <Route path='/*' element={<Drinks />}/>
            </Routes>
        
    </>
  )
}

export default MyRouter