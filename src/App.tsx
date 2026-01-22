import './App.css'
import Work from './components/Work'
import Nav from './components/Nav'
import Top from './components/Top'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

// #f1f1f1
// #e8dcd0
// #d4c0ab
// #c19e77
// #91683c

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const openToggle = () => {
        setMenuOpen(!menuOpen);
    }

  return (
    <>
        <Routes>
          <Route 
            path="/"
            element={
              <>
                <main>
                  <i className="fa-solid fa-bars open-button" onClick={openToggle}></i>
                  <Top />
                </main>
                <Nav openToggle={openToggle} menuOpen={menuOpen} />
              </>
            } />
          <Route 
            path="/work/:id"
            element={
              <Work />
            } />
          </Routes>
    </>
  )
}

export default App
