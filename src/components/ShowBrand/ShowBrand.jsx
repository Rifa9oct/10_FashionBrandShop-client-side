import "./ShowBrand.css"
import { useNavigate } from "react-router-dom";

const ShowBrand = ({ brand }) => {
    const { img, brand_name } = brand;

    const navigate = useNavigate();
    const handleClick = brand => {
        const selectBrand = brand.toLowerCase();
        console.log(selectBrand);
            if(selectBrand === "nike"){
                navigate("/nike") ;
            }
           if(selectBrand === "adidas"){
                navigate("/adidas") ;
            }
           if(selectBrand === "zara"){
                navigate("/zara") ;
            }
           if(selectBrand === "levi's"){
                navigate("/lavis") ;
            }
           if(selectBrand === "h&m"){
                navigate("/handm") ;
            }
           if(selectBrand === "gucci"){
                navigate("/gucci") ;
            }
           if(selectBrand === "prada"){
                navigate("/prada") ;
            }
    }

    return (
        <div onClick={() => handleClick(brand_name)} className={`card_body card cursor-pointer bg-base-100 w-[312px] border shadow-xl mx-auto ${brand_name === 'Prada' ? 'md:ml-[225px] lg:ml-[505px] ' : ''}`}>
            <h2 className="card-title text-orange-400 mx-auto pt-4 pb-2">{brand_name} Brand</h2>
            <figure className="h-[200px] w-full"><img src={img} alt="Shoes" /></figure>
        </div>
    );
};

export default ShowBrand;