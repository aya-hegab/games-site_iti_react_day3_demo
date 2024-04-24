import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LayoutWithHeader from '../components/Layout/LayoutWithHeader'
import Games from '../pages/Games'
import GameDetails from '../pages/GameDetails'
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs'
import AddGame from '../pages/AddGame'
import NotFound from '../pages/NotFound'

export default function Router() {
    return (
        <Routes>
            <Route element={<LayoutWithHeader />}>
                <Route path='' element={<Games />} />
                <Route path='/game-details/:id' element={<GameDetails />} />
            </Route>
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/add-game' element={<AddGame />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}
