import { Users, Target, Heart, Lightbulb } from "lucide-react";
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X } from "lucide-react";

import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import Modal from '../components/Modal';
import { UserContext } from '../context/userContext';
import ProfileInfoCard from '../components/Cards/ProfileInfoCard';

export default function About() {

  const {user} = useContext(UserContext);
    const navigate = useNavigate();

    const [openAuthModal, setOpenAuthModal] = useState(false);
    const [currentPage, setCurrentPage] = useState("login");
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen py-6 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        {/* Header */}
        <header className='flex justify-between items-center mb-16'>
            <div className="text-xl font-bold" style={{ fontFamily: "Tilt Prism, Trade Winds, sans-serif" }}><Link to="/">Resume Builder</Link></div>
            <nav className="space-x-5 hidden md:flex ">
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
                        className="md:hidden text-gray-700 focus:outline-none"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
        </header>

        {/* Mobile */}
        {isOpen && (
                    <div className="md:hidden bg-white shadow-lg border-t border-gray-100 fixed top-0 left-0 min-h-[100vh] min-w-[300px]">
                        <div className="flex flex-col px-6 py-4 space-y-4 font-medium text-gray-700">
                        <a
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="hover:text-green-500 transition"
                        >
                            Home
                        </a>
                        <a
                            href="/about"
                            onClick={() => setIsOpen(false)}
                            className="hover:text-green-500 transition"
                        >
                            About
                        </a>
                        <a
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="hover:text-green-500 transition"
                        >
                            Contact
                        </a>

                        {user ? <ProfileInfoCard /> :<button
                            className='bg-purple-100 text-sm font-semibold text-black px-7 py-2.5 rounded-lg hover:bg-gray-800 hover:text-white transition-colors cursor-pointer '
                            onClick={() => setOpenAuthModal(true)}
                        >
                            Login / Sign Up
                        </button>}
                        </div>
                    </div>
                    )}

        <h1 className="text-5xl font-extrabold mb-4">
          About <span className="text-green-500">Resume Builder</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Crafted in Cameroon by <strong>Foba Deffo Gedeon</strong>, Resume Builder helps you
          create professional, eye-catching resumes that open doors to opportunities.
          Whether you’re a student, job seeker, or professional — we help your profile shine.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Mission */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition">
          <Target className="w-12 h-12 text-green-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To empower every individual with simple, beautiful, and effective tools to build
            professional resumes that stand out — in just a few clicks.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition">
          <Lightbulb className="w-12 h-12 text-blue-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To become Africa’s most trusted online resume platform — helping thousands of people
            start or boost their careers every month.
          </p>
        </div>

        {/* Values */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition">
          <Heart className="w-12 h-12 text-pink-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
          <ul className="text-gray-600 space-y-2 text-left">
            <li>✅ Simplicity — Easy and intuitive tools</li>
            <li>✅ Accessibility — Free and available to all</li>
            <li>✅ Innovation — Regular updates & new templates</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 text-center">
        <Users className="w-12 h-12 text-green-500 mb-3 mx-auto" />
        <h2 className="text-3xl font-bold mb-3">Meet the Founder</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          <strong>Foba Deffo Gedeon</strong> — a Cameroonian developer passionate about design
          and technology. His goal is to make digital career tools accessible for all, no matter
          where you are. This project reflects his commitment to empowering job seekers through
          innovation and simplicity.
        </p>
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
  );
}
