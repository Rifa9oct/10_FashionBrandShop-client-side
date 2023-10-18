import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <div className="fixed w-full top-0 z-20"><Navbar></Navbar></div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;