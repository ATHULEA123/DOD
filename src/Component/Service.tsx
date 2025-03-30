import Image from "next/image";
import background from "../../public/Image/servicebackground.png";
import icon1 from "../../public/Image/icon1.png";
import icon2 from "../../public/Image/icon2.png";
import icon3 from "../../public/Image/icon3.png";
import { MdArrowOutward } from "react-icons/md";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Service() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <section className="relative w-full min-h-[600px] flex flex-col items-center px-4 sm:px-8 pb-10">
      {/* Background Image */}
      <div className="absolute top-0 right-0 bottom-0 left-0">
        <Image
          src={background}
          alt="Service Background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 container mx-auto flex  md:flex-row justify-between items-start max-w-[1100px] py-10 px-4">
        {/* Left Content */}
        <div className="max-w-[600px] text-center md:text-left mt-6">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-[#335555]">Our Services</h1>
          <h4 className="text-base sm:text-lg text-[#335555]">
            We offer expert architectural, interior, and landscape design solutions, blending creativity with functionality.
            Our designs prioritize aesthetics, sustainability, and client-centric innovation.
          </h4>
        </div>

        {/* Right Side Arrow (Hidden on small screens) */}
        <div className="flex gap-3 items-center mt-6 ">
          <button className="inline-flex items-center justify-center rounded-full md:w-10 md:h-10 w-7 h-7
               border-2 border-[#335555] bg-[#335555] text-white
                outline-2 outline-[#335555] outline-offset-3 p-0"><MdArrowOutward className="md:text-xl text-sm" /></button>
        </div>
      </div>

      {/* Service Boxes */}
      <div className="relative z-10 flex flex-wrap justify-center gap-6 md:gap-8 mt-10">
        {[
          { id: "01", title: "Architectural", desc: "Crafting innovative and functional spaces that blend aesthetics with sustainability.", icon: icon1 },
          { id: "02", title: "Interior Design", desc: "Designing interiors that balance elegance, comfort, and practicality for modern living.", icon: icon2 },
          { id: "03", title: "Landscape Design", desc: "Creating sustainable outdoor spaces that harmonize with nature and human needs.", icon: icon3 }
        ].map((service, index) => (
          <div key={index} className="relative w-full sm:w-[300px] md:w-[340px]">
            {/* Border-Only Duplicate Box (Behind Original Box) */}
            <div
              className="absolute top-2 left-2 w-full h-full border-1 border-[#bdc6b1] rounded-lg z-10"
              style={{ borderRadius: "25px 25px 80px 25px", backgroundColor: "transparent" }}
            ></div>

            {/* Original Service Box */}
            <div className="relative z-0 bg-[#edf0ea] text-[#335555] flex flex-col py-8 md:py-12 rounded-lg s p-6"data-aos="fade-up"
     data-aos-anchor-placement="center-center"
              style={{ borderRadius: "25px 25px 80px 25px" }}>

              {/* Icon with Circle Wrapper */}
              <div className="relative flex items-center">
                {/* Circle Background */}
                <div className="absolute w-[30px] h-[30px] bg-[#bdc6b1] rounded-full left-3 top-3 z-0"></div>

                {/* Service Icon */}
                <div className="relative flex items-center justify-center w-[40px] h-[40px] z-10">
                  <Image src={service.icon} alt="Service Icon" width={40} height={40} />
                </div>
              </div>

              {/* Service Text */}
              <h3 className="text-xl font-bold mt-4">{service.id}</h3>
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm mt-2">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
