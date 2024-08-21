import { useState } from 'react'
import React from 'react'
import {BrowserRouter} from "react-router-dom"


import './App.css'
import Welcome from './Welcome'
import About from './About'
import Contact from './Contact'
import {Routes, Route, Link} from 'react-router-dom'

function App() {

  // declare state
  const [count, setCount] = useState(0)
  // const [var, setVar] = useState(initialValue)

  const incrementCount = () => {
    setCount(count + 4);
  }

  return (
    <BrowserRouter>
        <div>
          <Welcome name="Lana" age={count} />

          <button onClick={incrementCount}>Press me!</button>
        </div>

        <nav>
          <ul>
            <li><Link to="/about">About</Link> </li>
            <li> <Link to="/contact"> Contact </Link></li>
          </ul>
        </nav>


        <Routes>
          <Route path="/about" element={<About />} /> 
          {/* will match /about and /about/...... */}
          {/* With exact: will only match /about */}
          <Route path="/contact" element={<Contact />}  />
        </Routes>

    </BrowserRouter>
  );
}

export default App

// const [count, setCount] = useState(0)



{/* <>
      
<div>
  


  <a href="https://vitejs.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<h1>Vite + React</h1>
<div>
<Welcome name="Lana" age="12" />
</div>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <p>
    Edit <code>src/App.jsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p>
</> */}