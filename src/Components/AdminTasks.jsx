import React from 'react';
import userIMG from '../assets/user.png'
import ChevronRight from '../assets/chevron-right-solid.svg'

const AdminTasks = () => {
    return (
        <>
            <div className="tasks-card custom-shadow p-6 bg-white block col-span-8 row-span-2 mb-4">
                <h4 className="text-4xl text-[var(--primary-color)] font-bold mb-4">Tasks</h4>
                <div className="tasks-list flex flex-col gap-4">
                    <a href="#" className="tasks-item flex items-center p-4 px-6 justify-between">
                        <img src={userIMG} alt="image" className="h-10 w-10" />
                        <div className="content">
                            <p className="text-sm font-semibold">Admins infomation adding system</p>
                            <h4 className="text-xl font-bold">Check out the latest Information</h4>
                        </div>
                        <img src={ChevronRight} alt="arrow" className="h-5 w-5" />
                    </a>
                    <a href="#" className="tasks-item flex items-center p-4 px-6 justify-between">
                        <img src={userIMG} alt="image" className="h-10 w-10" />
                        <div className="content">
                            <p className="text-sm font-semibold">Information Update system</p>
                            <h4 className="text-xl font-bold">Check out the latest Information updates</h4>
                        </div>
                        <img src={ChevronRight} alt="arrow" className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default AdminTasks;