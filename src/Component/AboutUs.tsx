import Image from "next/image";
import background from "../../public/Image/bg.png";
import op from "../../public/Image/op.png";
import light from "../../public/Image/light.png";
import doorofdream from "../../public/Image/Door of dream.png";
export default function About() {
    return (
        <section className="relative flex w-full h-screen">
            {/* Left Section with Background Image */}
            <div className="flex-1 relative">
                <Image
                    src={background}
                    alt="Service Background"
                    width={500}
                    height={500}
                    className="object-cover "
                    quality={100}
                    priority
                />
                <div className="absolute top-80  sm:left-[460px]">
                    <Image
                        src={op}
                        alt="Op Image"
                        width={100}
                        height={100}
                        className="object-cover"
                        quality={100}
                        priority
                    />
                </div>
            </div>

            {/* Right Section with Other Images */}
            <div className="flex-1 relative flex flex-col  items-center justify-center">


                {/* Light Image */}
                <div className="absolute top-[350px]">
                    <Image
                        src={light}
                        alt="Light Image"
                        width={300}
                        height={300}
                        className="object-cover relative"
                        quality={100}
                        priority
                    />
                </div>
                <div className="absolute top-[680px]">
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
                {/* boxes */}

                <div className="absolute">
                    <div className="w-1 h-12 bg-[#6b6b6b]">

                    </div>
                    <div className="p-6 border-1 border-[#cdcdcd] shadow-lg rounded-2xl">
                        <h1 className="text-[36px] text-[#6b6b6b]">300+</h1>
                        <h4 className="w-[60px]">successfull project</h4>
                    </div>
                    
                </div>

            </div>
        </section>
    );
}
