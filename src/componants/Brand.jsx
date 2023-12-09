
import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
    const { id, name, image, about } = brand;


    return (
            <div className="card bg-base-100 shadow-xl image-full gap-9 h-96 w-96">
                <figure>
                    <img className="" src={image} alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-7xl">{name}</h2>
                    <p className="text-white">{brand.about}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/products/${name}`} ><button className="btn btn-neutral">See Products</button></Link>
                    </div>
                </div>
            </div>
    );
};

export default Brand;
