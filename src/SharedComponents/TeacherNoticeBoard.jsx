import sms from '../assets/messenger.png'
import { Link } from 'react-router-dom'

const TeacherNoticeBoard = () => {
    return (
        <>
            <div className="notice-board block col-span-4 custom-shadow bg-white p-6 ">
                <div className="font-semibold text-xl">
                    <h4 className="text-4xl text-[var(--primary-color)] font-bold mb-4">Communications</h4>
                    <ul>

                        <Link to='/talkToStu'><li><a href="#" className="gap-2"><img src={sms} alt="icon" className="h-5 w-5" />Talk to Students</a></li></Link>

                        <Link to='/talkToStu'><li><a href="#" className="gap-2"><img src={sms} alt="icon" className="h-5 w-5" />Talk to Parents</a></li></Link>
                    </ul>

                    <img src="" alt="" />
                </div>
            </div>
        </>
    );
};

export default TeacherNoticeBoard;