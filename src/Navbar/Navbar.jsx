import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import { BsDatabaseFillAdd } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navLinks = <>
        <li> <NavLink to="/" className={({ isActive, isPending }) =>
            isActive ? "active rounded-lg text-red-600" : isPending ? "pending" : ""}><AiFillHome className="text-xl mx-auto"></AiFillHome>Home</NavLink>
        </li>
        <li> <NavLink to="/addProduct" className={({ isActive, isPending }) =>
            isActive ? "active rounded-lg text-red-600" : isPending ? "pending" : ""}><BsDatabaseFillAdd className="text-xl mx-auto"></BsDatabaseFillAdd>Add Product</NavLink>
        </li>
        <li> <NavLink to="/mycarts" className={({ isActive, isPending }) =>
            isActive ? "active rounded-lg text-red-600" : isPending ? "pending" : ""}><FaCartShopping className="text-xl mx-auto"></FaCartShopping>My Cart</NavLink>
        </li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire(
                    'Thank you',
                    'Logout successfully',
                    'success'
                )
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar flex-col md:flex-row items-center justify-between pb-5 md:pb-0">
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

                <div className="mt-4 md:mt-0">
                    {
                        user ?
                            <div className="flex items-center">
                                <p>{user.displayName}</p>
                                {
                                    user.photoURL ?
                                        <img className="w-[50px] h-[50px] mx-3 rounded-full" src={user.photoURL} /> :
                                        <img className="w-[50px] h-[50px] mx-3 rounded-full" src="https://i.ibb.co/VC1vhmp/user.png" />
                                }
                                <a onClick={handleLogOut} className="btn bg-blue-500 hover:bg-blue-700 text-white">Logout</a>
                            </div>
                            :
                            <Link to="/login" className="btn bg-blue-500 hover:bg-blue-700 text-white">Login</Link>
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;