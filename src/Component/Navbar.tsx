"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "../../public/Image/logo.png";
import icon from "../../public/Image/Whatsappicon.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/">
              <Image src={logo} alt="Logo" width={120} height={50} />
            </Link>
          </div>

          {/* Navigation Links (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 text-[15px] font-medium">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 text-[15px] font-medium">
              Services
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-blue-600 text-[15px] font-medium">
              Projects
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 text-[15px] font-medium">
              About Us
            </Link>
          </div>

          {/* Mobile View: WhatsApp & Hamburger Menu */}
          <div className="flex items-center space-x-4">
            <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
              <Image src={icon} alt="WhatsApp" width={30} height={30} />
            </a>
            <Link href="/contact" className="hidden md:block">
              <button className="bg-[#335555] text-white px-6 py-2 rounded-[18px] text-[15px] font-medium hover:bg-[#2a4a4a] transition">
                Contact Us
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
          className="fixed inset-0 bg-black-200 bg-opacity-70 flex justify-end z-40"
          onClick={() => setIsOpen(false)}
        >
          {/* Sidebar Menu */}
          <div
  className="w-[250px] h-full bg-white shadow-lg p-6 flex flex-col items-center transform transition-transform duration-300"
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
              <Link href="/contact" className="bg-[#335555] text-white px-6 py-2 rounded-[15px] text-[15px] font-medium hover:bg-[#2a4a4a] transition text-center items-center" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}
