import AdminSidebar from '../SharedComponents/AdminSidebar';
import TeacherSidebar from '../SharedComponents/TeacherSidebar';
import img from "../assets/paymentsummary1.jpg"
import img2 from '../assets/paymentsummary2.jpg'

const PaymentSummery = () => {
    return (
        <>
            <div className="student-profile-page container mx-auto flex gap-6">
                <AdminSidebar />

                <div className=''>
                    <h1 className="text-center text-4xl bg-cyan-900 font-bold text-white mb-3 ">Name Of School!</h1>
                    <div className='flex gap-3 w-full max-h-full'>
                        <img className="mt-2 w-full h-[700px]" src={img} alt="" />
                        <img className="mt-2 w-full h-[700px]" src={img2} alt="" />
                    </div>
                </div>

            </div>

        </>
    );
};

export default PaymentSummery;