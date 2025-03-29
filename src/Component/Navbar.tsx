"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "../../public/Image/logo.png";
import icon from "../../public/Image/Whatsappicon.png";
import { MdArrowOutward } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto lg:px-0 py-3 px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/">
              <Image src={logo} alt="Logo" width={120} height={50} />
            </Link>
          </div>

          {/* Navigation Links (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-[#000] hover:text-[#335555] hover:underline hover:decoration-2 hover:underline-offset-8 text-[15px] font-medium tracking-wider ">
              HOME
            </Link>
            <Link href="/service" className="text-[#000] hover:text-[#335555]  hover:underline hover:decoration-2 hover:underline-offset-8 text-[15px] font-medium tracking-wider ">
              SERVICES
            </Link>
            <Link href="/projects" className="text-[#000] hover:text-[#335555] text-[15px] font-medium tracking-wider ">
              PROJECTS
            </Link>
            <Link href="/about" className="text-[#000] hover:text-[#335555] hover:underline hover:decoration-2 hover:underline-offset-8 text-[15px] font-medium tracking-wider ">
              ABOUT US
            </Link>
          </div>

          {/* Mobile View: WhatsApp & Hamburger Menu */}
          <div className="flex items-center gap-4">
            <button className="text-[#fff] bg-[#00CD4C] p-1 rounded-xl">
              <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-2xl" />
              </a></button>
            <Link href="/contact" className="hidden md:block">
              <button className=" flex items-center gap-1 bg-[#335555] text-white px-6 py-2 rounded-[18px] text-[15px] font-medium hover:bg-[#2a4a4a] transition">
                CONTACT US <span className="text-xl"><MdArrowOutward /></span>
              </button>
            </Link>
            {/* Hamburger Menu Button (Hidden when Sidebar is Open) */}
            {!isOpen && (
              <button
                onClick={() => setIsOpen(true)}
                className="md:hidden transition-transform duration-300 ease-in-out focus:outline-none"
              >
                <Menu className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Overlay and Sidebar (Fixed without Absolute/Relative) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-end z-40"
          onClick={() => setIsOpen(false)}
        >
          {/* Sidebar Menu */}
          <div
            className="w-[250px] h-full bg-white shadow-lg p-6 flex flex-col transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the menu
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="self-end mb-6 focus:outline-none"
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 text-[15px] font-medium" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 text-[15px] font-medium" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link href="/projects" className="text-gray-700 hover:text-blue-600 text-[15px] font-medium" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 text-[15px] font-medium" onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              <Link href="/contact" className="bg-[#335555] text-white px-6 py-2 rounded-[15px] text-[15px] font-medium hover:bg-[#2a4a4a] transition text-center" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}
