import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import { validateEmail, validatePassword } from '../../utils/helper';
import { UserContext } from '../../context/userContext';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';

const Login = ({setCurrentPage}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    const {updateUser} = useContext(UserContext);
    const navigate = useNavigate();

    // Handle Login Form Submit
    const handleLogin = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError("Please enter a valid email address");
            return;
        } 

        if (!validatePassword(password)) {
            setError("Please enter the passord");
            return;
        }

        setError("");

        // Login API call
        try {
            setLoading(true)
            const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
                email,
                password,
            });

            const { token } = response.data;

            if (token) {
                localStorage.setItem("token", token);
                updateUser(response.data);
                navigate("/dashboard")
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError("Something went wrong ! Please try again.")
            }
        } finally {
            setLoading(false)
        }
    };

    // if (loading) {
    //     return (
    //         <div className=''>
    //             <div></div>
    //             <h1>LOGING IN</h1>
    //         </div>
    //     )
    // }
    return (
        <div className='w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center '>
           <h3 className="text-lg font-semibold text-black">Welcome back</h3>
            <p className="text-xs text-slate-700 mt-[5px] mb-6">
                Please enter your details to login 
            </p>

            <form onSubmit={handleLogin}>

                <Input
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                    label="Email Address"
                    placeholder="fobadeffo@example.com"
                    type="text"
                />

                <Input
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                    label="Password"
                    placeholder="Min 8 Characters"
                    type="password"
                />

                {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

                <button type='submit' disabled={loading} className='btn-primary disabled:opacity-50 disabled:pointer-events-none'>
                    {loading ? (
                        <div className='flex justify-center items-center'>
                            <div className="w-4 h-4 border-2 border-red-900 mr-2 border-t-transparent rounded-full animate-spin"></div>
                            <span>LOGIN IN...</span>
                        </div>
                    ) : 
                        "LOGIN"
                    }
                </button>

                <p className="text-[13px] text-slate-600 mt-3">
                    Don't have an account?{" "}
                    <button
                        className="font-medium text-primary cursor-pointer"
                        onClick={() => {
                            setCurrentPage("signup")
                        }}
                    >
                        SignUp
                    </button>
                </p>
            </form>
        </div>
    )
}

export default Login
