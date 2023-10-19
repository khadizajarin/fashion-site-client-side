import Navbar from "./Navbar";

const UpdateProduct = () => {
    return (
        <div>
        <Navbar></Navbar>
        <div className="max-w-7xl mx-auto mt-16">
            <form > 
                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Name:</span>
                        </label>
                        <input type="text" name="productName" placeholder="Product Name" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Brand:</span>
                        </label>
                        <input type="text" name="brand" placeholder="Brand" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Type:</span>
                        </label>
                        <input type="text" name="type" placeholder="Type" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price:</span>
                        </label>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description:</span>
                        </label>
                        <input type="text" name="description" placeholder="Description" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Rating:</span>
                        </label>
                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo:</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <button className="btn btn-neutral mt-9 w-full">Add product</button>
            </form>
         </div>
   </div>
    );
};

export default UpdateProduct;