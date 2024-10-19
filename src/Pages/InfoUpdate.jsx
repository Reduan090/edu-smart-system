import React from 'react';
import AdminSidebar from '../SharedComponents/AdminSidebar';
import img from "../assets/infoadd.jpg"

const InfoUpdate = () => {
    return (
        <>
            <div className="student-profile-page container mx-auto flex gap-6">
                <AdminSidebar />

                <div className=''>
                    <h1 className="text-center text-4xl bg-cyan-900 font-bold text-white mb-3 ">Name Of School!</h1>
                    <h1 className="text-center text-4xl  text-green-600 mb-3 font-semibold">Update Information</h1>
                    <div className='flex gap-3 w-full'>
                        <img className="mt-2 w-full h-[650px]" src={img} alt="" />
                    </div>
                </div>

            </div>

        </>
    );
};

export default InfoUpdate;