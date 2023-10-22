import { useLoaderData } from "react-router-dom";
import DisplayGucci from "./DisplayGucci";
import "./Gucci.css"

const Gucci = () => {
    const loadedData = useLoaderData();

    const datas = loadedData.filter(item => item.brand.toLowerCase().includes("gucci"));
    console.log(datas)

    return (
        <div>
            <div className="bannar h-[500px] relative hover:cursor-pointer max-w-[1320px] mt-10 mx-auto">
                <div className="carousel  rounded-lg h-[500px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/Ttr751n/Untiktled-1.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/j8Bc7PG/Unftitled-1.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/xGm6Scs/gucci-loafers.png" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

                <div className="intro opacity-60 rounded-b-lg">
                    <p className="p-3 md:p-8 md:mt-3 text-sm lg:text-lg text-center lg:mt-5 text-red-600">Gucci is an iconic Italian luxury fashion brand renowned for its timeless elegance and innovative designs. With a history dating back to 1921, Gucci is celebrated for its high-quality leather goods, distinctive fashion collections, and the instantly recognizable GG logo. As a symbol of sophistication and style, Gucci continues to shape the fashion industry with its unique blend of tradition and modernity.</p>
                </div>

            </div>

            {/* card section*/}
            <h1 className="text-center text-4xl mb-10 mt-20">Our <span className="text-pink-600">Collection</span></h1>
            <div className="max-w-[1320px] mb-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                {
                    datas.map(data => <DisplayGucci key={data._id} data={data}></DisplayGucci>)
                }
            </div>
        </div>
    );
};

export default Gucci;