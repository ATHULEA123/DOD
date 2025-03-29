"use client"
import { MdArrowOutward } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import project1 from "../../public/Image/project1.png";
import project2 from "../../public/Image/project2.png";
import project3 from "../../public/Image/project3.png";
import project4 from "../../public/Image/project4.png";
import design1 from "../../public/Image/design1.png";
import design2 from "../../public/Image/design2.png";
import design3 from "../../public/Image/design3.png";
import design4 from "../../public/Image/deisign4.png";



import Navbar from "@/Component/Navbar";
import Hero from "@/Component/HeroPage";
import Service from "@/Component/Service";
import Footer from "@/Component/Footer";
import Teams from "@/Component/Teams"
import AboutUS from "@/Component/AboutUs";
// import team from "../../public/Image/team.png"

export default function Home() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });

    const updateCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animations will only happen once
      easing: "ease-in-out", // Animation easing
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <AboutUS/>   

      


      <section className="bg-[#EBEEE7]">
        <div
          className="relative w-full min-h-screen   "
          style={{
            backgroundImage: "url('/Image/Project-bg.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="md:pt-15 pt-10 px-6 md:pb-20 pb-10">
              <div className="flex items-start justify-between md:mb-15 mb-6">
                <div className="flex flex-col text-[#335555]">
                  <h1 className=" md:text-5xl text-2xl font-bold mb-2">OUR PROJECTS</h1>
                  <p className="font-light md:text-lg text-sm max-w-[930px] text-[#000]">
                    A showcase of innovative architecture, elegant interiors, and sustainable landscapes. Each project
                    reflects our commitment to design excellence and functionality.
                  </p>
                </div>
                <div className="flex gap-3 items-center ">
                  <button
                    className="inline-flex items-center justify-center rounded-full md:w-10 md:h-10 w-7 h-7
                   border-2 border-[#335555] bg-[#335555] text-white
                       outline-2 outline-[#335555] outline-offset-3 p-0"
                  >
                    <MdArrowOutward className="md:text-xl text-sm" />
                  </button>
                </div>
              </div>
              <div className=" grid md:grid-cols-2 grid-cols-1 gap-8">
                <div className="">
                  <Image src={project1} width={590} height={396} alt="" className="object-cover w-dvw" data-aos="fade-right"></Image>
                  <div className="flex  md:gap-20 gap-10 items-start md:mt-5 mt-2">
                    <div>
                      {" "}
                      <p className="font-semibold md:text-2xl text-md">INTERIOR DESIGN AT TRIVANDRUM </p>
                      <p className="font-normal text-sm text-[#777]">Colonial wih contemporary</p>
                    </div>
                    <div>
                      <button className="md:text-3xl text-xl text-[#777]">
                        <MdArrowOutward />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="">
                  <Image src={project2} width={590} height={396} alt="" className="object-cover w-dvw" data-aos="fade-left"></Image>
                  <div className="flex  md:gap-20 gap-10 items-start md:mt-5 mt-2">
                    <div>
                      {" "}
                      <p className="font-semibold md:text-2xl text-md">INTERIOR DESIGN AT TRIVANDRUM </p>
                      <p className="font-normal text-sm text-[#777]">Colonial wih contemporary</p>
                    </div>
                    <div>
                      <button className="md:text-3xl text-xl text-[#777]">
                        <MdArrowOutward />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="">
                  <Image src={project3} width={590} height={396} alt="" className="object-cover w-dvw  " data-aos="fade-right"></Image>
                  <div className="flex  md:gap-20 gap-10 items-start md:mt-5 mt-2">
                    <div>
                      {" "}
                      <p className="font-semibold md:text-2xl text-md">INTERIOR DESIGN AT TRIVANDRUM </p>
                      <p className="font-normal text-sm text-[#777]">Colonial wih contemporary</p>
                    </div>
                    <div>
                      <button className="md:text-3xl text-xl text-[#777]">
                        <MdArrowOutward />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="">
                  <Image src={project4} width={590} height={396} alt="" className="object-cover w-dvw" data-aos="fade-left"></Image>
                  <div className="flex  md:gap-20 gap-10 items-start md:mt-5 mt-2">
                    <div>
                      {" "}
                      <p className="font-semibold md:text-2xl text-md">INTERIOR DESIGN AT TRIVANDRUM </p>
                      <p className="font-normal text-sm text-[#777]">Colonial wih contemporary</p>
                    </div>
                    <div>
                      <button className="md:text-3xl text-xl text-[#777]">
                        <MdArrowOutward />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center md:mt-20 mt-10">
                <button className="flex items-center gap-2 bg-[#335555] text-white md:px-5 px-3 py-2 rounded-full text-[10px] md:text-lg">
                  VIEW ALL DESIGN <MdArrowOutward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" ">
        <div
          className="relative w-full min-h-screen   "
          style={{
            backgroundImage: "url('/Image/design.png')",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="md:pt-15 pt-10 px-6 md:pb-20 pb-10">
              <div className="flex items-start justify-between md:mb-15 mb-6">
                <div className="flex flex-col text-[#335555]">
                  <h1 className=" md:text-5xl text-2xl font-bold mb-2">DESIGNED FOR YOU</h1>
                  <p className="font-light md:text-lg text-sm max-w-[930px] text-[#000]">
                    A showcase of our finest architectural, interior, and landscape designs. Explore our visionary
                    projects that blend creativity, functionality, and sustainability.
                  </p>
                </div>
                <div className="flex gap-3 items-center ">
                  <button
                    className="inline-flex items-center justify-center rounded-full md:w-10 md:h-10 w-7 h-7
                   border-2 border-[#335555] bg-[#335555] text-white
                       outline-2 outline-[#335555] outline-offset-3 p-0"
                  >
                    <MdArrowOutward className="md:text-xl text-sm" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <div className="flex md:flex-row flex-col gap-10 justify-center">
                  <div className="">

                    <Image src={design1} width={412} height={560} alt='' className='rounded-br-xl rounded-tl-xl lg:h-[560px]  h-[322px]  object-cover ' data-aos="zoom-in"/>
                  </div>
                  <div className="">
                    <Image src={design2} width={772} height={560} alt='' className='rounded-br-xl rounded-tl-xl object-cover' data-aos="zoom-in"/>

                  </div>
                </div>
                <div className="flex md:flex-row flex-col gap-10 justify-center">
                  <div className="">

                    <Image src={design3} width={772} height={560} alt='' className='rounded-br-xl rounded-tl-xl object-cover' data-aos="zoom-in"/>
                  </div>
                  <div className="">
                    <Image src={design4} width={412} height={560} alt='' className='rounded-br-xl rounded-tl-xl lg:h-[560px]  h-[322px] object-cover'data-aos="zoom-in" />

                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center md:mt-20 mt-10">
                <button className="flex items-center gap-2 bg-[#335555] text-white md:px-5 px-3 py-2 rounded-full text-[10px] md:text-lg">
                  VIEW ALL DESIGN <MdArrowOutward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Teams />
      <Footer />
    </>
  );
}
