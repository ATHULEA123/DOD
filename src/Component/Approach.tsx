import { FaRegCircleCheck } from "react-icons/fa6";
import Image from "next/image";
export default function Approach(){
    return(
        <>
        <section className="">
                <div className="relative w-full min-h-screen  bg-[#335555] "
                    style={{
                        backgroundImage: "url('/Image/approach.png')",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }}
                >

                    <div className="container">
                        <div className=" py-15 px-4">
                            <div className="mb-10">
                                <h1 className="lg:text-5xl md:text-3xl text-xl text-[#fff] font-bold">OUR APPROACH </h1>
                            </div>
                            <div className="grid md:grid-cols-2 grid-col gap-10 text-[#fff] place-items-center ">
                                <div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-2xl"><FaRegCircleCheck /></span>
                                        <h4 className="text-xl font-bold">CONCEPT-DRIVEN DESIGN</h4>
                                    </div>
                                    <p className="mt-4 ml-7 font-normal max-w-[545px]">A passionate team of architects and designers dedicated to creating innovative, sustainable,
                                        and client-centric
                                        spaces. We blend creativity with functionality to bring visionary designs to life.</p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-2xl"><FaRegCircleCheck /></span>
                                        <h4 className="text-xl font-bold">DETAILED EXECUTION</h4>
                                    </div>
                                    <p className="mt-4 ml-7 font-normal max-w-[545px]">Once the design is finalized, we provide precise architectural and
                                        interior drawings for seamless implementation.</p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-2xl"><FaRegCircleCheck /></span>
                                        <h4 className="text-xl font-bold">CLIENT-CENTIC PROCESS</h4>
                                    </div>
                                    <p className="mt-4 ml-7 font-normal max-w-[545px]">Every project is tailored to reflect the vision, lifestyle, and needs of our clients.</p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-2xl"><FaRegCircleCheck /></span>
                                        <h4 className="text-xl font-bold"> SUSTAINABILITY & INNOVATION </h4>
                                    </div>
                                    <p className="mt-4 ml-7 font-normal max-w-[545px]">We integrate eco-friendly solutions, efficient planning, and modern design techniques to create timeless spaces.</p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-2xl"><FaRegCircleCheck /></span>
                                        <h4 className="text-xl font-bold">  COLLABORATIVE DEVELOPMENT</h4>
                                    </div>
                                    <p className="mt-4 ml-7 font-normal max-w-[545px]">We work closely with clients, contractors, and consultants to ensure quality and accuracy at every stage.</p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-2xl"><FaRegCircleCheck /></span>
                                        <h4 className="text-xl font-bold"> ATTENTION TO DETAIL  </h4>
                                    </div>
                                    <p className="mt-4 ml-7 font-normal max-w-[545px]">From materials to layouts, every element is thoughtfully considered to enhance functionality and aesthetics</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}