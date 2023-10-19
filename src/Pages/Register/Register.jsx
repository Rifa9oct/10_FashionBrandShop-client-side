import { useContext, useState } from "react";
import registerImg from "../../assets/register.jpg"
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;

        //password verification
        if (password.length < 6) {
            Swal.fire("Opps!", "Password should be at least 6 characters or longer", "error");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire("Opps!", "Your password should have at least an uppercase character", "error");
            return;
        }
        else if (!/[^\w]/.test(password)) {
            Swal.fire("Opps!", "Your password should have at least a special character", "error");
            return;
        }
        else if (!accepted) {
            Swal.fire("Opps!", "Your should have accepted our terms and condition", "error");
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire("Great!", "Registration successfull", "success");
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoUrl
                })
                e.target.reset();
            })
            .catch(error => {
                Swal.fire("Opps!", error.message, "error");
            })

    }

    return (
        <div className="border w-[816px] mx-auto flex items-center justify-center rounded-lg shadow-lg mb-20">
            <div><img className="w-[400px] h-[520px] rounded-l-lg shadow-lg" src={registerImg} /></div>
            <div className="w-[350px] mx-8">
                <form onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text mt-4">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password" placeholder="password" className="input input-bordered w-full" required />
                            <span className="absolute top-4 right-4" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                            </span>
                        </div>

                        <div className="flex gap-2 mt-4">
                            <input type="checkbox" name="terms" />
                            <label htmlFor="terms">Accept our <a href="#">terms and conditions!</a></label>
                        </div>
                    </div>

                    <div className="form-control w-3/4 mt-4 mx-auto">
                        <button className="btn bg-pink-400 hover:bg-pink-600 text-white ">Register</button>
                    </div>

                    <p className="mt-4 mb-6 text-center">Already have an account? Please <Link className="text-pink-600 font-bold underline underline-offset-2" to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;