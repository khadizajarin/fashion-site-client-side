import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvide/AuthProvider";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const { createUser, locationState } = useContext(AuthContext); 
    console.log("location in register page ", locationState );
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        // const passRegex =  /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

        // if (!passRegex.test(password)) {
        //     return (alert("Password must be at least 6 characters long, contain a capital letter and a special character."));
        // }

        createUser(email,password)
        .then(result => {
            console.log(result.user)
            navigate(locationState? locationState : '/home')
        })
        .catch(error => {
            console.error(error); 
        
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200">
                <div className="hero-content  py-16 flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register to Explore!</h1>
                        <p className="py-6">Register in to explore the biggest brand collection.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Register</button>
                            <p className="py-6">Already have a account? PLease proceed to <Link className="text-gray-900 font-bold" to='/login' >Login</Link></p>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>  
    );
};

export default Register;