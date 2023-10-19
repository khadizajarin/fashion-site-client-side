import Navbar from "./Navbar";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthProvide/AuthProvider";

const MyCart = () => {
    // const myCart = useLoaderData();
    const {user} = useContext(AuthContext);

    const [added, setAdded] = useState([]);
    // const [displayCart, setDisplayCart] = useState([]);

    // useEffect(() => {
    // const storeCartIds = getStoredProduct();

    // if (myCart.length > 0) {
    //     const cart = [];
    //     for (const id of storeCartIds) {
    //     const cartItem = myCart.find(cart => cart._id == id)
    //     cart.push(cartItem);
    //     }
    //     setAdded(cart);
    //     setDisplayCart(cart);
    // }
    // }, [myCart]);

//     const handleCartDelete = (id) => {
//     const storedAllProduct = getStoredProduct();

//     const index = storedAllProduct.indexOf(id);

//     if (index !== -1) {
//         storedAllProduct.splice(index, 1);
//         localStorage.setItem('addedCart', JSON.stringify(storedAllProduct));

//         // Update the added state without a full route reload
//         const remaining = added.filter(item => item._id !== id);
//         console.log(remaining);
//         setAdded(remaining);
//         setDisplayCart(remaining);
//   }
//     }

    useEffect(() => {
        fetch('http://localhost:5000/cart', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const cartFound = data.filter(product => product.email=== user.email);
            setAdded(cartFound);
            console.log(user, added);
        })
        .catch((error) => {
            console.error(error);
        });
    }, [added]);


    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 max-w-7xl mx-auto mt-32">
                {added.map((add) => (
                    <div key = {add._id} >
                        <div className="card lg:card-side bg-base-100 shadow-xl">
                            <figure><img className="lg:h-96 lg:w-96" src={add.object.photo}  alt={add.object.productName}/></figure>
                            <div className="card-body">
                                <h2 className="card-title text-3xl">{add.object.productName}</h2>
                                <p className="text-xl font-bold">{add.object.type}</p>
                                <p className="text-lg">{add.object.description}</p>
                                <p>{add.object.price}</p>
                                <p>{add.object.rating}</p>
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