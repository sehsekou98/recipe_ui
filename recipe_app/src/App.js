import './App.css'

import React from 'react'
import Header from './component/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landing_page/LandingPage'
import ListingPage from './pages/listing_page/ListingPage'
import DetailsPage from './pages/details_page/DetailsPage'
import FooterSection from './component/FooterSection'
import AddRecipe from './pages/AddRecipePage/AddRecipe'

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="listing" element={<ListingPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
        </Routes>
      </div>

      <FooterSection />
    </Router>
  )
}

export default App
