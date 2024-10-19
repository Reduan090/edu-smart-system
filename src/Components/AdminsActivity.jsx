import { Link } from 'react-router-dom';
import userIMG from '../assets/user.png'

const AdminsActivity = () => {
    return (
        <>
                    <div className="custom-shadow p-6 bg-white col-span-4">
                    <h4 className="text-4xl text-[var(--primary-color)] font-bold mb-4">Admin's Activity</h4>
                        <div className="teachers-corner gap-4 grid grid-cols-2">

                            <Link to='/paymentSummary' href="#" className="tc-item p-4 gap-0">
                                <img src={userIMG} alt="image" />
                                <h4 className="text-lg font-bold text-md text-[var(--primary-color)]">Payment Summery</h4>
                            </Link>

                            <Link to='/infoAdd' href="#" className="tc-item p-4 gap-0">
                                <img src={userIMG} alt="image" />
                                <h4 className="text-lg font-bold text-md text-[var(--primary-color)]">Infomation add</h4>
                            </Link>

                            <Link to='/infoUpdate' href="#" className="tc-item p-4 gap-0">
                                <img src={userIMG} alt="image" />
                                <h4 className="text-lg font-bold text-md text-[var(--primary-color)]">Information update</h4>
                            </Link>

                            <Link to='' href="#" className="tc-item p-4 gap-0">
                                <img src={userIMG} alt="image" />
                                <h4 className="text-lg font-bold text-md text-[var(--primary-color)]">School monitoring</h4>
                            </Link>
                        </div>
                        
                    </div>
                </>
    );
};  

export default AdminsActivity;