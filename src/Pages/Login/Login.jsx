import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import img from "../../assets/loginImg.png"
import line from "../../assets/line.png"
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signinUser, setLogin, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signinUser(email, password)
            .then(() => {
                Swal.fire("Good job", "Login successfull", "success");
                setLogin(true);
                navigate(location?.state ? location.state : "/")
                e.target.reset();
            })
            .catch(error => {
                Swal.fire("Login Error", error.message, "error")
                console.log(error);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className="w-[848px] bg-slate-100 mx-auto flex items-center justify-center rounded-lg shadow-lg">
            <div className="w-[385px] mx-8">
                <form onSubmit={handleLogin}>
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

                        <label className="label">
                            <a href="#" className="text-sm link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control w-3/4 mx-auto mt-6">
                        <button className="btn bg-blue-500 hover:bg-blue-700 text-white">Login</button>
                    </div>
                    <p className="mt-4 text-center">Do not have an account? Please <Link className="text-blue-500 font-bold underline underline-offset-2" to="/register">Register</Link></p>
                </form>

                {/* or */}
                <div className="flex items-center my-4 justify-center">
                    <img src={line} />
                    <p className="font-medium mx-3">OR</p>
                    <img src={line} />
                </div>

                {/* continue with google */}
                <div className="flex items-center w-[60%] mx-auto justify-center bg-[#F4F4F4] py-2 text-gray-500 hover:text-blue-500 font-semibold shadow-md rounded-3xl">
                    <FcGoogle className="text-2xl mr-2"></FcGoogle>
                    <button onClick={handleGoogleSignIn} className="">Continue with google</button>
                </div>
            </div>
            <div><img className="w-[400px] rounded-r-lg shadow-lg" src={img} /></div>
        </div>
    );
};

export default Login;