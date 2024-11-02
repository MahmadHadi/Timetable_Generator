import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div className="flex items-center justify-between my-2">
            {/* Left */}
            <NavLink
                to="/"
                className="uppercase font-semibold text-2xl tracking-widest"
            >
                ttg
            </NavLink>
            {/* Mid */}
            <div className="hidden sm:flex gap-4 font-semibold">
                <NavLink
                    className="flex flex-col items-center hover:text-black transition-all"
                    to="/"
                >
                    Timetable
                    <hr className="hidden w-[75%] border-0 outline outline-1 outline-gray-500" />
                </NavLink>
                <NavLink
                    className="flex flex-col items-center hover:text-black transition-all"
                    to="/exams"
                >
                    Exams
                    <hr className="hidden w-[75%] border-0 outline outline-1 outline-gray-500" />
                </NavLink>
                <NavLink
                    className="flex flex-col items-center hover:text-black transition-all"
                    to="/submissions"
                >
                    Submissions
                    <hr className="hidden w-[75%] border-0 outline outline-1 outline-gray-500" />
                </NavLink>
                <NavLink
                    className="flex flex-col items-center hover:text-black transition-all"
                    to="/teachers"
                >
                    Teachers
                    <hr className="hidden w-[75%] border-0 outline outline-1 outline-gray-500" />
                </NavLink>
            </div>
            {/* Right */}
            <div className="flex gap-2">
                <div className="group relative">
                    <img
                        src={assets.icon_user}
                        className="w-5 cursor-pointer"
                        alt=""
                    />

                    <div className="group-hover:block hidden absolute dropdown-menu right-0 top-3 pt-4 z-10">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                            <NavLink
                                to="/profile"
                                className="cursor-pointer hover:text-black"
                            >
                                My Profile
                            </NavLink>

                            <p className="cursor-pointer hover:text-black">
                                Logout
                            </p>
                        </div>
                    </div>
                </div>
                <img
                    src={assets.icon_menubar}
                    className="w-5 cursor-pointer sm:hidden"
                    alt=""
                    onClick={() => setVisible(true)}
                />
            </div>
            {/* Sidebar menu for mobile screen */}
            <div
                className={`bg-white overflow-hidden absolute top-0 right-0 transition-all ${
                    visible ? "w-full" : "w-0"
                }`}
            >
                <div className="flex flex-col">
                    <p
                        className="cursor-pointer border border-b-gray-700 border-t-0 p-3 pl-8 font-semibold text-gray-700"
                        onClick={() => setVisible(false)}
                    >
                        Back
                    </p>

                    <NavLink
                        // className="flex flex-col items-center hover:text-black transition-all"
                        className="cursor-pointer border border-b-gray-700 border-t-0 p-3 pl-8 font-semibold text-gray-700"
                        onClick={() => setVisible(false)}
                        to="/"
                    >
                        Timetable
                    </NavLink>
                    <NavLink
                        // className="flex flex-col items-center hover:text-black transition-all"
                        className="cursor-pointer border border-b-gray-700 border-t-0 p-3 pl-8 font-semibold text-gray-700"
                        onClick={() => setVisible(false)}
                        to="/exams"
                    >
                        Exams
                    </NavLink>
                    <NavLink
                        // className="flex flex-col items-center hover:text-black transition-all"
                        className="cursor-pointer border border-b-gray-700 border-t-0 p-3 pl-8 font-semibold text-gray-700"
                        onClick={() => setVisible(false)}
                        to="/submissions"
                    >
                        Submissions
                    </NavLink>
                    <NavLink
                        // className="flex flex-col items-center hover:text-black transition-all"
                        className="cursor-pointer border border-b-gray-700 border-t-0 p-3 pl-8 font-semibold text-gray-700"
                        onClick={() => setVisible(false)}
                        to="/teachers"
                    >
                        Teachers
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
