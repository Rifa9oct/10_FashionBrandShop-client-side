import fashion from "../../../src/assets/fashion.png"
const BestFashion = () => {

    return (
        <div className="flex flex-col lg:flex-row lg:relative max-w-[1200px] mx-auto mt-32 mb-14 lg:mb-52 p-5">
            <div className="md:w-[550px] md:h-[585px] mx-auto lg:mx-0 lg:z-10">
                <img src={fashion}/>
            </div>
            <div className="lg:absolute lg:z-0 lg:bottom-[-100px] lg:left-[400px]">
                <div className="ml-10 mt-10 md:mt-0 md:ml-52 lg:pl-48 mx-auto lg:mx-0">
                    <h1 className="text-3xl md:text-4xl font-semibold">Best Fashion<br /><span className="text-orange-600">Since 2010</span> </h1>
                    <p className="md:w-[350px] mt-6 text-gray-400">Elevate your style with our fashion brand, where contemporary trends meet timeless classics since 2010, offering you the best in modern, high-quality fashion. Explore our collection for a perfect blend of sophistication and comfort.</p>
                </div>

                <div className="flex gap-4  md:gap-10 justify-center rounded-2xl items-center mt-14 md:w-[550px] md:h-[200px] bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 shadow-md p-8 md:p-0 mx-auto lg:mx-0">
                    <div className="pr-3 md:pr-6 border-r-2 border-black">
                        <h1 className="text-2xl md:text-4xl">2010</h1>
                        <p className="mt-2 text-sm">Founded</p>
                    </div>
                    <div className="pr-3 md:pr-6 border-r-2 border-black">
                        <h1 className="text-2xl md:text-4xl">5000+</h1>
                        <p className="mt-2 text-sm">Product Sold</p>
                    </div>
                    <div>
                        <h1 className="text-2xl md:text-4xl">4500+</h1>
                        <p className="mt-2 text-sm">Best Reviews</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestFashion;