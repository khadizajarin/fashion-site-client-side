

import React from "react";

const Brand = ({ brand }) => {
    console.log(brand);
    const { name, image } = brand;

    return (
        <div className="brand-card">
        <div className="card w-96 bg-base-100 shadow-xl image-full gap-9">
            <figure>
                <img className="" src={image} alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-7xl">{name}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-neutral">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Brand;
