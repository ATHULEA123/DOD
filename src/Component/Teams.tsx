"use client";

import img1 from "../../public/Image/img1.jpg";
import img2 from "../../public/Image/img2.jpg";
import img3 from "../../public/Image/img4.jpg";
import img4 from "../../public/Image/img5.jpg";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { useState, useEffect } from "react";

const teamMembers = [
    { name: "Ar. Dheeraj K Pradeep", role: "Architect | COA Registered", id: "COA|2022|152719", img: img1 },
    { name: "Abijith Gopinath", role: "Chief Designer | Interior Designer", id: "Specialist", img: img2 },
    { name: "Ankitha", role: "Interior Designer", id: "", img: img3 },
    { name: "Neethe", role: "Civil Engineer", id: "", img: img4 },
    { name: "New Member", role: "Structural Engineer", id: "", img: img1 },
];

export default function Teams() {
    const [startIndex, setStartIndex] = useState(0);
    const [visibleMembers, setVisibleMembers] = useState(4);
    const totalMembers = teamMembers.length;

    // Update visible cards count based on screen size
    useEffect(() => {
        const updateVisibleMembers = () => {
            if (window.innerWidth < 640) {
                setVisibleMembers(1); // Mobile: 1 card
            } else if (window.innerWidth < 1024) {
                setVisibleMembers(2); // Tablet: 2 cards
            } else {
                setVisibleMembers(4); // Large screen: 4 cards
            }
        };

        updateVisibleMembers();
        window.addEventListener("resize", updateVisibleMembers);
        return () => window.removeEventListener("resize", updateVisibleMembers);
    }, []);

    const nextImage = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % totalMembers);
    };

    const prevImage = () => {
        setStartIndex((prevIndex) => (prevIndex - 1 + totalMembers) % totalMembers);
    };

    return (
        <section className="relative w-full min-h-screen bg-[#335500] bg-cover bg-no-repeat"
            style={{ backgroundImage: "url(/Image/team.png)" }}>
            <div className="container">
                <div className="lg:pt-30 pt-10 px-6 lg:pb-4 md:py-10 py-5">
                    <div className="flex lg:items-start items-end justify-between ">
                        <div className="flex flex-col text-[#fff]">
                            <h1 className="lg:text-5xl md:ext-3xl text-[22px] font-bold">DOOR OF DREAM TEAM</h1>
                            <p className="font-medium md:text-lg text-sm max-w-[930px] md:mt-0 mt-2 md:mb-16 mb-6">
                                A passionate team of architects and designers dedicated to creating innovative, sustainable,
                                and client-centric spaces. We blend creativity with functionality to bring visionary designs to life.
                            </p>
                        </div>
                        <div className="flex gap-3 items-center lg:mb-0 md:mb-6 mb-3">
                            <button onClick={prevImage} className="flex items-center justify-center rounded-full md:w-12 md:h-12 w-9 h-9 border-2 border-[#fff] text-[#fff] hover:text-[#000] hover:bg-[#fff] hover:border-[#000]  transform transition-transform duration-300 hover:scale-105 ">
                                <FaArrowLeftLong className="md:text-xl text-sm" />
                            </button>
                            <button onClick={nextImage} className="flex items-center justify-center rounded-full md:w-12 md:h-12 w-9 h-9 border-2 border-[#fff] text-[#fff] hover:text-[#000] hover:bg-[#fff] hover:border-[#000]  transform transition-transform duration-300 hover:scale-105 ">
                                <FaArrowRightLong className="md:text-xl text-sm" />
                            </button>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                        {Array.from({ length: visibleMembers }).map((_, i) => {
                            const memberIndex = (startIndex + i) % totalMembers;
                            const member = teamMembers[memberIndex];

                            return (
                                <div key={memberIndex} className="flex flex-col items-center gap-4 bg-[#fff] md:pt-10 pt-7 pb-3 rounded-3xl opacity-80 w-full  transform transition-transform duration-300 hover:scale-105 hover:bg-a">
                                    <Image src={member.img} width={150} height={150} alt={member.name} className="rounded-full p-2 border-2 border-[#777]" />
                                    <div className="text-center">
                                        <h5 className="text-[#000] md:text-lg text-sm font-semibold mb-3">{member.name}</h5>
                                        <p className="font-medium text-sm text-[#414343] mb-1">{member.role}</p>
                                        {member.id && <p className="font-medium text-sm text-[#414343]">{member.id}</p>}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
