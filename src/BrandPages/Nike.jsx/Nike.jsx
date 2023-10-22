import { useLoaderData } from "react-router-dom";
import DisplayNike from "./DisplayNike";

const Nike = () => {
    const loadedData = useLoaderData();

    const datas = loadedData.filter(item => item.brand.toLowerCase().includes("nike"));
    console.log(datas)

    return (
        <div>
            <div className="bannar h-[500px] hover:cursor-pointer relative max-w-[1320px] mt-10 mx-auto">
                <div className="carousel rounded-lg h-[500px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/pxFLRMD/Untitled-1.png" className="w-full"/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/XX0b0vL/Untitled-1.png" className="w-full"/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/C9vdbMD/Untitled-1.png" className="w-full"/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div className="intro opacity-60 rounded-b-lg">
                    <p className="p-3 md:p-8 md:mt-3 text-sm lg:text-lg text-center lg:mt-5 text-red-600">Nike is a prominent multinational sportswear and footwear brand celebrated for its commitment to athletic performance and fashion. Founded in 1964, Nike has revolutionized the sports industry with its innovative designs, including the iconic "Swoosh" logo. Nike's influence extends beyond sports, as it stands as a symbol of inspiration, empowerment, and a dedication to pushing the boundaries of both sportswear and culture.</p>
                </div>
            </div>

            {/* card section*/}
            <h1 className="text-center text-4xl mb-10 mt-20">Our <span className="text-pink-600">Collection</span></h1>
            <div className="max-w-[1320px] mb-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                {
                    datas.map(data => <DisplayNike key={data._id} data={data}></DisplayNike>)
                }
            </div>
        </div>
    );
};

export default Nike;