import { FiFileText } from "react-icons/fi";
import { TfiUser } from "react-icons/tfi";

const Bannar = () => {
    return (
        <div>
            <div className="hero h-[536px]" style={{ backgroundImage: 'url(https://i.ibb.co/NKQFdNL/bannar.png)' }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="ml-10 mb-5 font-pacifico text-5xl text-pink-600">Find The Best Fashion Style For You</h1>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-4 lg:gap-12 justify-center mt-[-120px]">
                {/* card-1 */}
                <div className="bg-purple-100 m-5 md:m-0 lg:w-[350px] rounded-lg lg:h-[250px] border p-5">
                    <p className="p-[14px] lg:p-5 mx-auto mb-3 w-16 h-16 lg:w-[85px] lg:h-[85px] rounded-full bg-blue-500"><FiFileText className="text-4xl lg:text-5xl text-white"></FiFileText></p>
                    <h1 className="md:text-2xl text-center">Management</h1>
                    <p className="text-xs md:text-sm mt-3 text-center">Our management team is dedicated to excellence, ensuring efficient operations and strategic leadership to drive success in the industry</p>
                </div>

                {/* card-2 */}
                <div className="bg-orange-200 m-5 md:m-0 lg:w-[350px] rounded-lg lg:h-[250px] border py-8 md:py-0 md:pt-16 lg:pt-20 px-5">
                    <h1 className="md:text-2xl text-center">Our call service <br />World Quality</h1>
                    <p className="text-xs md:text-sm mt-3 text-center">With world-class call service, we offer unparalleled support, delivering top-tier quality and satisfaction to our valued customers</p>
                </div>

                {/* card-3 */}
                <div className="bg-purple-100 m-5 md:m-0 lg:w-[350px] rounded-lg lg:h-[250px] border p-5">
                    <p className="p-[14px] lg:p-5 mx-auto mb-3 w-16 h-16 lg:w-[85px] lg:h-[85px] rounded-full bg-blue-500"><TfiUser className="text-4xl lg:text-5xl text-white"></TfiUser></p>
                    <h1 className="md:text-2xl text-center">Support</h1>
                    <p className="text-xs md:text-sm mt-3 text-center">Our dedicated support team is here to provide you with unparalleled assistance and guidance, ensuring your needs are met with care and expertise.</p>
                </div>
            </div>
        </div>
    );
};

export default Bannar;