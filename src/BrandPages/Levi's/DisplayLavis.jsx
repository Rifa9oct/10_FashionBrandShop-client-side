import { LuPenSquare } from "react-icons/lu";
import { FaCircleArrowRight } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const DisplayLavis = ({ data }) => {
    const {_id, photoUrl, name, type, brand, rating, price } = data;

    return (
        <div className="w-[312px] border rounded-lg shadow-xl mx-auto">
            <img src={photoUrl} className="rounded-t-lg h-[250px] w-[312px]" />

            <div className="">
                <h2 className="text-pink-600 text-xl text-center my-3">{name}</h2>
                <div className="text-sm text-gray-500 px-5 mb-4 flex items-center justify-between">
                    <div>
                        <p className="pb-[4px]">Brand: {brand}</p>
                        <p>Type: {type}</p>
                    </div>
                    <div>
                        <p className="pb-[4px] flex items-center gap-1">Rating: {rating} <AiFillStar className="text-orange-400"/></p>
                        <p>Price: {price}</p>
                    </div>
                </div>
                <div className="bg-pink-600 rounded-b-lg text-white flex justify-around items-center">
                    <div className="pr-8 py-3">
                        <Link to={`/detail/${_id}`} className="flex items-center gap-2">See Detail<FaCircleArrowRight/></Link>
                    </div>
                    <div>
                        <Link to={`/update/${_id}`} className="py-3 flex items-center gap-2">Update <LuPenSquare/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayLavis;