import { useEffect, useState } from 'react'; // Import useState
import { FaRegEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEyeSlash } from "react-icons/fa";
import LoginWithGoogle from '../../components/LoginWithGoogle/LoginWithGoogle';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.config';



const Login = () => {
    const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
    const navigate = useNavigate();
    const [user, ,] = useAuthState(auth);

    const [
        signInWithEmailAndPassword,
        ,
        ,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        signInWithEmailAndPassword(email, password)

    }
    useEffect(() => {
        if (user) {
            navigate("/post_login");
        }
    }, [user, navigate]);


    return (
        <div className="">
            <div className="m-8">
                <h2 className="text-4xl font-semibold mt-8">Login to your <br /> account</h2>
                <p className="mt-2 text-custom-gray2 text-sm">Please sign in to your account</p>
                <form className='my-8' onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block font-semibold mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="Enter Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'} // Toggle input type
                                name="password"
                                required
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                                placeholder="Password"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility} // Toggle password visibility
                                className="absolute inset-y-0 right-0 px-3 flex items-center"
                            >
                                {showPassword ? (
                                    <FaRegEye className='h-[15px] w-[15px]' />

                                ) : (
                                    <FaRegEyeSlash className='h-[15px] w-[15px]' />
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <Link to="#" className="text-custom-yellow hover:underline">
                            <p className='text-right'>Forgot password?</p>
                        </Link>
                    </div>
                    {error && <p className='text-red-500'>{error?.message}</p>}
                    <button
                        type="submit"
                        className="w-full h-[52px] rounded-[100px] bg-custom-yellow hover:bg-orange-500 text-white text-sm font-semibold py-2 focus:outline-none focus:shadow-outline"
                    >
                        Sign In
                    </button>
                    <LoginWithGoogle />
                </form>
                <div className="text-center mt-8">
                    <p>Don&apos;t have an account? <Link to={'/register'} className="text-custom-yellow hover:underline">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
