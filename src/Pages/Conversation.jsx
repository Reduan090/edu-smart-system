import img from "../assets/conversation.png"
import SideBar from "../SharedComponents/SideBar";
const Conversation = () => {
    return (
        <>

            <div className='flex'>

                <div className='grid grid-cols-1'>
                    <SideBar></SideBar>
                </div>

                <div className='w-auto h-fit md:w-11/12 md:h-screen justify-center flex'>
                    <img src={img} alt="" />
                    <div>
                        <h1></h1>
                    </div>

                    <div className='absolute top-0 left-0 w-full text-center '>
                        <h1 className='text-4xl font-bold text-green-900 py-2'>
                            Talk to Teacher
                        </h1>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Conversation;