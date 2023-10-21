import { useLoaderData } from "react-router-dom";
import DisplayAdidas from "./DisplayAdidas";


const Adidas = () => {
    const loadedData = useLoaderData();
    const datas = loadedData.filter(item => item.brand.toLowerCase().includes("adidas"));
    console.log(datas)

    return (
        <div>
            <div className="bannar hover:cursor-pointer relative max-w-[1320px] mt-10 mx-auto">
                <div className="carousel rounded-md h-[500px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/v44qyM1/Untitled-1.jpg" className="w-full"/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/7kznVdF/Untitled-1.png" className="w-full"/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/qMMdCwd/Untitled-1.png" className="w-full"/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div className="intro opacity-60 rounded-b-lg">
                    <p className="p-8 text-center mt-8 text-red-600">Adidas is a renowned global sportswear and footwear brand known for its innovation and performance-driven products. With a heritage dating back to 1949, Adidas has consistently delivered cutting-edge athletic gear and fashion-forward designs, catering to athletes and fashion enthusiasts alike. The iconic three-stripe logo has become a symbol of quality, style, and the pursuit of excellence in the world of sports and lifestyle.</p>
                </div>
            </div>

            {/* card section*/}
            <h1 className="text-center text-4xl mb-10 mt-20">Our <span className="text-pink-600">Collection</span></h1>
            <div className="max-w-[1320px] mb-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                {
                    datas.map(data => <DisplayAdidas key={data._id} data={data}></DisplayAdidas>)
                }
            </div>
        </div>
    );
};

export default Adidas;