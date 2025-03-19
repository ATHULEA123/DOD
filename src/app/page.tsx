import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import project1 from "../../public/Image/project1.png";
import project2 from "../../public/Image/project2.png"
import project3 from "../../public/Image/project3.png"
import project4 from "../../public/Image/project4.png"
import design1 from "../../public/Image/design1.png"
import design2 from "../../public/Image/design2.png"
import design3 from "../../public/Image/design3.png"
import design4 from "../../public/Image/deisign4.png"

import img1 from "../../public/Image/img1.jpg"
import img2 from "../../public/Image/img2.jpg"
import img3 from "../../public/Image/img4.jpg"
import img4 from "../../public/Image/img5.jpg"

import background from "../../public/Image/bg.png";
import op from "../../public/Image/op.png";
import light from "../../public/Image/light.png";
import doorofdream from "../../public/Image/Door of dream.png";
// import team from "../../public/Image/team.png"

export default function Home() {
  return (
    <>

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
          <div className=" lamp  right-28 flex justify-center items-center w-[100%]  h-[100%]">
            <Image
              src={light}
              alt="Light Image"
              // width={60%}
              // height={60%}
              className="object-cover w-[170px] h-[170px] md:w-[300px] md:h-[300px]"

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

          <div className="box1 flex items-center flex-col absolute top-[60%] left-[10%] w-[65px]  ">
            <div className="w-0.5 h-12" style={{ background: "linear-gradient( #F8F8F8,#CECECE)" }}></div>
            <div className="md:px-6 md:py-2 px-3 py-1 border-[1px] shadow-lg rounded-2xl text-center border-[#dcd7d7]"
            >
              <h1 className="text-[14px] md:text-[22px] text-[#6b6b6b]">300+</h1>
              <h4 className="w-[80px] text-[10px]  md:text-[13px]">successful project</h4>
            </div>
          </div>

          {/* boxes 2*/}

          <div className="box2 flex items-center flex-col absolute top-[35%] left-[20%]  w-[65px] md:top-[25%]">
            <div className="w-0.5 h-12" style={{ background: "linear-gradient( #F8F8F8,#CECECE)" }}></div>
            <div className="md:px-6 md:py-2 px-3 py-1 border border-[#cdcdcd] shadow-lg rounded-2xl text-center">
              <h1 className="text-[14px] md:text-[22px] text-[#6b6b6b]">04+</h1>
              <h4 className="w-[60px] text-[9px]  md:text-[16px]">Award Wins</h4>
            </div>
          </div>

          {/* boxes 3*/}

          <div className="box3 flex items-center flex-col absolute top-[35%] md:top-[25%] right-[20%] w-[65px] ">
            <div className="w-0.5 h-12" style={{ background: "linear-gradient( #F8F8F8,#CECECE)" }}></div>
            <div className="md:px-6 md:py-2 px-3 py-1 border border-[#cdcdcd] shadow-lg rounded-2xl text-center">
              <h1 className="text-[14px] md:text-[22px] text-[#6b6b6b]">10+</h1>
              <h4 className="w-[80px] text-[9px]  md:text-[16px]">Year Of Experience</h4>
            </div>
          </div>

          {/* boxes 4*/}

          <div className="box4 flex items-center flex-col absolute top-[60%] right-[10%] w-[65px] ">
            <div className="w-0.5 h-12" style={{ background: "linear-gradient( #F8F8F8,#CECECE)" }}></div>
            <div className="md:px-6 md:py-2 px-3 py-1 border border-[#cdcdcd] shadow-lg rounded-2xl text-center">
              <h1 className="text-[14px] text-[#6b6b6b]">250+</h1>
              <h4 className="w-[60px] text-[9px]  md:text-[16px]">Happy Clients</h4>
            </div>
          </div>

        </div>

      </section>




      <section className="bg-[#EBEEE7]">
        <div className="relative w-full min-h-screen   "
          style={{
            backgroundImage: "url(/project-bg.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="md:pt-15 pt-10 px-6 md:pb-20 pb-10">
              <div className="flex items-start justify-between md:mb-15 mb-6">
                <div className="flex flex-col text-[#335555]">
                  <h1 className=" md:text-5xl text-2xl font-bold mb-2">OUR PROJECTS</h1>
                  <p className="font-light md:text-lg text-sm max-w-[930px] text-[#000]">A showcase of innovative architecture, elegant interiors, and sustainable landscapes.
                    Each project reflects our commitment to design excellence and functionality.</p>
                </div>
                <div className="flex gap-3 items-center ">
                  <button className="inline-flex items-center justify-center rounded-full md:w-10 md:h-10 w-7 h-7
                   border-2 border-[#335555] bg-[#335555] text-white
                       outline-2 outline-[#335555] outline-offset-3 p-0"><MdArrowOutward className="md:text-xl text-sm" /></button>
                </div>
              </div>
              <div className=" grid md:grid-cols-2 grid-cols-1 gap-8">
                <div className="">
                  <Image src={project1} width={590} height={396} alt="" className="object-cover w-dvw"></Image>
                  <div className="flex  md:gap-20 gap-10 items-start md:mt-5 mt-2">
                    <div> <p className="font-semibold md:text-2xl text-md">INTERIOR DESIGN AT TRIVANDRUM </p>
                      <p className="font-normal text-sm text-[#777]">Colonial wih contemporary</p></div>
                    <div>
                      <button className="md:text-3xl text-xl text-[#777]"><MdArrowOutward /></button>
                    </div>
                  </div>
                </div>
                <div className="">
                  <Image src={project2} width={590} height={396} alt="" className="object-cover w-dvw"></Image>
                  <div className="flex  md:gap-20 gap-10 items-start md:mt-5 mt-2">
                    <div> <p className="font-semibold md:text-2xl text-md">INTERIOR DESIGN AT TRIVANDRUM </p>
                      <p className="font-normal text-sm text-[#777]">Colonial wih contemporary</p></div>
                    <div>
                      <button className="md:text-3xl text-xl text-[#777]"><MdArrowOutward /></button>
                    </div>
                  </div>
                </div>
                <div className="">
                  <Image src={project3} width={590} height={396} alt="" className="object-cover w-dvw"></Image>
                  <div className="flex  md:gap-20 gap-10 items-start md:mt-5 mt-2">
                    <div> <p className="font-semibold md:text-2xl text-md">INTERIOR DESIGN AT TRIVANDRUM </p>
                      <p className="font-normal text-sm text-[#777]">Colonial wih contemporary</p></div>
                    <div>
                      <button className="md:text-3xl text-xl text-[#777]"><MdArrowOutward /></button>
                    </div>
                  </div>
                </div>
                <div className="">
                  <Image src={project4} width={590} height={396} alt="" className="object-cover w-dvw"></Image>
                  <div className="flex  md:gap-20 gap-10 items-start md:mt-5 mt-2">
                    <div> <p className="font-semibold md:text-2xl text-md">INTERIOR DESIGN AT TRIVANDRUM </p>
                      <p className="font-normal text-sm text-[#777]">Colonial wih contemporary</p></div>
                    <div>
                      <button className="md:text-3xl text-xl text-[#777]"><MdArrowOutward /></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center md:mt-20 mt-10">
                <button className="flex items-center gap-2 bg-[#335555] text-white md:px-5 px-3 py-2 rounded-full text-[10px] md:text-lg">
                  VIEW ALL DESIGN  <MdArrowOutward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" ">
        <div className="relative w-full min-h-screen"
          style={{
            backgroundImage: "url(../../public/Image/design.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="md:pt-15 pt-10 px-6 md:pb-20 pb-10">
              <div className="flex items-start justify-between md:mb-15 mb-6">
                <div className="flex flex-col text-[#335555]">
                  <h1 className=" md:text-5xl text-2xl font-bold mb-2">DESIGNED FOR YOU</h1>
                  <p className="font-light md:text-lg text-sm max-w-[930px] text-[#000]">A showcase of our finest architectural, interior, and landscape designs. Explore our
                    visionary projects that blend creativity, functionality, and sustainability.</p>
                </div>
                <div className="flex gap-3 items-center ">
                  <button className="inline-flex items-center justify-center rounded-full md:w-10 md:h-10 w-7 h-7
                   border-2 border-[#335555] bg-[#335555] text-white
                       outline-2 outline-[#335555] outline-offset-3 p-0"><MdArrowOutward className="md:text-xl text-sm" /></button>
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <div className="flex md:flex-row flex-col gap-10 justify-center">
                  <div className="">
                    <Image src={design1} width={412} height={560} alt='' className='rounded-br-xl rounded-tl-xl md:h-[560px] h-[300px] object-cover ' />
                  </div>
                  <div className="">
                    <Image src={design2} width={772} height={560} alt='' className='rounded-br-xl rounded-tl-xl' />
                  </div>
                </div>
                <div className="flex md:flex-row flex-col gap-10 justify-center">
                  <div className="">
                    <Image src={design3} width={772} height={560} alt='' className='rounded-br-xl rounded-tl-xl' />
                  </div>
                  <div className="">
                    <Image src={design4} width={412} height={560} alt='' className='rounded-br-xl rounded-tl-xl md:h-[560px] h-[300px] object-cover' />
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
      <section className="">
        <div className="relative w-full min-h-screen  bg-[#335500] "
          style={{
            backgroundImage: "url(/Image/team.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className=" container ">
            <div className="md:pt-30 pt-10 px-6 pb-4 ">
              <div className="flex items-start justify-between md:mb-16 mb-6">
                <div className="flex flex-col text-[#fff]">
                  <h1 className=" md:text-5xl text-2xl font-bold">DOOR OF DREAM TEAM</h1>
                  <p className="font-medium md:text-lg text-sm max-w-[930px]">A passionate team of architects and designers dedicated to creating innovative, sustainable, and
                    client-centric spaces. We blend creativity with functionality to bring visionary designs to life.</p>
                </div>
                <div className="flex gap-3 items-center">
                  <button className="flex items-center justify-center rounded-full md:w-15 md:h-15 w-7 h-7 border-2 border-[#fff] hover:text-[#000] hover:bg-[#fff] hover:border-[#000]"><FaArrowLeftLong className="md:text-2xl text-sm" /></button>
                  <button className="flex items-center justify-center rounded-full md:w-15 md:h-15 w-7 h-7  border-2 border-[#fff] hover:text-[#000] hover:bg-[#fff] hover:border-[#000]"><FaArrowRightLong className="md:text-2xl text-sm" /></button>
                </div>
              </div>
              <div className="grid md:grid-cols-4 grid-col-1 md:mt-10 mt-5 md:gap-6 gap-3">
                <div className='flex flex-col items-center gap-4 bg-[#fff] md:pt-14 pt-7 md:pb-6 pb-3 rounded-3xl opacity-80 w-full md:max-w-xl max-w-lg'>
                  <Image src={img1} width={150} height={0} alt='' className='rounded-full p-2 border-2 border-[#777]' />
                  <div className="text-center">
                    <h5 className='text-[#000] md:text-lg text-sm font-semibold mb-3'>Ar.Dheeraj K Pradeep</h5>
                    <p className='font-medium text-sm text-[#414343] mb-1'>Architect | COA Registered</p>
                    <p className='font-medium text-sm text-[#414343]'>(COA|2022|152719)</p>
                  </div>
                </div>
                <div className='flex flex-col items-center gap-4 bg-[#fff] md:pt-14 pt-7 md:pb-6 pb-3  rounded-3xl opacity-80 w-full max-w-2xl'>
                  <Image src={img2} width={150} height={0} alt='' className='rounded-full p-2 border-2 border-[#777]' />
                  <div className="text-center">
                    <h5 className='text-[#000] md:text-lg text-sm font-semibold mb-3'>Abijith Gopinath</h5>
                    <p className='font-medium text-sm text-[#414343] mb-1'>Cheif Designer | interior Designer</p>
                    <p className='font-medium text-sm text-[#414343]'>Specialist</p>
                  </div>
                </div>
                <div className='flex flex-col items-center gap-4 bg-[#fff] md:pt-14 pt-7 md:pb-6 pb-3 rounded-3xl opacity-80 w-full max-w-2xl'>
                  <Image src={img3} width={150} height={0} alt='' className='rounded-full p-2 border-2 border-[#777]' />
                  <div className="text-center">
                    <h5 className='text-[#000] md:text-lg text-sm font-bold mb-3'>Ankitha</h5>
                    <p className='font-medium text-sm text-[#414343]'>interior Designer</p>
                  </div>
                </div>
                <div className='flex flex-col items-center gap-4 bg-[#fff] md:pt-14 pt-7 md:pb-6 pb-3 rounded-3xl opacity-80 w-full max-w-2xl'>
                  <Image src={img4} width={150} height={0} alt='' className='rounded-full p-2 border-2 border-[#777]' />
                  <div className="text-center">
                    <h5 className='text-[#000] md:text-lg text-sm font-bold mb-3'>Neethe</h5>
                    <p className='font-medium text-sm text-[#414343]'>Civil Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




    </>
  );
}