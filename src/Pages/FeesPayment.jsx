import Navbar from "../SharedComponents/Navbar";
import img from "../assets/EMI-Supported-Bank-v3-1536x1051-1-768x526-removebg-preview.png"

const FeesPayment = () => {
    return (
        <>
            <section>
                <div>
                    <Navbar />
                </div>

                <div className="grid grid-cols-2 ">
                    <div className="text-center mt-16">
                        <h1 className="text-5xl font-bold text-black text-center">Fees Payment</h1>

                        <section className="grid grid-cols-2 mt-10 items-center ml-8">

                            <section className="form-control mb-8 w-72">
                                <p className="text-left mb-5 font-semibold text-black text-2xl">Current Session</p>
                                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto bg-white border-black" />
                            </section>

                            <section className="form-control mb-8 w-72">
                                <p className="text-left mb-5 font-semibold text-black text-2xl">Month</p>
                                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto bg-white border-black" />
                            </section>

                        </section>


                        <div className="flex justify-between mr-[79px] border-b ">
                            <h1 className="ml-[30px] font-semibold text-black text-2xl">Fees payment </h1>
                            <button className="btn btn-success w-52 text-lg">Voucher</button>
                        </div>

                        <div className="mt-9">
                            
                        </div>
                        <label className="form-control w-full max-w-[660px] ml-[30px]">
                            <div className="label">
                                <span className="label-text text-lg text-black">Fees Head</span>
                                <span className="label-text-alt text-lg text-black">Dues Ammounts</span>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Start placeholder"
                                    className="input input-bordered w-full bg-white border-black placeholder-transparent"
                                />
                                <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                                    Monthly Tution Fee
                                </span>
                                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                                    1500
                                </span>
                            </div>
                            <div className="flex justify-end gap-36">
                                <p className="text-lg">Total</p>
                                <p className="mr-2">1500</p>
                            </div>

                            <div className="mt-4">
                            <button className="btn btn-success w-52 text-lg">Click to Pay</button>
                            </div>

                        </label>
                    </div>

                    <div className="items-center mt-16 ml-16">
                        <img className="items-center h-[500px] " src={img} alt="" />
                    </div>
                </div>

            </section>
        </>
    );
};

export default FeesPayment;