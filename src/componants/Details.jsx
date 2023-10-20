import { useLoaderData } from "react-router-dom";
import Advertisement from "./Advertisement";
import Navbar from "./Navbar";

const Details = () => {
    const detail = useLoaderData();
    const {_id, productName, brand, type, price, description, rating, photo} = detail;
    
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
                        <p> {detail.description}</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-neutral">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-4 max-w-7xl mx-auto mt-12 items-center justify-center">
                <div className="text-6xl">Tell us how did you feel to visit our site!</div>
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