import Navbar from "@/Component/Navbar";
import HeroImage from "../../../public/Heropageimage.png"
import design1 from "../../../public/Image/design1.png";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

import Footer from "@/Component/Footer";
import Approach from "@/Component/Approach";
export default function service() {
    return (
        <>
            <Navbar />

            <section
                className="w-full h-[450px] flex items-center justify-start bg-cover bg-center"
                style={{ backgroundImage: `url(${HeroImage.src})` }}
            >
                <div className="container max-w-3xl px-6  text-white">
                    <h1 className="lg:text-[72px] md:text-5xl text-4xl font-semibold leading-tight">
                        OUR SERVICES

                    </h1>
                    <p className="md:text-[30px] text-xl mt-4 max-w-[1110px]">We offer expert architectural, interior, and
                        landscape design solutions, blending creativity with functionality.
                        Our designs prioritize aesthetics, sustainability, and client-centric innovation.</p>

                    <div className="flex items-center justify-start mt-4">
                        <div className="w-[6px] h-[6px] bg-white rounded-full mr-2"></div>
                        <div className="w-[30px] h-[6px] bg-white"></div>
                    </div>
                </div>

            </section>

            <section className="">
                <div className="relative w-full min-h-screen   "
                    style={{
                        backgroundImage: "url('/Image/architectural-bg.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }}
                >

                    <div className=" container">
                        <div className=" py-10 px-4">
                            <div className="lg:text-5xl md:text-3xl text-xl font-bold text-[#335555]">
                                <h1> ARCHITECTURAL <br /> DESIGN</h1>

                            </div>
                            <div className=" flex flex-col lg:flex-row justify-between my-5 text-[#4b4b4b] gap-5">
                                <div className=" flex flex-col gap-5">
                                    <h3 className="font-semibold text-lg">Architetural Design Services</h3>

                                    <p className="max-w-[700px] md:text-[15px] text-sm">At Door of Dream Architects, we believe that architecture is more than just constructing buildings—it
                                        is about creating timeless, functional, and aesthetically inspiring spaces. Our approach integrates innovation with practicality,
                                        ensuring that each project is a perfect blend of design, sustainability, and efficiency.</p>
                                    <p className="max-w-[700px] md:text-[15px] text-sm">We focus on client-centric solutions, tailoring each architectural design to suit specific needs while maintaining structural
                                        integrity and visual appeal. Our designs emphasize spatial efficiency, natural lighting,
                                        and material sustainability, ensuring that every space enhances both usability and environmental responsibility.</p>
                                    <p className="max-w-[700px] md:text-[15px] text-sm">With a commitment to excellence and creativity, we strive to craft architectural solutions that stand the test of time. Whether it’s a
                                        residential, commercial, or public space, we transform ideas into well-planned, harmonious,
                                        and functional realities, shaping environments that inspire and endure.</p>
                                </div>
                                <div className="">
                                    <div className="flex md:gap-8 gap-8">

                                        <Image src={design1} width={236} height={320} alt='' className='rounded-br-xl rounded-tl-xl w-[155px] md:w-[236px] object-cover ' />
                                        <Image src={design1} width={236} height={320} alt='' className='rounded-br-xl rounded-tl-xl w-[155px]  md:w-[236px] object-cover ' />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center md:mt-16 mt-8">
                                <h2 className="font-bold md:text-lg text-[15px] text-[#000]">Do You Have a Project?</h2>

                                <button className="text-[#fff] bg-[#00CD4C] p-1 rounded-xl">
                                    <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                                        <FaWhatsapp className="text-2xl" />
                                    </a></button>
                                <Link href="/contact" className="">
                                    <button className=" flex items-center gap-2 bg-[#335555] text-white px-4 py-2 rounded-[18px] md:text-[15px] text-[10px] font-medium hover:bg-[#2a4a4a] transition">
                                        CONTACT US <MdArrowOutward />
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="">
                <div className="relative w-full min-h-screen  bg-[#e3e7dd] "
                    style={{
                        backgroundImage: "url('/Image/interior-bg.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }}
                >

                    <div className=" container">
                        <div className=" py-10 px-4">
                            <div className="lg:text-5xl md:text-3xl text-xl font-bold text-[#335555] text-right">
                                <h1> INTERIOR <br /> DESIGN</h1>

                            </div>
                            <div className=" flex flex-col lg:flex-row justify-between my-5 text-[#4b4b4b] gap-5">
                                <div className=" flex flex-col gap-5">
                                    <h3 className="font-semibold text-lg"> Interior Design Services</h3>

                                    <p className="max-w-[700px] md:text-[15px] text-sm">At Door of Dream Architects, we believe that architecture is more than just constructing buildings—it
                                        is about creating timeless, functional, and aesthetically inspiring spaces. Our approach integrates innovation with practicality,
                                        ensuring that each project is a perfect blend of design, sustainability, and efficiency.</p>
                                    <p className="max-w-[700px] md:text-[15px] text-sm">We focus on client-centric solutions, tailoring each architectural design to suit specific needs while maintaining structural
                                        integrity and visual appeal. Our designs emphasize spatial efficiency, natural lighting,
                                        and material sustainability, ensuring that every space enhances both usability and environmental responsibility.</p>
                                    <p className="max-w-[700px] md:text-[15px] text-sm">With a commitment to excellence and creativity, we strive to craft architectural solutions that stand the test of time. Whether it’s a
                                        residential, commercial, or public space, we transform ideas into well-planned, harmonious,
                                        and functional realities, shaping environments that inspire and endure.</p>
                                </div>
                                <div className="">
                                    <div className="flex md:gap-8 gap-8">

                                        <Image src={design1} width={236} height={320} alt='' className='rounded-br-xl rounded-tl-xl w-[155px] md:w-[236px] object-cover ' />
                                        <Image src={design1} width={236} height={320} alt='' className='rounded-br-xl rounded-tl-xl w-[155px]  md:w-[236px] object-cover ' />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center md:mt-16 mt-8">
                                <h2 className="font-bold md:text-lg text-[15px] text-[#000]">Do You Have a Project?</h2>

                                <button className="text-[#fff] bg-[#00CD4C] p-1 rounded-xl">
                                    <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                                        <FaWhatsapp className="text-2xl" />
                                    </a></button>
                                <Link href="/contact" className="">
                                    <button className=" flex items-center gap-2 bg-[#335555] text-white px-4 py-2 rounded-[18px] md:text-[15px] text-[10px] font-medium hover:bg-[#2a4a4a] transition">
                                        CONTACT US <MdArrowOutward />
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="">
                <div className="relative w-full min-h-screen   "
                    style={{
                        backgroundImage: "url('/Image/architectural-bg.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }}
                >

                    <div className=" container">
                        <div className=" py-10 px-4">
                            <div className="lg:text-5xl md:text-3xl text-xl font-bold text-[#335555]">
                                <h1> LANDSACPE <br /> DESIGN</h1>

                            </div>
                            <div className=" flex flex-col lg:flex-row justify-between my-5 text-[#4b4b4b] gap-5">
                                <div className=" flex flex-col gap-5">
                                    <h3 className="font-semibold text-lg">Landscape Design Services</h3>

                                    <p className="max-w-[700px] md:text-[15px] text-sm">At Door of Dream Architects, we believe that architecture is more than just constructing buildings—it
                                        is about creating timeless, functional, and aesthetically inspiring spaces. Our approach integrates innovation with practicality,
                                        ensuring that each project is a perfect blend of design, sustainability, and efficiency.</p>
                                    <p className="max-w-[700px] md:text-[15px] text-sm">We focus on client-centric solutions, tailoring each architectural design to suit specific needs while maintaining structural
                                        integrity and visual appeal. Our designs emphasize spatial efficiency, natural lighting,
                                        and material sustainability, ensuring that every space enhances both usability and environmental responsibility.</p>
                                    <p className="max-w-[700px] md:text-[15px] text-sm">With a commitment to excellence and creativity, we strive to craft architectural solutions that stand the test of time. Whether it’s a
                                        residential, commercial, or public space, we transform ideas into well-planned, harmonious,
                                        and functional realities, shaping environments that inspire and endure.</p>
                                </div>
                                <div className="">
                                    <div className="flex md:gap-8 gap-8">

                                        <Image src={design1} width={236} height={320} alt='' className='rounded-br-xl rounded-tl-xl w-[155px] md:w-[236px] object-cover ' />
                                        <Image src={design1} width={236} height={320} alt='' className='rounded-br-xl rounded-tl-xl w-[155px]  md:w-[236px] object-cover ' />
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center md:mt-16 mt-8">
                                <h2 className="font-bold md:text-lg text-[15px] text-[#000]">Do You Have a Project?</h2>

                                <button className="text-[#fff] bg-[#00CD4C] p-1 rounded-xl">
                                    <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                                        <FaWhatsapp className="text-2xl" />
                                    </a></button>
                                <Link href="/contact" className="">
                                    <button className=" flex items-center gap-2 bg-[#335555] text-white px-4 py-2 rounded-[18px] md:text-[15px] text-[10px] font-medium hover:bg-[#2a4a4a] transition">
                                        CONTACT US <MdArrowOutward />
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Approach />

            <Footer />
        </>
    )
}