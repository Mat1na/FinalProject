import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import LabMembers from "./DashboardComponents/LabMembers";
import Publications from "./DashboardComponents/Publications";
import Projects from "./DashboardComponents/Projects";
import Authors from "./DashboardComponents/Authors";
import Header from './Components/Header';
import Footer from "./Components/Footer";
import CreateLabMembers from './DashboardComponents/CreateLabMembers';
import EditLabMembers from './DashboardComponents/EditLabMembers';
function App() {
    return (

        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/labmembers" element={<LabMembers />} />
                <Route path="/labmembers/create" element={<CreateLabMembers />} />
                <Route path="/labmembers/edit/:member_id" element={<EditLabMembers />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/authors" element={<Authors />} />
            </Routes>
            <Footer />
        </BrowserRouter>

    )
}

export default App