import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import LabMembers from "./DashboardComponents/LabMembers";
import CreateLabMembers from './DashboardComponents/CreateLabMember';
import EditLabMembers from './DashboardComponents/EditLabMember';
import Publications from "./DashboardComponents/Publications";
import CreatePub from './DashboardComponents/CreatePub';
import EditPub from './DashboardComponents/EditPub';
import Projects from "./DashboardComponents/Projects";
import CreateProject from "./DashboardComponents/CreateProject";
import EditProject from "./DashboardComponents/EditProject"
import Authors from "./DashboardComponents/Authors";
import CreateAuthor from "./DashboardComponents/CreateAuthor"
import EditAuthor from "./DashboardComponents/EditAuthor"
import Header from './Components/Header';
import Footer from "./Components/Footer";


function App() {
    return (

        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/labmembers" element={<LabMembers />} />
                <Route path="/labmembers/create-member" element={<CreateLabMembers />} />
                <Route path="/labmembers/editlabmembers/:memberid" element={<EditLabMembers />} />
                <Route path="/publications" element={<Publications />} />
                <Route path="/publications/create-pub" element={<CreatePub/>} />
                <Route path="/publications/editpub/:pubid" element={<EditPub/>} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/create-project" element={<CreateProject />} />
                <Route path="/projects/editproject/:projectid" element={<EditProject/>} />
                <Route path="/authors" element={<Authors />} />
                <Route path="/authors/create-author" element={<CreateAuthor />} />
                <Route path="/authors/author/:authorid" element={<EditAuthor />} />
            </Routes>
            <Footer />
        </BrowserRouter>

    )
}

export default App