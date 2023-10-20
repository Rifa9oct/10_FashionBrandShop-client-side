import { AiFillStar } from "react-icons/ai";
import Swal from "sweetalert2";

const DisplayMyCart = ({ mycart, mycarts, setMycarts }) => {
    const { _id, photoUrl, name, type, brand, rating, price } = mycart;

    const handledelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://fashion-brand-shop-server-side.vercel.app/mycarts/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                            const remaining = mycarts.filter(cart => cart._id !== _id)
                            setMycarts(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div className="w-[312px] border rounded-lg shadow-xl mx-auto">
            <img src={photoUrl} className="rounded-xl h-[250px]" />
            <div>
                <h2 className="text-pink-600 text-xl text-center my-3">{name}</h2>
                <div className="text-sm text-gray-500 px-5 mb-4 flex items-center justify-between">
                    <div>
                        <p className="pb-[4px]">Brand: {brand}</p>
                        <p>Type: {type}</p>
                    </div>
                    <div>
                        <p className="pb-[4px] flex items-center gap-1">Rating: {rating} <AiFillStar className="text-orange-400" /></p>
                        <p>Price: {price}</p>
                    </div>
                </div>
                <button onClick={() => handledelete(_id)} className="py-3 text-white rounded-b-lg w-full bg-pink-500 hover:bg-pink-600 ">Delete</button>
            </div>
        </div>
    );
};

export default DisplayMyCart;