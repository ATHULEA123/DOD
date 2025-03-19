import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import { FaFacebookF, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
export default function Footer() {
  return (
    <>
      <section className=" pb-5 bg-[#E5E9DE] ">
        <div className="relative w-full min-h-screen   "
          style={{
            backgroundImage: "url(/project-bg.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="md:pt-15 pt-10 px-6">
              <div className="bg-[#D4DAD0] flex flex-col gap-3 rounded-3xl p-6 shadow-lg max-w-2xl w-full rounded-br-[120px] md:mb-20 mb-10">
                <p className="md:text-3xl text-lg text-[#335555] font-normal ">Looking To</p>
                <h1 className="md:text-5xl text-xl font-bold text-[#335555]">
                  REDEFINE YOUR SPACE?
                </h1>
                <p className="text-[#454A3F] md:text-lg text-sm font-medium">
                  Let's Create Something Extraordinary Together!
                </p>
                <div>
                  <button className="flex items-center gap-2 bg-[#335555] text-white md:px-5 px-3 py-2 rounded-full text-[10px] md:text-lg">
                    CONTACT US <MdArrowOutward />
                  </button>
                </div>
              </div>
              <div className="grid md:grid-cols-3 grid-cols-1 lg:place-items-center items-center  gap-15">
                <div className=" flex flex-col md:gap-12 gap-6">
                  <Image
                    src="/logo.png"
                    width={150}
                    height={50}
                    alt="Logo"
                  />
                  <p className="text-[#070B00] md:text-lg text-sm font-normal ">Experince Bespoke Architectural Design Crafted to Reflect Your Vision And Lifestyle</p>
                  <div className="flex gap-5">
                    <a href=""> <FaFacebookF className="md:text-2xl text-lg " /></a>
                    <a href="">        <FaInstagramSquare className="md:text-2xl text-lg" /></a>
                    <a href=""> <FaLinkedinIn className="md:text-2xl text-lg" /></a>
                  </div>
                </div>
                <div className="flex flex-col md:gap-4 gap-2">
                  <h3 className="text-[#33554A] font-semibold text-lg">QUICK LINKS</h3>
                  <p className="font-medium text-sm md:text-lg text-[#070B00]">Home</p>
                  <p className="font-medium text-sm md:text-lg text-[#070B00]">Our Services</p>
                  <p className="font-medium text-sm md:text-lg text-[#070B00]">About Us</p>
                  <p className="font-medium text-sm md:text-lg text-[#070B00]">Our Projects</p>
                </div>
                <div className=" flex flex-col md:gap-5 gap-3">
                  <h3 className="text-[#33554A] font-semibold text-lg ">SEND US A HI</h3>
                  <div className=" items-center gap-3">
                    <p className="flex items-center max-w-[320px] gap-4 md:text-xl text-md mb-2 font-bold"><span className="md:text-2xl text-lg "><IoLocationOutline /></span>
                      DOOR OF DREAM ARCHITECTS  </p>
                    <p className="max-w-[280px] ml-8 md:text-lg text-sm font-medium">Chowalloor Tower,West Fort Thrissur
                      Kerala,680004</p>
                  </div>
                  <div>
                  <p className="flex items-center gap-2 md:gap-4 text-sm md:text-lg font-medium max-w-full md:max-w-2xl flex-wrap break-words">
  <a href="mailto:doorofdreamarchitects22@gmail.com">
    <span className="text-lg md:text-2xl"><AiOutlineMail /></span>
  </a>
  <span className="truncate md:whitespace-normal">doorofdreamarchitects22@gmail.com</span>
</p>                  </div>
                  <div>
                    <p className="flex items-center gap-4 md:text-lg text-sm font-medium"><a href=""><span className="md:text-2xl text-lg"><IoCallOutline /></span></a>
                      8129334549 | 8606513875</p>
                  </div>
                </div>
              </div>
              <div className="md:mt-20 mt-10 flex justify-center items-center ">
                <p className="md:text-lg text-[12px] font-normal text-[#070B00]">&copy; 2025 Door of Dream Architects. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}