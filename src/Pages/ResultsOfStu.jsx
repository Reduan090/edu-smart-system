import TeacherSidebar from "../SharedComponents/TeacherSidebar";
import img from "../assets/result generation.png"


const ResultsOfStu = () => {
    return (
        <>
        <div  className="student-profile-page container mx-auto flex gap-6">
            <TeacherSidebar/>
            <div >
                <h1 className="text-center text-4xl bg-cyan-900 font-bold text-white">Name Of School!</h1>
           
               
                <img className="mt-6 h-[720px] w-[1400px]" src={img} alt="" />
              
            </div>
        </div>
        </>
    );
};

export default ResultsOfStu;