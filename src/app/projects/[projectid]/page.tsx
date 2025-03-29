"use client"
import { useState } from "react";
import HeroImage from "../../../../public/Heropageimage.png"
import Navbar from "@/Component/Navbar";
import Image from "next/image";
import design1 from "../../../../public/Image/design1.png";
import design2 from "../../../../public/Image/design2.png";
import design3 from "../../../../public/Image/design3.png";
import design4 from "../../../../public/Image/deisign4.png";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Footer from "@/Component/Footer";
import Teams  from "@/Component/Teams";

const images = ["/Image/interior1.png",
  "/Image/project1.png",
  "/Image/project2.png",
];

export default function ProjectDetails() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <>
      <Navbar />

      <section
        className="w-full h-[450px] flex items-center justify-start bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage.src})` }}
      >
        <div className="container max-w-3xl px-6  text-white">
          <h1 className="lg:text-[72px] md:text-5xl text-4xl font-semibold leading-tight">
            INTERIOR DESIGN <br /> PROPOSAL

          </h1>
          <p className="md:text-[30px] text-xl mt-4 max-w-[1110px]">For Residence of Vaisakh</p>

          <div className="flex items-center justify-start mt-4">
            <div className="w-[6px] h-[6px] bg-white rounded-full mr-2"></div>
            <div className="w-[30px] h-[6px] bg-white"></div>
          </div>
        </div>

      </section>

      <section>
        <div className="relative w-full min-h-screen bg-[#e3e7dd]  "
          style={{
            backgroundImage: "url('/Image/architectural-bg.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >
          <div className="container">
            <div className="py-10">
              <div className="flex lg:flex-row flex-col  justify-around">
                <div className="flex flex-col gap-4 text-[#454644]">
                  <p className="text-md font-bold ">Location:Trivandrum</p>
                  <p className="text-md font-bold ">Typology:Residential</p>
                  <p className="text-md font-bold ">Service:interior Design</p>
                  <p className="text-md font-bold ">Date:2025</p>
                  <p className="text-md font-bold ">Size SQf:3656</p>
                  <p className="text-md font-bold ">Location:Trivandrum</p>
                </div>
                <div className="font-bold text-md text-[#454644] flex flex-col gap-5">
                  <h4 className="">Interior Design Proposal for Residence of Mr.Vaisakh</h4>
                  <p className="max-w-[800px] font-normal">At Door of Dream Architects, we believe that interior design is an art that combines aesthetics, functionality,
                    and comfort. Our approach is centered around creating spaces that reflect elegance, personality,
                    and practicality, ensuring that every design enhances the way people live, work, and interact.</p>
                  <div className="">
                    <div className="relative">
                      <Image src={images[currentIndex]} width={820} height={462} alt="" /></div>
                    <div className="flex gap-3 items-center absolute bottom-16 right-50">
                      <button onClick={prevImage}
                        className="flex items-center justify-center rounded-full md:w-12 md:h-12 w-5 h-5 border-2 text-[#fff] border-[#fff] hover:text-[#777] hover:bg-[#fff] hover:border-[#000]">
                        <FaArrowLeftLong className="md:text-xl text-sm " />
                      </button>
                      <button onClick={nextImage}
                        className="flex items-center justify-center rounded-full md:w-12 md:h-12 w-5 h-5  border-2 text-[#fff] border-[#fff] hover:text-[#777] hover:bg-[#fff] hover:border-[#000]">
                        <FaArrowRightLong className="md:text-xl text-sm " />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-10">
          <div className="flex flex-col gap-10">
            <div className="flex md:flex-row flex-col gap-10 justify-center">
              <div className="">

                <Image src={design1} width={412} height={560} alt='' className='rounded-br-xl rounded-tl-xl lg:h-[560px]  h-[322px]  object-cover ' />
              </div>
              <div className="">
                <Image src={design2} width={772} height={560} alt='' className='rounded-br-xl rounded-tl-xl object-cover' />

              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-10 justify-center">
              <div className="">

                <Image src={design3} width={772} height={560} alt='' className='rounded-br-xl rounded-tl-xl object-cover' />
              </div>
              <div className="">
                <Image src={design4} width={412} height={560} alt='' className='rounded-br-xl rounded-tl-xl lg:h-[560px]  h-[322px] object-cover' />

              </div>
            </div>
          </div>

        </div>
      </section>
      <Teams/>
      <Footer/>
    </>
  );
}
