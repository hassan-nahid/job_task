import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/success.png"
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
import { useEffect } from "react";

const PostLogin = () => {
    const navigate = useNavigate();

    const [user, , ] = useAuthState(auth);

    const [signOut, , ] = useSignOut(auth);

    const handleLogout = async() => {
        await signOut()
    }

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user, navigate, ]);


    console.log("user",user)
    return (
        <div className="bg-onboarding-1 bg-cover w-full h-screen flex items-end justify-center">
            <div className="bg-white w-full md:max-w-[375px] h-[492px] text-white gap-8 rounded-t-[24px] p-[32px] flex flex-col justify-center items-center">
                <img src={img} className="w-[202px] h-[168px]" alt="" />
                <h1 className="text-black font-semibold text-2xl">Login Successful</h1>
                <Link
                    to={'/tracking_screen'}
                    className="w-full text-center h-[52px] rounded-[100px] bg-custom-yellow hover:bg-orange-500 text-white text-sm font-semibold pt-4 focus:outline-none focus:shadow-outline"
                >
                   <span> Go to Tracking Screen</span>
                </Link>
                <button onClick={handleLogout} className="font-medium text-sm text-custom-gray2">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default PostLogin;
