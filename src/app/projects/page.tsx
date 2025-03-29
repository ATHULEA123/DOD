"use client"
import Navbar from "@/Component/Navbar";
import Image from "next/image";
import HeroImage from "../../../public/Heropageimage.png"
import { useState } from "react";
import project1 from "../../../public/Image/project1.png";
import project2 from "../../../public/Image/project2.png";
import project3 from "../../../public/Image/project3.png";
import project4 from "../../../public/Image/project4.png";
import { MdArrowOutward } from "react-icons/md";
import Approach from "@/Component/Approach";
import Footer from "@/Component/Footer";

const categories = ["APARTMENT", "INTERIOR", "COMMERCIAL", "HOSPITALITY", "RESIDENTIAL", "VILLA"];

const projects = [
  {
    category: "APARTMENT",
    items: [
      { image: "/Image/project1.png", title: "Luxury Apartment", description: "Spacious and modern design with premium interiors." },
      { image: "/Image/project2.png", title: "Cozy Living Space", description: "Designed for comfort and functionality." },
      { image: "/Image/project3.png", title: "Urban Lifestyle", description: "Perfect blend of aesthetics and convenience." },
      { image: "/Image/project4.png", title: "Minimalist Apartment", description: "A clean and elegant approach to city living." },
      { image: "/Image/project1.png", title: "Skyline Views", description: "Panoramic views with sophisticated interiors." },
      { image: "/Image/project1.png", title: "Eco-Friendly Home", description: "Sustainable design with natural elements." }
    ]
  },
  {
    category: "INTERIOR",
    items: [
      { image: "/Image/project2.png", title: "Luxury Interiors", description: "Exclusive designs for a high-end lifestyle." },
      { image: "/Image/project1.png", title: "Classic Touch", description: "Timeless beauty with vintage aesthetics." },
      { image: "/Image/project3.png", title: "Modern Elegance", description: "Sleek and stylish interiors." },
      { image: "/Image/project4.png", title: "Artistic Decor", description: "A perfect mix of art and interior design." },
      { image: "/Image/project1.png", title: "Smart Homes", description: "Technology meets comfort in interior design." },
      { image: "/Image/project1.png", title: "Wooden Interiors", description: "Warm tones and natural materials for a cozy feel." }
    ]
  },
  {
    category: "COMMERCIAL",
    items: [
      { image: "/Image/project3.png", title: "Corporate Office", description: "Professional spaces with modern infrastructure." },
      { image: "/Image/project4.png", title: "Retail Store", description: "Attractive interiors for enhanced customer experience." },
      { image: "/Image/project1.png", title: "Co-Working Space", description: "Collaborative and inspiring environments." },
      { image: "/Image/project2.png", title: "Luxury Showroom", description: "A premium retail experience for high-end brands." },
      { image: "/Image/project1.png", title: "Minimalist Office", description: "Clean and efficient workspaces." },
      { image: "/Image/project1.png", title: "Creative Studio", description: "Designed for artists and creators." }
    ]
  },
  {
    category: "HOSPITALITY",
    items: [
      { image: "/Image/project4.png", title: "Luxury Hotel Suite", description: "A five-star experience with world-class amenities." },
      { image: "/Image/project1.png", title: "Resort Villa", description: "Relaxing atmosphere with beachfront views." },
      { image: "/Image/project1.png", title: "Boutique Hotel", description: "Unique and personalized stay experience." },
      { image: "/Image/project3.png", title: "Café & Lounge", description: "Modern café design with a cozy ambiance." },
      { image: "/Image/project2.png", title: "Spa & Wellness", description: "Tranquil environments for relaxation." },
      { image: "/Image/project2.png", title: "Themed Restaurant", description: "Dining experience with immersive design." }
    ]
  },
  {
    category: "RESIDENTIAL",
    items: [
      { image: "/Image/project4.png", title: "Luxury Hotel Suite", description: "A five-star experience with world-class amenities." },
      { image: "/Image/project1.png", title: "Resort Villa", description: "Relaxing atmosphere with beachfront views." },
      { image: "/Image/project1.png", title: "Boutique Hotel", description: "Unique and personalized stay experience." },
      { image: "/Image/project3.png", title: "Café & Lounge", description: "Modern café design with a cozy ambiance." },
      { image: "/Image/project2.png", title: "Spa & Wellness", description: "Tranquil environments for relaxation." },
      { image: "/Image/project2.png", title: "Themed Restaurant", description: "Dining experience with immersive design." }
    ]
  },
  {
    category: "VILLA",
    items: [
      { image: "/Image/project3.png", title: "Corporate Office", description: "Professional spaces with modern infrastructure." },
      { image: "/Image/project4.png", title: "Retail Store", description: "Attractive interiors for enhanced customer experience." },
      { image: "/Image/project1.png", title: "Co-Working Space", description: "Collaborative and inspiring environments." },
      { image: "/Image/project2.png", title: "Luxury Showroom", description: "A premium retail experience for high-end brands." },
      { image: "/Image/project1.png", title: "Minimalist Office", description: "Clean and efficient workspaces." },
      { image: "/Image/project1.png", title: "Creative Studio", description: "Designed for artists and creators." }
    ]
  },

];

export default function Projects() {

  const [active, setActive] = useState("APARTMENT");
  const [showAll, setShowAll] = useState(false);
  const activeProject = projects.find((project) => project.category === active);
  const displayedItems = activeProject ? (showAll ? activeProject.items : activeProject.items.slice(0, 4)) : [];



  return (
    <>

      <Navbar />

      <section
        className="w-full h-[450px] flex items-center justify-start bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage.src})` }}
      >
        <div className="container max-w-3xl px-6  text-white">
          <h1 className="lg:text-[72px] md:text-5xl text-4xl font-semibold leading-tight">
            OUR PROJECTS

          </h1>
          <p className="md:text-[30px] text-xl mt-4 max-w-[1110px]">A showcase of innovative architecture, elegant interiors,
            and sustainable landscapes. Each project
            reflects our commitment to design excellence and functionality.</p>

          <div className="flex items-center justify-start mt-4">
            <div className="w-[6px] h-[6px] bg-white rounded-full mr-2"></div>
            <div className="w-[30px] h-[6px] bg-white "></div>
          </div>
        </div>

      </section>

      <section>
        <div
          className="relative w-full min-h-screen bg-[#e3e7dd]"
          style={{
            backgroundImage: "url('/Image/architectural-bg.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >
          <div className="container py-12">
            <div className="flex gap-5 items-center pb-12">
              {projects.map((project) => (
                <h3
                  key={project.category}
                  onClick={() => setActive(project.category)}
                  className={`cursor-pointer font-semibold text-[20px] ${active === project.category ? "text-[#335555] underline decoration-2 underline-offset-8" : "text-black"}`}
                >
                  {project.category}
                </h3>
              ))}
            </div>

            {/* Display images and their respective content */}
            {activeProject && (
              <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                {displayedItems.map((item, index) => (
                  <div key={index}>
                    <Image src={item.image} width={590} height={396} alt="" className="object-cover w-dvw" />
                    <div className="flex md:gap-20 gap-10 items-start md:mt-5 mt-2">
                      <div>
                        <p className="font-semibold md:text-2xl text-md">{item.title}</p>
                        <p className="font-normal md:text-md text-sm text-[#777]">{item.description}</p>
                      </div>
                      <button className="md:text-3xl text-xl text-[#777]">
                        <MdArrowOutward />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* View More Button */}
            {activeProject && activeProject.items.length > 4 && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-6 py-3 bg-[#335555] text-white rounded-md hover:bg-[#222]"
                >
                  {showAll ? "View Less" : "View More"}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <Approach />
      <Footer />
    </>
  )
}
