import { useLoaderData } from "react-router-dom";
import DisplayZara from "./DisplayZara";

const Zara = () => {
    const loadedData = useLoaderData();

    const datas = loadedData.filter(item => item.brand.toLowerCase().includes("zara"));
    console.log(datas)

    return (
        <div>
            <div className="bannar h-[500px] hover:cursor-pointer relative max-w-[1320px] mt-10 mx-auto">
                <div className="carousel rounded-lg h-[500px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/2tHxBy8/zara-2.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/cXMMGyR/Untitled-1.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/cQWpTjH/Untitled-1.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div className="intro opacity-60 rounded-b-lg">
                    <p className="p-3 md:p-8 md:mt-3 text-sm lg:text-lg text-center lg:mt-5 text-red-600">Zara is a renowned Spanish fashion brand founded in 1974. Known for its fast fashion approach, Zara is recognized for its ability to quickly adapt to evolving fashion trends and deliver affordable, stylish clothing to a global customer base. With a wide range of apparel and accessories for men, women, and children, Zara has become a go-to choice for those seeking up-to-the-minute fashion and design. The brand's emphasis on rapid production and distribution has allowed it to maintain a strong presence in the fashion industry.</p>
                </div>
            </div>

            {/* card section*/}
            <h1 className="text-center text-4xl mb-10 mt-20">Our <span className="text-pink-600">Collection</span></h1>
            <div className="max-w-[1320px] mb-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                {
                    datas.map(data => <DisplayZara key={data._id} data={data}></DisplayZara>)
                }
            </div>
        </div>
    );
};

export default Zara;