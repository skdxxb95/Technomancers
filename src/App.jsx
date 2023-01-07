import React from 'react'
import Home from './components/Home/Home'
import TeamProfile from './components/TeamProfile/TeamProfile'
import IndustryData from './components/IndustryData/IndustryData'
import './index.css'
import ITWork from './components/ITWork/ITWork'
import ITTechnologies from './components/ITTechnologies/ITTechnologies'
import ProjectIdea from './components/ProjectIdea/ProjectIdea'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path ="/" element={<Home />}></Route>
          <Route path ="/teamprofile" element={<TeamProfile />}></Route>
          <Route path ="/industrydata" element={<IndustryData />}></Route>
          <Route path ="/itwork" element={<ITWork />}></Route>
          <Route path ="/ittechnologies" element={<ITTechnologies />}></Route>
          <Route path ="/projectidea" element={<ProjectIdea />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App