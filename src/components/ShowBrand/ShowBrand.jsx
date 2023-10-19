import { useEffect, useState } from "react";
import "./ShowBrand.css"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ShowBrand = ({ brand }) => {
    const { img, brand_name } = brand;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fashion-brand-shop-server-side.vercel.app/products")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            })
    }, [])

    const navigate = useNavigate();
    const handleClick = brand => {
        const item1 = brand.toLowerCase();
        const matchingBrand = products.find(item => item1 === item.brand.toLowerCase());

        if (matchingBrand) {
            switch (matchingBrand.brand.toLowerCase()) {
                case "nike":
                    navigate("/nike");
                    break;
                case "gucci":
                    navigate("/gucci");
                    break;
                case "zara":
                    navigate("/zara");
                    break;
                case "adidas":
                    navigate("/adidas");
                    break;
                default:
                    Swal.fire("Sorry", "Not available", "error");
            }
        } else {
            Swal.fire("Sorry", "Not available", "error");
        }
    }

    return (
        <div onClick={() => handleClick(brand_name)} className="card cursor-pointer bg-base-100 w-[312px] border shadow-xl mx-auto">
            <h2 className="card-title text-orange-400 mx-auto pt-4 pb-2">{brand_name} Brand</h2>
            <figure className="h-[200px] w-full"><img src={img} alt="Shoes" /></figure>
        </div>
    );
};

export default ShowBrand;