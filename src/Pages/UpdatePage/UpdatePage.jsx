import Swal from 'sweetalert2';
import updatebg from '../../assets/updatebg.png';
import { useLoaderData } from 'react-router-dom';

const UpdatePage = () => {
    const loadedUser = useLoaderData();
    console.log(loadedUser);
    const {_id, photoUrl, name, type, brand, rating, price } = loadedUser;

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;

        const updateProduct = { photoUrl, name, brand, type, price, rating };

        fetch(`https://fashion-brand-shop-server-side.vercel.app/products/${loadedUser._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Good job!',
                        text: 'Updated successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }

return (
    <div className='lg:relative lg:w-full'>
        <h1 className='text-3xl md:text-4xl text-center mb-5'>Update <span className='text-cyan-600'>Your Data</span></h1>
        <img className='hidden lg:block' src={updatebg} />
        <div className="lg:absolute mx-8 mb-10 lg:mx-0 lg:my-0 bg-sky-200 lg:left-[80px] lg:top-[150px] lg:bg-transparent lg:w-[650px] p-6 rounded-lg shadow-lg lg:shadow-2xl">
            <form onSubmit={handleUpdate}>
                {/* left side */}
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold ">Photo URL</span>
                            </label>
                            <input type="text" name="photoUrl"  defaultValue={loadedUser?.photoUrl} placeholder="photo url" className="input input-bordered input-info w-full max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text mt-4 font-bold">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={loadedUser?.name}  placeholder="your name" className="input input-bordered input-info w-full max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text mt-4 font-bold">Brand Name</span>
                            </label>
                            <input type="text" name="brand" defaultValue={loadedUser?.brand}  placeholder="brand name" className="input input-bordered input-info w-full max-w-xs" />
                        </div>
                    </div>

                    {/* right side */}
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Type</span>
                            </label>
                            <input type="text" name="type" defaultValue={loadedUser?.type}  placeholder="type" className="input input-bordered input-info w-full max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text mt-4 font-bold">Price</span>
                            </label>
                            <input type="text" name="price" defaultValue={loadedUser?.price} placeholder="price" className="input input-bordered input-info w-full max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text mt-4 font-bold">Rating</span>
                            </label>
                            <input type="text" name="rating" defaultValue={loadedUser?.rating}  placeholder="rating" className="input input-bordered input-info w-full max-w-xs" />
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