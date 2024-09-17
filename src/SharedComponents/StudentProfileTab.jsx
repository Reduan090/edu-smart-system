import React, { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { FaMoneyBillTransfer, FaTicket } from "react-icons/fa6";
import { MdDashboard, MdSchool } from "react-icons/md";
import { PiExamFill } from "react-icons/pi";
import { BiSolidConversation } from "react-icons/bi";
import dashboard from "../assets/das.jpg"
import profile from "../assets/profile.jpg"
import fees from "../assets/fees.jpg"
import result from "../assets/12 exam result search by admission no1.png"
import stuAttendance from "../assets/stuAttendance.png"
import sms from "../assets/conversation.png"


const StudentProfileTab = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="tabs">
            {/* Tab Buttons */}
            <div className="tab-list studprof-tablist">

                <button
                    className={`tab studprof-tabs ${activeTab === 0 ? 'tab-active' : ''}`}
                    onClick={() => setActiveTab(0)}
                >
                    <MdDashboard size={24} className="icon" />
                    <span className="block">Dashboard</span>
                </button>

                <button
                    className={`tab studprof-tabs ${activeTab === 1 ? 'tab-active' : ''}`}
                    onClick={() => setActiveTab(1)}
                >
                    <FaUserAlt size={24} className="icon" />
                    <span className="block">Edit Profile</span>
                </button>

                <button
                    className={`tab studprof-tabs ${activeTab === 2 ? 'tab-active' : ''}`}
                    onClick={() => setActiveTab(2)}
                >
                    <FaMoneyBillTransfer size={24} className="icon" />
                    <span className="block">Fees</span>
                </button>

                <button
                    className={`tab studprof-tabs ${activeTab === 3 ? 'tab-active' : ''}`}
                    onClick={() => setActiveTab(3)}
                >
                    <MdSchool size={24} className="icon" />
                    <span className="block">Attendance</span>
                </button>

                <button
                    className={`tab studprof-tabs ${activeTab === 4 ? 'tab-active' : ''}`}
                    onClick={() => setActiveTab(4)}
                >
                    <PiExamFill size={24} className="icon" />
                    <span className="block">Exams/Results</span>
                </button>

                <button
                    className={`tab studprof-tabs ${activeTab === 5 ? 'tab-active' : ''}`}
                    onClick={() => setActiveTab(5)}
                >
                    <BiSolidConversation size={24} className="icon" />
                    <span className="block">Conversation</span>
                </button>

                <button
                    className={`tab studprof-tabs ${activeTab === 6 ? 'tab-active' : ''}`}
                    onClick={() => setActiveTab(6)}
                >
                    <FaTicket size={24} className="icon" />
                    <span className="block">Requests</span>
                </button>

            </div>

            {/* Tab Content */}
            <div className="p-4 mt-4">
                {activeTab === 0 && (
                    <div className="tab-content block">
                        <img src={dashboard} alt="" />
                    </div>
                )}
                {activeTab === 1 && (
                    <div className="tab-content block">
                       <img src={profile} alt="" />
                    </div>
                )}
                {activeTab === 2 && (
                    <div className="tab-content block">
                        <img src={fees} alt="" />
                    </div>
                )}
                {activeTab === 3 && (
                    <div className="tab-content block">
                        <img src={stuAttendance} alt="" />
                    </div>
                )}
                {activeTab === 4 && (
                    <div className="tab-content block">
                        <img src={result} alt="" />
                    </div>
                )}
                {activeTab === 5 && (
                    <div className="tab-content block">
                        <img src={sms} alt="" />
                    </div>
                )}
                {activeTab === 6 && (
                    <div className="tab-content block">
                        <h2 className="text-lg font-bold">Content for Tab 7</h2>
                        <p>This is the content for the seventh tab.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StudentProfileTab;