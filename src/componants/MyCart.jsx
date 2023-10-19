import Navbar from "./Navbar";
import { getStoredProduct } from "../utilities/uitlity";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

const MyCart = () => {
    const myCart = useLoaderData();
    const [added, setAdded] = useState([]);
    const [displayCart, setDisplayCart] = useState([]);
    
    useEffect(() => {
        const storeCartIds = getStoredProduct();

        if (myCart.length > 0) {
            const cart = [];
            for (const id of storeCartIds) {
                const cartItem = myCart.find(cart => cart._id == id)
                cart.push(cartItem);
            }
            setAdded(cart);
            setDisplayCart(cart);
            console.log(storeCartIds, added,myCart);
        }
    }, [myCart]);






    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 max-w-7xl mx-auto mt-32">
                {displayCart.map((added) => (
                    <div key = {added._id} >
                        <div className="card card-side bg-gray-500 ">
                            <figure><img className="md:h-96 md:w-96" src={added.photo} alt={added.productName}/></figure>
                            <div className="card-body">
                                <h2 className="card-title">{added.brand}</h2>
                                <p>{added.description}</p>
                                <p>{added.price}</p>
                                <p>{added.rating}</p>
                                <div className="card-actions justify-end">
                                <button className="btn btn-neutral">Delete from Cart</button>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyCart;