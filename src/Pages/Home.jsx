import '../App.css'
import userIMG from '../assets/user.png'
import searchIcon from '../assets/magnifying-glass-solid.svg'
import Calendar from '../Components/Calendar';
import QuickActions from '../Components/QuickActions';
import NoticeBoard from '../Components/NoticeBoard';
import Tasks from '../Components/Tasks';
import TasksFlow from '../Components/TaskaFlow';
import SideBar from '../SharedComponents/SideBar';
import TeachersCorner from '../Components/TeachersCorner';
import { Link } from 'react-router-dom';

const Home = () => {
    return (

        <>
            <section className="dashboardSection">
                <div className="container mx-auto flex gap-6">
                    <SideBar />
                    <div className="main-DBcontent">
                        <div className="flex justify-between">
                            <div className="DBUsername">
                                <h2 className="font-bold text-4xl">Hello, Student</h2>
                                <h4 className="text-2xl">Welcome to school management app</h4>
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
                                <Link to="/StudentProfile"><img src={userIMG} alt="user image" /></Link>
                            </div>
                        </div>
                        <div className="dashboardContent grid grid-cols-12 gap-6 mt-10">
                            <Calendar />
                            <QuickActions />
                            <div className="DBCbottom col-span-12 grid grid-cols-12 gap-6">
                                <NoticeBoard />
                                <div className="DBCBinside col-span-4 grid grid-cols-8 gap-6">
                                    <Tasks />
                                    <TasksFlow />
                                </div>
                                <TeachersCorner />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default Home;