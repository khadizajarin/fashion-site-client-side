import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvide/AuthProvider";
import Swal from 'sweetalert2'


const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then( () => {
            Swal.fire(
                'Logged Out Successful!',
                'success'
              )
        })
        .catch( error => {
            console.error(error);
        })

    }

    const navlink = <>  
            <li><NavLink to = "/" style={({ isActive }) => ({ 
                color: isActive ? 'white' : '' })}>Home</NavLink></li>
            <li><NavLink to = "/addProduct" style={({ isActive }) => ({ 
                color: isActive ? 'white' : '' })}>Add Product</NavLink></li>
            <li><NavLink to = "/myCart" style={({ isActive }) => ({ 
                color: isActive ? 'white' : '' })}>My Cart</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navlink}
                </ul>
                </div>
                <span className="btn btn-ghost normal-case text-xl">Slick</span>
                <img src="https://images.unsplash.com/photo-1645466166343-237332d542f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" className="w-5 h-5 rounded-full" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navlink}
                </ul>
            </div>
            <div className="navbar-end ">
                
                {
                    user ?
                    <>
                       <img className="rounded-full w-6 mr-3" src={user.photoURL} alt="" />
                        <p className=" mr-3 md:block hidden">{user.email}</p>
                        <button 
                            className="btn btn-neutral"
                            onClick={handleLogOut}
                        >Log Out</button>
                    </> :
                    <>
                        <Link to="/login"><button className="btn btn-neutral"> login</button></Link>
                    </>   
                    
                }
            </div>
        </div>
    );
};

export default Navbar;