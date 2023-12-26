import { FaSuitcase } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
const MyEducation = () => {
    return (
        <div className=" max-w-6xl mx-auto bg-slate-950 text-white">
            <div className=" flex flex-col md:flex-row items-center lg:flex-row gap-5 w-[90%] mx-auto py-10 justify-evenly">
                <div className=" rounded-md w-full md:w-[50%] lg:w-[50%] border border-pink-200 p-3 bg-slate-900 space-y-2">
                    <div className=" flex flex-row gap-3 items-center px-3">
                        <MdCastForEducation className=" text-3xl" />
                        <h3 className=" text-3xl font-semibold">My Education</h3>
                    </div>
                    <div className=" border-b pb-3 border-gray-500 flex flex-row items-center lg:flex-row gap-5 ">
                        <div className="w-[50%]">
                            <h2 className=" text-pink-500 text-2xl ">June - Dec (2023)</h2>
                        </div>
                        <div className="w-[50%]">
                            <h2>Web Development Course</h2>
                            <h2>Programming Hero</h2>
                        </div>
                    </div>
                    <div className="border-b pb-3 border-gray-500 flex flex-row items-center lg:flex-row gap-5">
                        <div className=" w-[50%]">
                            <h2 className=" text-pink-500 text-2xl">2018</h2>
                        </div>
                        <div className=" w-[50%]">
                            <h2>EMBA</h2>
                            <h2>University of Rajshahi</h2>
                        </div>
                    </div>
                    <div className="border-b pb-3 border-gray-500 flex flex-row items-center lg:flex-row gap-5">
                        <div className=" w-[50%]">
                            <h2 className=" text-pink-500 text-2xl">2017</h2>
                        </div>
                        <div className=" w-[50%]">
                            <h2>MA</h2>
                            <h2>University of Rajshahi</h2>
                        </div>
                    </div>
                    <div className="border-b pb-3 border-gray-500 flex flex-row items-center lg:flex-row gap-5">
                        <div className=" w-[50%]">
                            <h2 className=" text-pink-500 text-2xl">2016</h2>
                        </div>
                        <div className=" w-[50%]">
                            <h2>BA(Hons)</h2>
                            <h2>University of Rajshahi</h2>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-900 space-y-2 rounded-md w-full lg:h-[340px] md:h-[435px] md:w-[50%] lg:w-[50%] border border-pink-200 p-3">
                <div className=" border-gray-500 flex flex-row gap-3 items-center">
                        <FaSuitcase className=" text-3xl" />
                        <h3 className=" text-3xl font-semibold">My Experience</h3>
                    </div>
                    <div className="border-b border-gray-500 pb-3 flex items-center flex-row lg:flex-row gap-5">
                        <div className=" w-[50%]">
                            <h2 className=" text-pink-500 text-2xl">2023</h2>
                        </div>
                        <div className=" w-[50%]">
                            <h2>Production Officer</h2>
                            <h2>Akij Group</h2>
                        </div>
                    </div>
                    <div className="border-b border-gray-500 pb-3 flex items-center flex-row lg:flex-row gap-5">
                        <div className="w-[50%]">
                            <h2 className=" text-pink-500 text-2xl">2020</h2>
                        </div>
                        <div className=" w-[50%]">
                            <h2>Area Manager</h2>
                            <h2>TK Group</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyEducation;