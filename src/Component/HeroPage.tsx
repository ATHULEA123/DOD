

"use client";

import { useState, useEffect } from "react";

const images = [
    "/Heropageimage.png",
    "/Image/project2.png",
    "/Image/project2.png",
    "/Image/project3.png",
    "/Image/project2.png",
]; // Add more images as needed

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <section
            className="w-full min-h-screen flex items-center justify-start bg-cover bg-center transition-all duration-700"
            style={{ backgroundImage: `url(${images[currentImage]})` }}
        >
            <div className="container max-w-3xl px-6 text-white">
                <h1 className="lg:text-[72px] md:text-5xl text-4xl font-semibold leading-tight">
                    WE CAN{" "}
                    <span className="px-2 text-transparent" style={{ WebkitTextStroke: "2px white" }}>
                        BUILD
                    </span>
                    <br />
                    YOUR DREAM
                </h1>
                <p className="md:text-[32px] text-2xl mt-4">Bring Smile to Your Face</p>

                {/* Dynamic Progress Indicator */}
                <div className="flex items-center justify-start mt-4 space-x-2">
                    {images.map((_, index) => (
                        <div key={index} className="flex items-center">
                            {currentImage === index ? (
                                // Long line for active image
                                <div className="w-[40px] h-[6px] bg-white transition-all"></div>
                            ) : (
                                // Small dots for inactive images
                                <div className="w-[10px] h-[10px] bg-gray-400 rounded-full transition-all"></div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

