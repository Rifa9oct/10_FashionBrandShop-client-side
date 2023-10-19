import updatebg from '../../assets/updatebg.png';

const UpdatePage = () => {

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;

        console.log(photoUrl, name, brand, type, price, rating);
        form.reset();

    }

    return (
        <div className='relative w-full'>
            <img src={updatebg} />
            <div className="absolute left-[80px] top-[150px] bg-transparent w-[650px] p-6 rounded-lg shadow-2xl">
                <h1 className='text-4xl text-center mb-5'>Update Your Data</h1>
                <form onSubmit={handleUpdate}>
                    {/* left side */}
                    <div className="flex gap-6 justify-center">
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold ">Photo URL</span>
                                </label>
                                <input type="text" name="photoUrl" placeholder="photo url" className="input input-bordered input-info w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text mt-4 font-bold">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="your name" className="input input-bordered input-info w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text mt-4 font-bold">Brand Name</span>
                                </label>
                                <input type="text" name="brand" placeholder="brand name" className="input input-bordered input-info w-full max-w-xs" />
                            </div>
                        </div>

                        {/* right side */}
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Type</span>
                                </label>
                                <input type="text" name="type" placeholder="type" className="input input-bordered input-info w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text mt-4 font-bold">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="price" className="input input-bordered input-info w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text mt-4 font-bold">Rating</span>
                                </label>
                                <input type="text" name="rating" placeholder="rating" className="input input-bordered input-info w-full max-w-xs" />
                            </div>
                        </div>
                    </div>

                    <div className="form-control w-1/4 mt-4 mx-auto">
                        <button className="btn border-0 text-white bg-cyan-500 hover:bg-cyan-600">Update</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdatePage;