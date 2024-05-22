import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Partials/Navbar'
import Home from './Home'
import Footer from './Partials/Footer'

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='' element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
