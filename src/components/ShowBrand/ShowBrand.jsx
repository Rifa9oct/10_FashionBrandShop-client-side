import "./ShowBrand.css"

const ShowBrand = ({ brand }) => {
    const { img, brand_name } = brand;
    return (
        <div className="card bg-base-100 w-[312px] border-2 border-orange-600 shadow-xl mx-auto">
            <h2 className="card-title text-orange-400 mx-auto pt-4 pb-2">{brand_name} Brand</h2>
            <figure className="h-[200px] w-full"><img src={img} alt="Shoes" /></figure>
        </div>
    );
};

export default ShowBrand;