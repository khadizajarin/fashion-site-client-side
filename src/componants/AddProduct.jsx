import Navbar from "./Navbar";
import Swal from "sweetalert2";

const AddProduct = () => {
    const handleAddProduct = event =>{
        event.preventDefault();

        const form = event.target;

        const productName = form.productName.value; 
        const brand = form.brand.value; 
        const type = form.type.value; 
        const price = form.price.value; 
        const description = form.description.value; 
        const rating = form.rating.value; 
        const photo = form.photo.value;    

        const newProduct = {productName,brand,type,price,description, rating, photo};

        console.log(newProduct);

        fetch('https://fashion-site-server-go9vg31hf-khadizajarin.vercel.app/addProduct',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res =>res.json())
        .then(data=> {
            console.log(data);
            Swal.fire({
                title: 'Product Added Successfully!',
                timer: 2000
              })
        })
    }



    return (

       <div>
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto mt-16">
                <form onSubmit={handleAddProduct}> 
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

export default AddProduct;