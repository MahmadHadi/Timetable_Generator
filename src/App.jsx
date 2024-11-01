import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Route pages 
import Dashboard from "./Pages/Dashboard"
import Login from "./Pages/Login"
import Teachers from "./Pages/Teachers"
import Classroom from "./Pages/Classroom"
import Timings from "./Pages/Timings"
import Courses from "./Pages/Courses"
import Departments from "./Pages/Departments"
import Section from "./Pages/Section"
import GenerateTimetable from "./Pages/GenerateTimetable"
import DisplayTimetable from "./Pages/DisplayTimetable"


const App = () => {
  return (
    <div className="px-4 sm:px-[3vw] md:px-[5vw] lg:px-[7vw]"> 
        App 

        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/teacher' element={<Teachers />} />
          <Route path='/classroom' element={<Classroom />} />
          <Route path='/timing' element={<Timings />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/departments' element={<Departments />} />
          <Route path='/section' element={<Section />} />
          <Route path='/generate-timetable' element={<GenerateTimetable />} />
          <Route path='/timetable' element={<DisplayTimetable />} />
        </Routes>
    </div>
  )
}

export default App