import React from 'react';
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaTasks, FaUser, FaCog, FaUniversity } from "react-icons/fa";

const TeacherSidebar = () => {
    return (
        <>
            <div className="global-sidebar flex-grow-y w-20 flex flex-col items-center bg-[var(--primary-color)]">
                <div className="p-4">
                    <ul className="menu space-y-6 flex flex-col items-center">
                        {/* Profile Icon at the Top */}
                        <li>
                            <NavLink
                                to="/teacherlogin"
                                className={({ isActive }) =>
                                    isActive ? "p-2 rounded" : "p-2"
                                }
                            >
                                <FaUniversity size={32} className="mt-2 text-white" /> {/* Profile Icon */}
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/profile"
                                className={({ isActive }) =>
                                    isActive ? "p-2 rounded" : "p-2"
                                }
                            >
                                <FaUser size={24} className="text-white" /> {/* Profile Icon */}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    isActive ? "p-2 rounded" : "p-2"
                                }
                            >
                                <FaTachometerAlt size={24} className="text-white" /> {/* Dashboard Icon */}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/assignments"
                                className={({ isActive }) =>
                                    isActive ? "p-2 rounded" : "p-2"
                                }
                            >
                                <FaTasks size={24} className="text-white" /> {/* Assignments Icon */}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/settings"
                                className={({ isActive }) =>
                                    isActive ? "p-2 rounded" : "p-2"
                                }
                            >
                                <FaCog size={24} className="text-white" /> {/* Settings Icon */}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
           
        </>
    );
};

export default TeacherSidebar;