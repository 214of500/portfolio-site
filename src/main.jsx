import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "@fontsource/inter/index.css";
import '@fortawesome/fontawesome-free/css/all.css';


import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import CaseStudies from './pages/CaseStudies'
import Tooling from './pages/Tooling'
import Experience from './pages/Experience'
import Consulting from './pages/Recruiters'
import Contact from './pages/Contact'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="CaseStudies" element={<CaseStudies />} />
          <Route path="tooling" element={<Tooling />} />
          <Route path="experience" element={<Experience />} />
          <Route path="recruiters" element={<Consulting />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
