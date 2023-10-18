import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvide/AuthProvider";
import { useLocation } from "react-router-dom";
import Swal from 'sweetalert2'

const Login = () => {
    const { signIn, createUserGoogle, locationState, setLocationState } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    const goToRegister = () => {
        setLocationState(location.state);
        navigate('/register');
        console.log(location.state);
    }

    const handleLogIn = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget)  ;
        
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            console.log(result.user);
            navigate(location?.state? location.state : '/');    
        })
        .catch(error => {
            console.error(error);
            Swal.fire({
                title: 'Error!',
                text: 'tomar email othoba password vul hoise! chokh meilla likho!',
                icon: 'error',
                confirmButtonText: 'Likhtesi Wait!'
              })
        })
    }

    const handleLogInWithGoogle = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        createUserGoogle ()
        .then(result => {
            console.log(result.user);
            console.log('loggin  in')
            navigate(location?.state? location.state : '/');
            console.log(location);
        })
        .catch (error => {
            console.error(error);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero mt-8 bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Effortlessly log in to see our exclusive brands.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogIn} className="card-body">
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
                                <button className="btn btn-neutral">Login</button>
                            </div>
                            <button onClick={handleLogInWithGoogle} className="btn btn-outline">Login with Google</button>
                            <p className="py-6">Do not have a account? PLease proceed to <span className="text-gray-900 font-bold" to='/register' onClick={goToRegister} >Register</span></p>
                        </form>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>       
    );
};

export default Login;