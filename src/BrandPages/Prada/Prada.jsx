import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Prada = () => {
    const loadedData = useLoaderData();
    const datas = loadedData.filter(item => item.brand.toLowerCase().includes('prada'));

    const [showToast, setShowToast] = useState(true);

    useEffect(() => {
        if (showToast && datas.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Sorry',
                text: 'There are no products available !',
            });
            setShowToast(false); 
        }
    }, [showToast, datas]);

    return (
        <div className="bannar hover:cursor-pointer relative max-w-[1320px] mt-10 mx-auto my-20">
            <div className="carousel rounded-md h-[500px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/BqPs1z5/Untitled-1.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/cvFrM3z/Untitled-1.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/qMm812d/Untitled-3.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="intro opacity-60 rounded-b-lg">
                <p className="p-8 text-center mt-8 text-red-600">Where Comfort Meets Style. Discover our collection of trendy and comfortable clothing that is perfect for any occasion. From cozy loungewear to chic everyday attire, Panda brand helps you look and feel your best, all while embracing a casual, yet fashionable lifestyle.Experience the Ultimate in Sustainable Fashion with Panda. As a conscious brand, we take pride in our commitment to eco-friendly materials and ethical manufacturing. With Panda, you not only enhance your wardrobe but also contribute to a greener, more sustainable future.</p>
            </div>
        </div>
    );
};

export default Prada;