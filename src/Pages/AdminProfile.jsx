import React from 'react';
import AdminSidebar from '../SharedComponents/AdminSidebar';
import img from '../assets/30-students-my-profile.png'

const AdminProfile = () => {
    return (
        <>
        <div  className="student-profile-page container mx-auto flex gap-6">
            <AdminSidebar/>
            <div className="text-center text-4xl bg-cyan-900 font-bold text-white">
                <h1>Name Of School!</h1>
               <div className="">
                <img className="mt-2" src={img} alt="" />
               </div>
            </div>
        </div>
        </>
    );
};

export default AdminProfile;