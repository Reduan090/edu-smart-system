import TeacherSidebar from "../SharedComponents/TeacherSidebar";

const TeachersProfile = () => {
    return (
        <>
        <div  className="student-profile-page">
            <TeacherSidebar/>
            <div className="container mx-auto flex gap-6">
                <div className="studprof-contents shrink-0">
                    <p></p>
                </div>
            </div>
        </div>
        </>
    );
};

export default TeachersProfile;