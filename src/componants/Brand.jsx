
import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
    const { id, name, image } = brand;

    return (
        <div className="brand-card">
        <div className="card w-96 bg-base-100 shadow-xl image-full gap-9">
            <figure>
                <img className="" src={image} alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-7xl">{name}</h2>
                <div className="card-actions justify-end">
                    {/* <Link to={`/brands/${id}`}><button className="btn btn-neutral">See Products</button></Link> */}
                     <Link to={'/products'}><button className="btn btn-neutral">See Products</button></Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Brand;
