import add from "../../assets/add.jpg"

const AddProduct = () => {

    const handleAddProduct = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        console.log(photoUrl, name, brand, type, price, rating, description);
        
    }


    return (
        <div>
            <div className="relative rounded-lg">
                <img className="w-full" src={add} />
                <div className="absolute top-[150px] right-[200px] bg-transparent w-[650px] p-6 rounded-lg shadow-2xl border">
                    <form onSubmit={handleAddProduct}>
                        {/* left side */}
                        <div className="flex gap-6 justify-center">
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold ">Photo URL</span>
                                    </label>
                                    <input type="text" name="photoUrl" placeholder="photo url" className="input input-bordered input-warning w-full max-w-xs" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text mt-4 font-bold">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="your name" className="input input-bordered input-warning w-full max-w-xs" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text mt-4 font-bold">Brand Name</span>
                                    </label>
                                    <input type="text" name="brand" placeholder="brand name" className="input input-bordered input-warning w-full max-w-xs" />
                                </div>
                            </div>

                            {/* right side */}
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Type</span>
                                    </label>
                                    <input type="text" name="type" placeholder="type" className="input input-bordered input-warning w-full max-w-xs" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text mt-4 font-bold">Price</span>
                                    </label>
                                    <input type="text" name="price" placeholder="price" className="input input-bordered input-warning w-full max-w-xs" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text mt-4 font-bold">Rating</span>
                                    </label>
                                    <input type="text" name="rating" placeholder="rating" className="input input-bordered input-warning w-full max-w-xs" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <fieldset className="focus-within:border-[3px] border mt-3 input-warning w-[500px] rounded-lg mx-auto">
                                <legend className="ml-4 font-bold text-sm">Short description</legend>
                                <textarea className="outline-none ml-4" name="description" placeholder="write here" cols="49"></textarea>
                            </fieldset>
                        </div>

                        <div className="form-control w-1/4 mt-4 mx-auto">
                            <button className="btn bg-orange-300 hover:bg-orange-400 text-orange-700 hover:text-white ">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;