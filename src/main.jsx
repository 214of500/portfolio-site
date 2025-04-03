import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "@fontsource/inter/index.css";
import '@fortawesome/fontawesome-free/css/all.css';


import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Competencies from './pages/Competencies'
import Insights from './pages/Insights'
import Consulting from './pages/Consulting'
import Contact from './pages/Contact'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="competencies" element={<Competencies />} />
          <Route path="insights" element={<Insights />} />
          <Route path="consulting" element={<Consulting />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
