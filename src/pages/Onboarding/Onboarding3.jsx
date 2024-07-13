import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const Onboarding3 = () => {
    return (
        <div className="bg-onboarding-2 bg-cover w-full h-screen flex items-end justify-center">
            <div className="bg-custom-yellow w-[311px] h-[400px] text-white rounded-[48px] p-[32px] mb-8 flex justify-between flex-col">
                <div className="flex flex-col gap-4">
                    <h2 className="text-4xl text-center font-semibold">We serve incomparable delicacies</h2>
                    <p className="text-sm text-center">All the best restaurants with their top menu waiting for you, they can’t wait for your order!!</p>
                    <div className="flex justify-center gap-1">
                        <div className="h-[6px] w-[24px] bg-custom-gray rounded-[100px]"></div>
                        <div className="h-[6px] w-[24px] bg-custom-gray rounded-[100px]"></div>
                        <div className="h-[6px] w-[24px] bg-white rounded-[100px]"></div>
                    </div>
                </div>
                
                <div className="relative flex justify-center items-center">
                    <ClipLoader size={94} color="white"  />
                    <Link to={"/login"} className="absolute flex bg-white h-[62px] w-[62px] rounded-full justify-center items-center z-10">
                        <FaArrowRightLong className="text-custom-yellow h-[16.5px] w-[14px]" />
                    </Link>
                </div>
                
            </div>
        </div>
    );
};

export default Onboarding3;
