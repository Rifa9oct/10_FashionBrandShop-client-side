import { useLoaderData } from "react-router-dom";
import DisplayLavis from "./DisplayLavis";

const Lavis = () => {
    const loadedData = useLoaderData();

    const datas = loadedData.filter(item => item.brand.toLowerCase().includes("levi's"));
    console.log(datas)

    return (
        <div>
            <div className="bannar hover:cursor-pointer relative max-w-[1320px] mt-10 mx-auto">
                <div className="carousel rounded-md h-[500px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/g3cwgtP/levis1.png" className="w-full"/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/sgqsm3m/Untiltled-1.jpg" className="w-full"/>
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
                    <p className="p-8 text-center mt-8 text-red-600">Levi's, short for Levi Strauss & Co., is an iconic American denim brand founded in 1853. Known for pioneering the blue jeans, Levi's has a rich heritage in creating durable, high-quality denim garments. Levi's jeans have become a symbol of timeless style, durability, and the spirit of American workwear. The brand's signature red tab and riveted pockets have made Levi's a classic choice for those seeking both fashion and functionality in their denim attire.</p>
                </div>
            </div>

            {/* card section*/}
            <h1 className="text-center text-4xl mb-10 mt-20">Our <span className="text-pink-600">Collection</span></h1>
            <div className="max-w-[1320px] mb-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                {
                    datas.map(data => <DisplayLavis key={data._id} data={data}></DisplayLavis>)
                }
            </div>
        </div>
    );
};

export default Lavis;