import { Link } from "react-router-dom";
import error from "../../assets/error.png"
import { FaHandPointLeft } from "react-icons/fa";

const ErrorPage = () => {
    return (
        <div className="relative max-h-screen">
            <img className="" src={error}/>
            <div className="absolute left-[500px] top-[470px]">
                <p className="w-2/4 text-center text-2xl text-orange-500 font-pacifico">" Sorry, the content you are looking for does not exist.Either it was removed, or you mistyped the link ! "</p>
                <Link to="/" className="flex items-center text-lg font-bold text-violet-500 pt-10 font-pacifico  hover:text-violet-700"><FaHandPointLeft className="inline text-2xl mr-2"></FaHandPointLeft>Back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;