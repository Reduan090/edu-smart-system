import React from 'react';
import sms from '../assets/messenger.png'
import { Link } from 'react-router-dom'
import img from '../assets/admin.png'
const AdminCommunication = () => {
    return (
        <>
            <div className="notice-board block col-span-4 custom-shadow bg-white p-6 ">
                <div className="font-semibold text-xl">
                    <h4 className="text-4xl text-[var(--primary-color)] font-bold mb-4">Communications</h4>
                    <ul>

                        <Link to='/talkToStu'><li><a href="#" className="gap-2"><img src={sms} alt="icon" className="h-5 w-5" />Talk to teachers</a></li></Link>

                        <Link to='/talkToStu'><li><a href="#" className="gap-2"><img src={sms} alt="icon" className="h-5 w-5" />Talk to Parents</a></li></Link>
                    </ul>

                    <img className='w-96 h-96' src={img} alt="" />
                </div>
            </div>
        </>
    );
};

export default AdminCommunication;