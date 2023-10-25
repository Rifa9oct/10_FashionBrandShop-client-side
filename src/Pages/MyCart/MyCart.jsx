import { useLoaderData } from "react-router-dom";
import DisplayMyCart from "./DisplayMyCart";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyCart = () => {
    const loadedData = useLoaderData();
    const {user} = useContext(AuthContext);
    const filterData = loadedData.filter(item => item.email === user.email);
   
    const [mycarts, setMycarts] = useState(filterData);
    console.log(mycarts)
    return (
        <div>
            <div className="max-w-[1320px] my-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {
                   mycarts.map(mycart => <DisplayMyCart 
                    key={mycarts._id} 
                    mycart={mycart}
                    setMycarts={setMycarts}
                    mycarts={mycarts} >
                   </DisplayMyCart>)
                }
            </div>
        </div>
    );
};

export default MyCart;