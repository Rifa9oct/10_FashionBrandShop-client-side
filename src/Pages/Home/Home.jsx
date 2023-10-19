import Bannar from "../../components/Bannar/Bannar";
import BestFashion from "../../components/BestFashion/BestFashion";
import Brands from "../../components/Brands/Brands";
import Footer from "../../components/Footer/Footer";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Brands></Brands>
            <WhatWeDo></WhatWeDo>
            <BestFashion></BestFashion>
            <Footer></Footer>
        </div>
    );
};

export default Home;