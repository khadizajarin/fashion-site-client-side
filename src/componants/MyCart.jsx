import Navbar from "./Navbar";
import { getStoredProduct} from "../utilities/uitlity";
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
  }
}, [myCart]);

const handleCartDelete = (id) => {
  const storedAllProduct = getStoredProduct();

  const index = storedAllProduct.indexOf(id);

  if (index !== -1) {
    storedAllProduct.splice(index, 1);
    localStorage.setItem('addedCart', JSON.stringify(storedAllProduct));

    // Update the added state without a full route reload
    const remaining = added.filter(item => item._id !== id);
    console.log(remaining);
    setAdded(remaining);
    setDisplayCart(remaining);
  }
}



    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 max-w-7xl mx-auto mt-32">
                {displayCart.map((added) => (
                    <div key = {added._id} >
                        <div className="card lg:card-side bg-base-100 shadow-xl">
                            <figure><img className="lg:h-96 lg:w-96" src={added.photo}  alt={added.productName}/></figure>
                            <div className="card-body">
                                <h2 className="card-title text-3xl">{added.productName}</h2>
                                <p className="text-xl font-bold">{added.type}</p>
                                <p className="text-lg">{added.description}</p>
                                <p>{added.price}</p>
                                <p>{added.rating}</p>
                                <div className="card-actions justify-end">
                                <button onClick={() => handleCartDelete(added._id)} className="btn btn-neutral">Delete from Cart</button>
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