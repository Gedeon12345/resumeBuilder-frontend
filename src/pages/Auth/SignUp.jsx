import React, { useContext, useState } from 'react'
import Input from '../../components/Inputs/Input'
import { useNavigate } from 'react-router-dom'
import { validateEmail } from '../../utils/helper'
import ProfilePicSelector from '../../components/Inputs/ProfilePicSelector'
import axiosInstance from '../../utils/axiosInstance'
import { API_PATHS } from '../../utils/apiPaths'
import { UserContext } from '../../context/userContext'
import uploadImage from '../../utils/uploadImage'
import Modal from '../../components/Modal'
import Privacy from '../PrivacyPolicy'
import Terms from '../Terms'
const SignUp = ({ setCurrentPage }) => {
    const [profilePic, setProfilePic] = useState(null);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [openPrivacy, setOpenPrivacy] = useState(false);
    const [openTerms, setOpenTerms] = useState(false);

    const [error, setError] = useState(null);

    const {updateUser} = useContext(UserContext);
    const navigate = useNavigate();

    // Handle Signup Form Submit
    const  handleSignUp = async (e) => {
        e.preventDefault();

        let profileImageUrl = "";

        if (!fullName) {
            setError("Please enter full name.");
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valide email address.");
            return;
        }

        if (!password) {
            setError("Please enter the password");
            return;
        }

        setError("");

        // SignUp API call
        try {
            setLoading(true)
            // Upload image if present
            if (profilePic) {
                const imgUploadRes = await uploadImage(profilePic);
                profileImageUrl = imgUploadRes.imageUrl || "";
            }

            const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
                name: fullName,
                email,
                password,
                profileImageUrl,
            });

            const { token } = response.data;

            if (token) {
                localStorage.setItem("token", token);
                updateUser(response.data);
                navigate("/dashboard");
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
    }

    return (
        <div className='w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center'>
            <h3 className="text-lg font-semibold text-black">Create an Account</h3>
            <p className="text-xs text-slate-700 mt-[5px] mb-6">
                Join us today by entreing your details below.
            </p>

            <form onSubmit={handleSignUp}>

                <ProfilePicSelector image={profilePic} setImage={setProfilePic} />

                <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
                    <Input
                        value={fullName}
                        onChange={({ target }) => setFullName(target.value)}
                        label="full Name"
                        placeholder="Gedeon"
                        type="text"
                    />

                    <Input 
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        label="Email Address"
                        placeholder="Gedeon@example.com"
                        type="text"
                    />

                    <Input 
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                        label="Password"
                        placeholder="Min 8 characters"
                        type="password"
                    />
                </div>

                <p className="text-[13px] text-slate-600 mt-3 flex space-x-2">
                    <input type="checkbox" name="privacy" id="" />
                    By clicking here you agree to our{" "}
                    <div
                        className="font-medium text-primary cursor-pointer"
                        onClick={() => {
                            setOpenPrivacy(true)
                        }}
                    >
                        Privacy and Policies
                    </div>
                    <div
                        className="flex font-medium text-primary cursor-pointer"
                        onClick={() => {
                            setOpenTerms(true)
                        }}
                    >
                        Terms and Conditions
                    </div>
                </p>

                {error && <p className="text-red-500 text-xs pb-2.5"> {error} </p>}

                <button type='submit' disabled={loading} className='btn-primary disabled:opacity-50 disabled:pointer-events-none'>
                    {loading ? (
                        <div className='flex justify-center items-center'>
                            <div className="w-4 h-4 border-2 border-red-900 mr-2 border-t-transparent rounded-full animate-spin"></div>
                            <span>Signing up...</span>
                        </div>
                    ) : 
                        "SIGN UP"
                    }
                </button>

                <p className="text-[13px] text-slate-800 mt-3">
                    Already an account?{" "}
                    <button
                        className="font-medium text-primary underline cursor-pointer"
                        onClick={() => {
                            setCurrentPage("login")
                        }}
                    >
                        Login
                    </button>
                </p>
                
                
            </form>

            <Modal
                isOpen={openPrivacy}
                onClose={() => {
                    setOpenPrivacy(false);
                }}
                hideHeader
            >
                <div>
                    <Privacy />
                </div>
            </Modal>
            <Modal
                isOpen={openTerms}
                onClose={() => {
                    setOpenTerms(false);
                }}
                hideHeader
            >
                <div>
                    <Terms />
                </div>
            </Modal>
        </div>
    )
}

export default SignUp
