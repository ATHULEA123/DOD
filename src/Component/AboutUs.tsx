// import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
// import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import { useEffect, useRef } from "react";




import background from "../../public/Image/bg.png";
import op from "../../public/Image/op.png";
import light from "../../public/Image/light.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import doorofdream from "../../public/Image/Door of dream.png";
// import team from "../../public/Image/team.png"
gsap.registerPlugin(ScrollTrigger);
export default function AboutUS() {
  const lampRef = useRef(null);

  useEffect(() => {
    gsap.to(lampRef.current, {
      rotation: -180,
      ease: "power2.out",
      scrollTrigger: {
        trigger: lampRef.current,
        start: "top bottom",
        end: "center center",
        scrub: 1,
      },
    });
  }, []);

  return (
   

      <section className="servicesection container  flex w-full ">

        <div className="w-[50%] relative serviceImg">
          <Image
            src={background}
            alt="Service Background"
            width={500}
            height={500}
            className="object-cover serviceBg"
            quality={100}
            priority
          />

          <div className="absolute top-1/2  sm:left-[460px] hidden md:block">
            <Image
              src={op}
              alt="Op Image"
              
              height={100}
              className="object-cover "
              quality={100}
              priority
            />
          </div>
        </div>


        {/* Right Section with Other Images */}
        <div className="w-[50%] relative flex flex-col serviceRight">
          <div className="mt-6">
            <h1 className="text-4xl text-[#335555] font-bold">WHO WE ARE?</h1>
          </div>
          <div className="mt-6">
            <h6 className="text-2xl max-w-full text-[13px]">At Door of Dream, we believe architecture is more than just  structures—it’s about crafting spaces that inspire, function effortlessly, and stand the test of time. Our design philosophy is rooted in a client-focused approach, ensuring every project reflects the unique needs, aspirations, and lifestyles of those who inhabit it.</h6>
          </div>
          {/* Light Image */}
          <div className=" lamp  right-28 flex justify-center items-center w-[100%]  h-[100%]"ref={lampRef}>
            <Image
              src={light}
              alt="Light Image"
              // width={60%}
              // height={60%}
              className="object-cover w-[170px] h-[170px] md:w-[300px] md:h-[300px] transition-transform duration-100  rotate-180"
             
            
              quality={100}
              priority
            />
          </div>
          <div className="absolute top-[85%]">
            <Image
              src={doorofdream}
              alt="Light Image"
              // width={300}
              // height={300}
              className="object-cover"
              quality={100}
              priority
            />
          </div>

          {/* boxes 1*/}

          <div className="box1 flex items-center flex-col absolute top-[60%] left-[10%] w-[65px] ">
            <div className="w-0.5 h-12" style={{ background: "linear-gradient( #F8F8F8,#CECECE) " }}></div>
            <div className="px-8 py-2 border-[1px] shadow-lg rounded-2xl text-center border-[#dcd7d7]"
            >
              <h1 className="text-[16px] md:text-[22px] text-[#6b6b6b]">300+</h1>
              <h4 className="w-[60px] text-[10px]  md:text-[16px]">successful project</h4>
            </div>
          </div>

          {/* boxes 2*/}

          <div className="box2 flex items-center flex-col absolute top-[35%] left-[20%]  w-[65px] md:top-[25%]">
            <div className="w-0.5 h-12" style={{ background: "linear-gradient( #F8F8F8,#CECECE)" }}></div>
            <div className="px-6 py-2 border border-[#cdcdcd] shadow-lg rounded-2xl text-center">
              <h1 className="text-[16px] md:text-[22px] text-[#6b6b6b]">04+</h1>
              <h4 className="w-[60px] text-[10px]  md:text-[16px]">Award Wins</h4>
            </div>
          </div>

          {/* boxes 3*/}

          <div className="box3 flex items-center flex-col absolute top-[35%] md:top-[25%] right-[20%] w-[65px] ">
            <div className="w-0.5 h-12" style={{ background: "linear-gradient( #F8F8F8,#CECECE)" }}></div>
            <div className="px-8 py-2 border border-[#cdcdcd] shadow-lg rounded-2xl text-center">
              <h1 className="text-[16px] md:text-[22px] text-[#6b6b6b]">10+</h1>
              <h4 className="w-[60px] text-[10px]  md:text-[16px]">Year Of Experience</h4>
            </div>
          </div>

          {/* boxes 4*/}

          <div className="box4 flex items-center flex-col absolute top-[60%] right-[10%] w-[65px] ">
            <div className="w-0.5 h-12" style={{ background: "linear-gradient( #F8F8F8,#CECECE)" }}></div>
            <div className="px-6 py-2 border border-[#cdcdcd] shadow-lg rounded-2xl text-center">
              <h1 className="text-[22px] text-[#6b6b6b]">250+</h1>
              <h4 className="w-[60px] text-[10px]  md:text-[16px]">Happy Clients</h4>
            </div>
          </div>

        </div>

      </section>

      
    )
};