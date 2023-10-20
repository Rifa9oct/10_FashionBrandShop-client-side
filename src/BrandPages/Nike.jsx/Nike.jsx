import { useLoaderData } from "react-router-dom";
import DisplayNike from "./DisplayNike";

const Nike = () => {
    const loadedData = useLoaderData();

    const datas = loadedData.filter(item => item.brand.toLowerCase().includes("nike"));
    console.log(datas)

    return (
        <div>
            <div className=" max-w-[1320px] mt-10 mx-auto">
                <div className="carousel w-full h-[500px] rounded-lg">
                    <div id="item1" className="carousel-item w-full">
                        <img src="https://i.ibb.co/jhZ0Z5c/nike.jpg" className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src="https://i.ibb.co/gyztRVc/nike2.jpg" className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src="https://i.ibb.co/9vLQRPZ/nike3.jpg" className="w-full" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-sm bg-pink-400 hover:bg-pink-600 text-white">1</a>
                    <a href="#item2" className="btn btn-sm bg-pink-400 hover:bg-pink-600 text-white">2</a>
                    <a href="#item3" className="btn btn-sm bg-pink-400 hover:bg-pink-600 text-white">3</a>
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