import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvide/AuthProvider";

const Banner = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="hero min-w-screen " style={{backgroundImage: 'url(https://media.istockphoto.com/id/1311055822/photo/hands-aesthetic-on-bright-background-artwork-concept-of-human-relation-community-togetherness.jpg?s=2048x2048&w=is&k=20&c=0VVbpnDFYF9Wo71A_rDegIJFvkHwbpcfwS7MH1ZYs6Q=)'}}>
            <div className="hero-overlay bg-opacity-80 "></div>
            <div className="hero-content text-center text-neutral-content py-16">
                <div className="max-w-full px-24">
                    <h1 className="mb-5 text-5xl font-bold text-white">Slick Here!</h1>
                    <h3 className="mb-5 text-3xl font-semibold text-white">Your Fashion Destination</h3>
                    <p className="mb-5 text-white font-semibold">Dive into the World of Endless Possibilities – Where Your Wardrobe Becomes an Expression of Your Unique Personality.</p>
                    {
                        !user && 
                        <div className="flex justify-center gap-4">
                            <Link to="/login"><button className="btn btn-outline text-white">Login</button></Link>
                            <Link to="/register"><button className="btn btn-outline text-white">Register</button></Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Banner;