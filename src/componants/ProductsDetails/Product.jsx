/* eslint-disable react/prop-types */


const Product = ({products}) => {

    const {_id, image, name} = products;
    return (
        <div className="">
            <div className="card lg:card-side bg-base-100 shadow-xl max-w-lg">
                <figure><img className="w-" src={products.Image} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{products.Name}</h2>
                    <p>{products.Type}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-neutral">Details</button>
                    <button className="btn btn-neutral">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;