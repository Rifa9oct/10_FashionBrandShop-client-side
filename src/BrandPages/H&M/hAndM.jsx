import { useLoaderData } from "react-router-dom";
import DisplayHAndM from "./DisplayHAndM";

const HAndM = () => {
    const loadedData = useLoaderData();

    const datas = loadedData.filter(item => item.brand.toLowerCase().includes("h$m"));
    console.log(datas)

    return (
        <div>
            <div className="bannar hover:cursor-pointer relative max-w-[1320px] mt-10 mx-auto">
                <div className="carousel rounded-md h-[500px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/Ttr751n/Untiktled-1.jpg" className="w-full"/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/j8Bc7PG/Unftitled-1.jpg" className="w-full"/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/xGm6Scs/gucci-loafers.png" className="w-full"/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div className="intro opacity-60 rounded-b-lg">
                    <p className="p-8 text-center mt-8 text-red-600">H&M, or Hennes & Mauritz, is a well-known global fashion brand based in Sweden. Established in 1947, H&M is recognized for its affordable and trend-focused clothing and accessories for men, women, and children. With a commitment to sustainability, H&M has also been at the forefront of promoting environmentally conscious practices in the fashion industry. Its diverse range of styles and accessible pricing has made it a popular choice for fashion-conscious consumers worldwide.</p>
                </div>
            </div>

            {/* card section*/}
            <h1 className="text-center text-4xl mb-10 mt-20">Our <span className="text-pink-600">Collection</span></h1>
            <div className="max-w-[1320px] mb-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                {
                    datas.map(data => <DisplayHAndM key={data._id} data={data}></DisplayHAndM>)
                }
            </div>
        </div>
    );
};

export default HAndM;