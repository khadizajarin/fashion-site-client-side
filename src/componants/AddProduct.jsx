import Navbar from "./Navbar";


const AddProduct = () => {
    return (

       <div>
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto mt-16">
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Name:</span>
                            </label>
                            <input type="text" placeholder="Product Name" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Brand:</span>
                            </label>
                            <input type="text" placeholder="Brand" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Type:</span>
                            </label>
                            <input type="text" placeholder="Type" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price:</span>
                            </label>
                            <input type="text" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Description:</span>
                            </label>
                            <input type="text" placeholder="Description" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Rating:</span>
                            </label>
                            <input type="text" placeholder="Rating" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo:</span>
                            </label>
                            <input type="text" placeholder="Photo" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <button className="btn btn-neutral mt-9 w-full">Add product</button>
                </form>
             </div>
       </div>
    );
};

export default AddProduct;