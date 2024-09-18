import Calendar from '../Components/Calendar';
import TeacherSidebar from '../SharedComponents/TeacherSidebar';
import img from "../assets/attendance.png"

const TeacherAttendance = () => {
    return (
        <>
            <div className="student-profile-page container mx-auto flex gap-6">
                <TeacherSidebar />

                <div>
                    <h1 className="text-center text-4xl bg-cyan-900 font-bold text-white mb-3">Name Of School!</h1>
                    <Calendar />
                    <div className="className='w-auto h-fit md:w-11/12 md:h-screen justify-center flex'">
                        <img className="mt-2" src={img} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeacherAttendance;