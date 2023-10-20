import { useLoaderData } from "react-router-dom";
import Advertisement from "./Advertisement";
import Navbar from "./Navbar";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "./AuthProvide/AuthProvider";

const Details = () => {
    const detail = useLoaderData();
    const {_id, productName, brand, type, price, description, rating, photo} = detail;

    const rate = [ <> 
      <div className="rating gap-1">
        <input
          type="radio"
          name="1"
          style={{ backgroundColor: (rating > 1) ? 'black' : 'gray' }}
          className="mask mask-heart"
        />
        <input
          type="radio"
          name="2"
          style={{ backgroundColor: (rating > 2 )? 'black' : 'gray' }}
          className="mask mask-heart"
        />
        <input
          type="radio"
          name="3"
          style={{ backgroundColor: (rating > 3) ? 'black' : 'gray' }}
          className="mask mask-heart"
        />
        <input
          type="radio"
          name="4"
          style={{ backgroundColor: (rating > 4 )? 'black' : 'gray' }}
          className="mask mask-heart"
        />
        <input
          type="radio"
          name="5"
          style={{ backgroundColor: (rating == 4.9) ? 'black' : 'gray' }}
          className="mask mask-heart"
        />
      </div>
     
      </>

    ]
    


    const {user} = useContext(AuthContext);
    const handleCartAdd= ((user,object) => {
        const email = user.email;
        const newCart ={email , object}
      
        fetch('https://fashion-site-server-6y1v8qce8-khadizajarin.vercel.app/cart',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newCart)
        })
        .then((res) => res.json())
        .then((data) => {
          if(data.insertedId){
            Swal.fire({
              icon: "success",
              title: 'Product Added to Cart Successfully!',
              text: 'See your added products in My Cart',
              timer: 2000
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
      });
  


    return (
        <div>
            <Navbar></Navbar>
            <Advertisement></Advertisement>
            <div className="max-w-7xl mx-auto mt-6">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img className="w-80" src={detail.photo} alt="Album"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-5xl">{detail.productName}</h2>
                        <p className="text-2xl">{detail.brand}</p>
                        <p>{detail.type}</p>
                        <p>{detail.price}</p>
                        <p className="flex gap-6 text-lg">{detail.rating} {rate}</p>
                        <p> {detail.description}</p>
                        <div className="card-actions justify-end">
                        <button onClick={() => handleCartAdd(user,detail)} className="btn btn-neutral">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-4 max-w-7xl mx-auto mt-12 items-center justify-center">
                <div className="text-6xl">Tell us how did you feel to visit our site by swapping!</div>
                <label className="swap swap-flip text-9xl">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" />
                    <div className="swap-on">😈</div>
                    <div className="swap-off">😇</div>
                </label>
            </div>
        </div>
    );
};

export default Details;