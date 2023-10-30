import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Headroom from "react-headroom";

const Root = () => {
    return (
        <div>
            <Headroom>
                <Navbar></Navbar>
            </Headroom>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;