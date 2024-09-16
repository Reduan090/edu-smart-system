import userIMG from '../assets/user.png'

const TeachersCorner = () => {
    return (
                <>
                    <div className="custom-shadow p-6 bg-white col-span-4">
                    <h4 className="text-4xl text-[var(--primary-color)] font-bold mb-4">Teachers' Only</h4>
                        <div className="teachers-corner gap-4 grid grid-cols-2">
                            <a href="#" className="tc-item p-4 gap-0">
                                <img src={userIMG} alt="image" />
                                <h4 className="text-lg font-bold text-md text-[var(--primary-color)]">Attendance</h4>
                                <h4 className="text-md font-semibold text-md text-[var(--primary-color)]">Record Students</h4>
                            </a>
                            <a href="#" className="tc-item p-4 gap-0">
                                <img src={userIMG} alt="image" />
                                <h4 className="text-lg font-bold text-md text-[var(--primary-color)]">Marks Entry</h4>
                                <h4 className="text-md font-semibold text-md text-[var(--primary-color)]">Enter & Update</h4>
                            </a>
                            <a href="#" className="tc-item p-4 gap-0">
                                <img src={userIMG} alt="image" />
                                <h4 className="text-lg font-bold text-md text-[var(--primary-color)]">Generate Report</h4>
                                <h4 className="text-md font-semibold text-md text-[var(--primary-color)]">Download Report</h4>
                            </a>
                            <a href="#" className="tc-item p-4 gap-0">
                                <img src={userIMG} alt="image" />
                                <h4 className="text-lg font-bold text-md text-[var(--primary-color)]">Results</h4>
                                <h4 className="text-md font-semibold text-md text-[var(--primary-color)]">Students Results</h4>
                            </a>
                        </div>
                        
                    </div>
                </>
            )
    }

export default TeachersCorner;