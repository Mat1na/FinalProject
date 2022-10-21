import React from 'react'
import {Routes,Route,BrowserRouter} from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard/Dashboard";
import LabMembers from "./Dashboard/LabMembers";
import Publications from "./Dashboard/Publications";
import Projects from "./Dashboard/Project";
import Authors from "./Dashboard/Authors";
import Header from './Components/Header';
import Footer from "./Components/Footer";
function App() {
  return (
    
        <BrowserRouter>
    <Header/>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/dashboard" element={<Dashboard/>}>
        <Route path="/labmembers" element={<LabMembers/>} />        <Route path="/publications" element={<Publications />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/authors" element={<Authors />} />
      </Route>
    </Routes>
    <Footer />
  </BrowserRouter>
   
  )
}

export default App