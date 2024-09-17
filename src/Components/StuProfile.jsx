import SideBar from "../SharedComponents/SideBar";
import StudentProfileTab from "../SharedComponents/StudentProfileTab";

const StuProfile = () => {
    return (
        <>
            <div className="student-profile-page">
                <div className="container mx-auto flex gap-6">
                    <SideBar />
                    <div className="studprof-contents shrink-0">
                        <StudentProfileTab />
                    </div>
                </div>
            </div>
        </>
    );
};

export default StuProfile;