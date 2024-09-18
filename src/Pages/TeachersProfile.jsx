import TeacherSidebar from "../SharedComponents/TeacherSidebar";
import img from "../assets/teacherprofile.png"

const TeachersProfile = () => {
    return (
        <>
        <div  className="student-profile-page container mx-auto flex gap-6">
            <TeacherSidebar/>
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

export default TeachersProfile;