import userIMG from '../assets/user.png'
import searchIcon from '../assets/magnifying-glass-solid.svg'
import Calendar from '../Components/Calendar';
import QuickActions from '../Components/QuickActions';
import Tasks from '../Components/Tasks';
import TasksFlow from '../Components/TaskaFlow';
import SideBar from '../SharedComponents/SideBar';
import TeachersCorner from '../Components/TeachersCorner';
import { Link } from 'react-router-dom';
import TeacherNoticeBoard from '../SharedComponents/TeacherNoticeBoard';
import TeachersOnly from '../SharedComponents/TeachersOnly';

const TeacherDashboard = () => {
    return (
        <>
            <section className="dashboardSection">
                <div className="container mx-auto flex gap-6">
                    <SideBar />
                    <div className="main-DBcontent">
                        <div className="flex justify-between">
                            <div className="DBUsername">
                                <h2 className="font-bold text-4xl">Hello, Teacher(User!)</h2>
                                <h4 className="text-2xl">Welcome to smart school management</h4>
                            </div>
                            <div className="topSearch">
                                <form action="#" className="flex justify-between">
                                    <input className="w-full h-full" type="search" name="studentDboardSearch" id="SDBSearch" placeholder="Search..." />
                                    <button type="submit" className="hover:bg-[var(--secondary-color)]">
                                        <img src={searchIcon} alt="search" />
                                    </button>
                                </form>
                            </div>
                            <div className="DBuserImage">
                                <Link to="/TeacherProfile"><img src={userIMG} alt="user image" /></Link>
                            </div>
                        </div>
                        <div className="dashboardContent grid grid-cols-12 gap-6 mt-10">
                            <Calendar />
                            <QuickActions />
                            <div className="DBCbottom col-span-12 grid grid-cols-12 gap-6">
                            <TeachersOnly/>
                                
                                <div className="DBCBinside col-span-4 grid grid-cols-8 gap-6">
                                    <Tasks />
                                    <TasksFlow />
                                </div>
                                <TeacherNoticeBoard />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeacherDashboard;