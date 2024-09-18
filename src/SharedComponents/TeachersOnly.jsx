import { Link } from 'react-router-dom';
import userIMG from '../assets/user.png'

const TeachersOnly = () => {
    return (
        <>
                    <div className="custom-shadow p-6 bg-white col-span-4">
                    <h4 className="text-4xl text-[var(--primary-color)] font-bold mb-4">Teachers' Activity</h4>
                        <div className="teachers-corner gap-4 grid grid-cols-2">
                            <Link to='/teacherAttendance' href="#" className="tc-item p-4 gap-0">
                                <img src={userIMG} alt="image" />
                                <h4 className="text-lg font-bold text-md text-[var(--primary-color)]">Attendance</h4>
                                <h4 className="text-md font-semibold text-md text-[var(--primary-color)]">Record Students</h4>
                            </Link>

                            <Link to='/marksEntry' href="#" className="tc-item p-4 gap-0">
                                <img src={userIMG} alt="image" />
                                <h4 className="text-lg font-bold text-md text-[var(--primary-color)]">Marks Entry</h4>
                                <h4 className="text-md font-semibold text-md text-[var(--primary-color)]">Enter & Update</h4>
                            </Link>

                            <Link to='/reportGen' href="#" className="tc-item p-4 gap-0">
                                <img src={userIMG} alt="image" />
                                <h4 className="text-lg font-bold text-md text-[var(--primary-color)]">Generate Report</h4>
                                <h4 className="text-md font-semibold text-md text-[var(--primary-color)]">Download Report</h4>
                            </Link>

                            <Link to='/resultsGen' href="#" className="tc-item p-4 gap-0">
                                <img src={userIMG} alt="image" />
                                <h4 className="text-lg font-bold text-md text-[var(--primary-color)]">Results</h4>
                                <h4 className="text-md font-semibold text-md text-[var(--primary-color)]">Students Results</h4>
                            </Link>
                        </div>
                        
                    </div>
                </>
    );
};

export default TeachersOnly;