import Navbar from "./Navbar";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthProvide/AuthProvider";
import Swal from "sweetalert2";

const MyCart = () => {
    const {user} = useContext(AuthContext);

    const [added, setAdded] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cart', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
        })
        .then((res) => res.json())
        .then((data) => {
            const cartFound = data.filter(product => product.email=== user.email);
            setAdded(cartFound);
        })
        .catch((error) => {
            console.error(error);
        });
    }, [added]);


    const handleDeleteCart = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Prodcut has been deleted from cart.',
                            'success'
                        )
                    }
                })
            }
          })
    }

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
                                <button onClick={() => handleDeleteCart(add._id)} className="btn btn-neutral">Delete from Cart</button>
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