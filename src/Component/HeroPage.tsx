"use client";


import HeroImage from "../../public/Heropageimage.png";

export default function Hero() {
    return (
        <section 
            className="w-full min-h-screen flex items-center justify-start bg-cover bg-center"
            style={{ backgroundImage: `url(${HeroImage.src})` }}
        >
            <div className="container max-w-3xl px-6  text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl  font-semibold leading-tight">
                    WE CAN{" "}
                    <span className="border-text px-2">BUILD</span>
                    <br />
                    YOUR DREAM
                </h1>
                <p className="text-[20px] md:text-2xl lg:text-4xl mt-4">Bring Smile to Your Face</p>

                <div className="flex items-center justify-start mt-4">
                    <div className="w-[6px] h-[6px] bg-white rounded-full mr-2"></div>
                    <div className="w-[30px] h-[6px] bg-white"></div>
                </div>
            </div>
        </section>
    );
}
