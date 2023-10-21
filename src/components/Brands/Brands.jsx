import { useEffect } from "react";
import { useState } from "react";
import ShowBrand from "../ShowBrand/ShowBrand";

const Brands = () => {
    const [brands, setBrands] = useState([]);
    console.log(brands)

    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    return (
        <div className="mt-32 max-w-[1320px] mx-auto">
            <h1 className="text-center text-3xl md:text-4xl mb-10">Our Brand <span className="text-orange-600">Collection</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    brands.map(brand => <ShowBrand key={brand.brand_name} brand={brand}></ShowBrand>)
                }
            </div>
        </div>
    );
};

export default Brands;