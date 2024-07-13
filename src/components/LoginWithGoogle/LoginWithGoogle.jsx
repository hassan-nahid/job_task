import { FcGoogle } from "react-icons/fc";

const LoginWithGoogle = () => {
    return (
        <div className="text-center mt-7">
        <div className='flex justify-center items-center gap-3'>
            <div className='h-[.5px] w-[30%] bg-custom-gray2' /><div className='text-sm text-custom-gray2'>Or sign in with</div><div className='h-[.5px] w-[30%] bg-custom-gray2' />
        </div>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-md inline-flex items-center">
            <FcGoogle className="w-10 h-10 mt-6" />
           
        </button>
    </div>
    );
};

export default LoginWithGoogle;