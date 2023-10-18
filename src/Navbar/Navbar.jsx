import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import { BsDatabaseFillAdd } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {

    const navLinks = <>
        <li> <NavLink to="/" className={({ isActive, isPending }) =>
            isActive ? "active rounded-lg  text-red-600" : isPending ? "pending" : ""}><AiFillHome className="mx-auto text-2xl"></AiFillHome>Home</NavLink>
        </li>
        <li> <NavLink to="/addProduct" className={({ isActive, isPending }) =>
            isActive ? "active rounded-lg  text-red-600" : isPending ? "pending" : ""}><BsDatabaseFillAdd className="mx-auto text-2xl"></BsDatabaseFillAdd>Add Product</NavLink>
        </li>
        <li> <NavLink to="/mycart" className={({ isActive, isPending }) =>
            isActive ? "active rounded-lg  text-red-600" : isPending ? "pending" : ""}><FaCartShopping className="mx-auto text-2xl"></FaCartShopping>My Cart</NavLink>
        </li>
    </>

    return (
        <div className="navbar mb-10 flex-col md:flex-row items-center justify-between pb-5 md:pb-0 bg-[#FFFFFF]">
            <div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex={0} className="flex flex-col gap-4 dropdown-content mt-3 z-[1] p-6 py-6 shadow bg-base-100 rounded-box text-center text-sm w-52">
                        {navLinks}
                    </ul>
                </div>
                <img className="h-24" src={logo} />
            </div>
            <div>
                <div className="hidden mr-8 lg:flex">
                    <ul className="flex gap-8">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/login" className="btn md:mr-4 bg-blue-500 hover:bg-blue-700 text-white">login</Link>
            </div>
        </div>
    );
};

export default Navbar;