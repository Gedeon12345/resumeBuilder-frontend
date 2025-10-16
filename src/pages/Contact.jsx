import { Mail, Phone, MapPin } from "lucide-react";
import { Users, Target, Heart, Lightbulb } from "lucide-react";
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X } from "lucide-react";

import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import Modal from '../components/Modal';
import { UserContext } from '../context/userContext';
import ProfileInfoCard from '../components/Cards/ProfileInfoCard';

export default function Contact() {

    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    const [openAuthModal, setOpenAuthModal] = useState(false);
    const [currentPage, setCurrentPage] = useState("login");
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 min-h-screen py-6 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        {/* Header */}
        <header className='flex justify-between items-center mb-16'>
            <div className="text-xl font-bold" style={{ fontFamily: "Tilt Prism, Trade Winds, sans-serif" }}><Link to="/">Resume Builder</Link></div>
            <nav className="space-x-5 hidden md:flex">
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
                    <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
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
        
        <h1 className="text-5xl font-extrabold mb-4">
          Contact <span className="text-green-500">Us</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Got questions or feedback? We’d love to hear from you. Our team is here to help with
          any inquiries, feature requests, or technical support.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-green-600">Reach Us</h2>
          <ul className="space-y-5 text-gray-700">
            <li className="flex items-center gap-3">
              <MapPin className="text-green-500 w-6 h-6" />
              Cameroon 🇨🇲
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-green-500 w-6 h-6" />
              <a href="mailto:fobadeffo@gmail.com" className="text-blue-600 hover:underline">
                fobadeffo@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-green-500 w-6 h-6" />
              <a href="tel:+237693427529" className="text-blue-600 hover:underline">
                +237 693 427 529
              </a>
            </li>
          </ul>

          <p className="mt-6 text-gray-600">
            We typically respond within 24 hours. You can also connect with us through social media
            for updates and resume tips.
          </p>
        </div>

        {/* Contact Form */}
        <form className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-green-600">Send a Message</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 p-3 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </div>
        </form>
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
