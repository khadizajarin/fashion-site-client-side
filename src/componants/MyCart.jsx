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
                const foundProduct = myCart.find((cartItem) => cartItem.id === id);
                if (foundProduct) {
                    cart.push(foundProduct);
                }
            }
            setAdded(cart);
            setDisplayCart(cart);
            console.log(storeCartIds, myCart);

        }
    }, [myCart, added]);

    return (
        <div>
            <Navbar></Navbar>
            <h2>Cart</h2>
        </div>
    );
};

export default MyCart;