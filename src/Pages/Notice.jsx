import React from 'react';
import Navbar from '../SharedComponents/Navbar';
import SideBar from '../SharedComponents/SideBar';
import img from '../assets/nn.png'

const Notice = () => {
    return (
        <>
            
                <div className='flex'>

                    <div className='grid grid-cols-1'>
                        <SideBar></SideBar>
                    </div>

                    <div className='w-auto h-fit md:w-11/12 md:h-screen justify-center flex'>
                        <img src={img} alt="" />
                    </div>

                </div>
          
        </>
    );
};

export default Notice;