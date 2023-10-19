import Swal from "sweetalert2";
import add from "../../assets/add.jpg"

const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const product = { photoUrl, name, brand, type, price, rating, description };
        console.log(product);

        fetch('https://fashion-brand-shop-server-side.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Good job!',
                        text: 'Product added successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })

                    form.reset();
                }
            })
    }

    return (
        <div>
            <div className="lg:relative">
                <h1 className="text-3xl md:text-4xl text-center mb-5">Add Your <span className="text-orange-600">Favourite</span></h1>
                <img className="hidden lg:block lg:w-full" src={add} />
                <div className="m-5 lg:absolute lg:top-[150px] lg:right-[200px] lg:bg-transparent lg:w-[650px] p-6 rounded-lg shadow-lg lg:shadow-2xl border bg-orange-100">
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
                                <div className="form-control mx-auto">
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

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text md:ml-[85px] lg:ml-12 mt-4 font-bold">Short Description</span>
                            </label>
                            <input type="message" name="description" placeholder="write here" className="w-[340px] md:w-[500px] mx-auto input input-bordered input-warning" />
                        </div>

                        <div className="form-control md:w-1/4 mt-4 mx-auto">
                            <button className="btn border-0 bg-orange-300 hover:bg-orange-400 text-orange-700 hover:text-white ">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;