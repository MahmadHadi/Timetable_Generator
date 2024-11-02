import React from "react";
import { Route, Routes } from "react-router-dom";

// Route pages
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Teachers from "./Pages/Teachers";
import GenerateTimetable from "./Pages/GenerateTimetable";
import DisplayTimetable from "./Pages/DisplayTimetable";
import Navbar from "./Components/Navbar";
import Exams from "./Pages/Exams";
import Submissions from "./Pages/Submissions";

const App = () => {
    return (
        <div className="px-4 sm:px-[3vw] md:px-[5vw] lg:px-[7vw] text-gray-700">
            <Navbar />
            {/* Routes  */}
            <Routes>
                <Route path="/" element={<DisplayTimetable />} />
                <Route path="/login" element={<Login />} />
                <Route path="/teachers" element={<Teachers />} />
                <Route path="/exams" element={<Exams />} />
                <Route path="/submissions" element={<Submissions />} />

                <Route
                    path="/generate-timetable"
                    element={<GenerateTimetable />}
                />
                <Route path="/timetable" element={<DisplayTimetable />} />
            </Routes>
        </div>
    );
};

export default App;
