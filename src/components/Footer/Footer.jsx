import { SiFacebook } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-orange-950 h-[300px]  py-12" >
            <div className="flex justify-center items-center gap-6 py-4">
                <a className=""><a href="#"><SiFacebook className="text-white text-3xl"></SiFacebook></a></a>
                <a className=""><a href="#"><FaTwitter className="text-white text-3xl"></FaTwitter></a></a>
                <a className=""><a href="#"><FiInstagram className="text-white text-3xl"></FiInstagram></a></a>
                <a className=""><a href="#"><AiFillYoutube className="text-white text-3xl"></AiFillYoutube></a></a>
            </div>

            <h1 className="text-center text-white text-3xl">Download the app now</h1>
            <p className="text-sm mt-2 text-white text-center">Available on your favorite shop. Start your premium experience now.</p>

            <div className="flex justify-center mt-6">
                <button className="px-4 py-3 rounded-lg mr-8 bg-orange-400 hover:bg-[#FA4A0C] text-white">Playstore</button>
                <button className="px-4 py-3 border-2 border-orange-400 rounded-lg text-orange-400 hover:bg-[#FA4A0C] hover:text-white">App store</button>
            </div>
        </div>
    );
};

export default Footer;