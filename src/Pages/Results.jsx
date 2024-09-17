import SideBar from "../SharedComponents/SideBar";
import img from "../assets/12 exam result search by admission no1.png"

const Results = () => {
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

            </div>
        </div>
    </>
    );
};

export default Results;