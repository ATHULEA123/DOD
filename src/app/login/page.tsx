import Image from "next/image"
import loginbg from "../../../public/Image/bg.webp";
import logo from "../../../public/Image/logo.png";
export default function login() {
    return (
        <>
            <div className="flex h-screen overflow-hidden">
                {/* Left Section - Image */}
                <div className="hidden lg:block w-2/5 h-full">
                    <Image src={loginbg} width={500} height={500} alt="" className="w-full h-full object-cover" />
                </div>

                {/* Right Section - Login Form */}
                <div className="lg:w-1/2 w-full flex flex-col gap-3 justify-center items-center p-6">
                    <div className="">
                        <Image src={logo} alt="Logo" width={120} height={50} priority={false} />
                    </div>

                    <h2 className="text-[#335555] md:text-3xl text-xl font-semibold">ADMIN LOGIN</h2>
                    <p className="md:text-[15px] text-[12px] text-[#2B3241]">Enter your details here to login into the dashboard</p>
                    <div className="flex flex-col gap-4 md:w-1/2 w-full md:mt-6 mt-3">
                        <div><label>Email</label>
                            <input type="email" placeholder="Email" className="border border-[#d9d9d9] p-4 w-full rounded-xl text-sm md:text-md" /></div>
                        <div> <label>Password</label>
                            <input type="password" placeholder="Password" className="border p-4 w-full rounded-xl border-[#d9d9d9] text-sm md:text-md" /></div>
                        <button className="text-white bg-[#335555]  w-full rounded-4xl p-4 md:mt-5 mt-3 text-sm md:text-lg">CONTINUE</button>
                    </div>
                    <div>
                        <div className="md:mt-20 mt-10">
                            <p className="md:text-lg  text-[12px] font-normal text-[#070B00]">&copy; 2025 Door of Dream Architects. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}