import { useLoaderData } from "react-router-dom";

const DetailPage = () => {
    const loadedProduct = useLoaderData();
    console.log(loadedProduct);
    const { name, photoUrl, description } = loadedProduct;

    return (
        <div className="max-w-[1320px] mx-auto">
            <h1 className="text-4xl text-center mt-10 text-blue-600">Product Detail</h1>
            <div className="flex flex-col-reverse  gap-8 md:flex-row md:my-20 justify-center items-center p-5">
                <div className="md:w-2/4">
                    <h1 className="underline-offset-4 mt-5 md:mt-0 underline mb-5 text-2xl font-bold">{name} :</h1>
                    <p className="text-gray-500">{description}</p>
                    <button className="btn text-sm bg-blue-400 mt-5 text-white hover:bg-blue-600">Add to Cart</button>
                </div>
                <img className="md:w-1/4" src={photoUrl} />
            </div>
        </div>
    );
};

export default DetailPage;