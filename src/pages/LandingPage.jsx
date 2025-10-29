import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X } from "lucide-react";

import HERO_IMG from "../assets/hero.png"
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import Modal from '../components/Modal';
import { UserContext } from '../context/userContext';
import ProfileInfoCard from '../components/Cards/ProfileInfoCard';


const LandingPage = () => {
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    const [openAuthModal, setOpenAuthModal] = useState(false);
    const [currentPage, setCurrentPage] = useState("login");
    const [isOpen, setIsOpen] = useState(false);

    const hanldeCTA = () => {
        if (!user) {
            setOpenAuthModal(true);
        } else {
            navigate("/dashboard");
        }
    };

    return (
        <div className='w-full min-h-full bg-white'>
            <div className="container mx-auto px-4 py-6">
                {/* Header */}
                <header className='flex justify-between items-center mb-16'>
                    <div className="text-xl font-bold" style={{ fontFamily: "Tilt Prism, Trade Winds, sans-serif" }}><Link to="/">Resume Builder</Link></div>
                    <nav className='space-x-5 hidden md:flex'>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                    {user ? <ProfileInfoCard /> :<button
                        className='hidden md:flex bg-purple-100 text-sm font-semibold text-black px-7 py-2.5 rounded-lg hover:bg-gray-800 hover:text-white transition-colors cursor-pointer '
                        onClick={() => setOpenAuthModal(true)}
                    >
                        Login / Sign Up
                    </button>}

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-700 focus:outline-none cursor-pointer"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </header>

                {/* Mobile */}
                {isOpen && (
                    <div className="md:hidden bg-white shadow-lg border-t border-gray-100 fixed top-0 left-0 min-h-[100vh] min-w-[300px] ">
                        <div className="flex flex-col px-6 py-4 space-y-4 font-medium text-gray-700">
                        <Link
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className="hover:text-green-500 transition"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            onClick={() => setIsOpen(false)}
                            className="hover:text-green-500 transition"
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="hover:text-green-500 transition"
                        >
                            Contact
                        </Link>

                        {user ? <ProfileInfoCard /> :<button
                            className='bg-purple-100 text-sm font-semibold text-black px-7 py-2.5 rounded-lg hover:bg-gray-800 hover:text-white transition-colors cursor-pointer '
                            onClick={() => setOpenAuthModal(true)}
                        >
                            Login / Sign Up
                        </button>}
                        </div>
                    </div>
                    )}

                {/* Hero Content */}
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
                        <h1 className="text-5xl font-bold mb-6 leading-tight">
                            Build Your{" "}
                            <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#7182ff_0%,_#3cff52_100%)] bg-[length:200%_200%] animate-text-shine">
                                Resume Effortlessly 
                            </span>
                        </h1>
                        <p className="text-lg text-gray-700 mb-8">
                            Craft a standout resume in minutes with our smart and intuitive resume builder.
                        </p>
                        <button
                            className='bg-black text-sm font-semibold text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer'
                            onClick={hanldeCTA}
                        >
                            Get Started
                        </button>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img 
                            src={HERO_IMG} 
                            alt="Hero Image"
                            className='w-full rounded-lg' 
                        />
                    </div>
                </div>

                <section className="mt-5">
                    <h2 className="text-2xl font-bold text-center mb-12">
                        Features That Make You Shine
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-semibold mb-3">Ease Editing</h3>
                            <p className="text-gray-600">
                                Update your resume sections with live preview and instant formating.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-semibold mb-3">
                                Beautiful Templates
                            </h3>
                            <p className="text-gray-600">
                                Choose from modern, professional templates that are easy to customize.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                            <h3 className="text-lg font-semibold mb-3">One-Click Export</h3>
                            <p className="text-gray-600">
                                Download your resume instantly as a high-quality PDF with one Click.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <div className="text-sm bg-gray-50 text-secondary text-center p-5 mt-5 space-y-3">
                <p className={`text-sm text-gray-600`}>
                    © {new Date().getFullYear()} Time to progress
                </p>
                Made with ❤️... For you
            </div>

            <Modal 
                isOpen={openAuthModal}
                onClose={() => {
                    setOpenAuthModal(false);
                    setCurrentPage("login");
                }}
                hideHeader
            >
                <div>
                    {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
                    {currentPage === "signup" && (
                        <SignUp setCurrentPage={setCurrentPage} />
                    )}
                </div>
            </Modal>
        </div>
    )
}

export default LandingPage
