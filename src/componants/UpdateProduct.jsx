import Swal from "sweetalert2";
import Navbar from "./Navbar";
import { useLoaderData} from "react-router-dom";


const UpdateProduct = () => {

    const product = useLoaderData();
    const {_id, productName, brand, type, price, description, rating, photo} = product;
    
    console.log(productName);

    const handleUpdateProduct = event =>{
        event.preventDefault();

        const form = event.target;

        const productName = form.productName.value; 
        const brand = form.brand.value; 
        const type = form.type.value; 
        const price = form.price.value; 
        const description = form.description.value; 
        const rating = form.rating.value; 
        const photo = form.photo.value;    

        const updatedProduct = {productName,brand,type,price,description, rating, photo};

        console.log(updatedProduct);

        fetch(`http://localhost:5000/addProduct/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res =>res.json())
        .then(data=> {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                icon: "success",
                title: 'Product Updated Successfully!',
                timer: 2000
              });
            }
            
            // form.productName.value = '';
            // form.brand.value = '';
            // form.type.value = '';
            // form.price.value = '';
            // form.description.value = '';
            // form.rating.value = '';
            // form.photo.value = '';
        });
    }






    return (
        <div>
        <Navbar></Navbar>
        <div className="max-w-7xl mx-auto mt-16">
            <form onSubmit={handleUpdateProduct}> 
                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Name:</span>
                        </label>
                        <input type="text" name="productName" defaultValue={productName} placeholder="Product Name" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Brand:</span>
                        </label>
                        <input type="text" name="brand" defaultValue={brand} placeholder="Brand" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Type:</span>
                        </label>
                        <input type="text" name="type" defaultValue={type} placeholder="Type" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price:</span>
                        </label>
                        <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description:</span>
                        </label>
                        <input type="text" name="description" defaultValue={description} placeholder="Description" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Rating:</span>
                        </label>
                        <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo:</span>
                        </label>
                        <input type="text" name="photo" defaultValue={photo} placeholder="Photo" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <button value ="Update Product" className="btn btn-neutral mt-9 w-full">Update Product</button>
            </form>
         </div>
   </div>
    );
};

export default UpdateProduct;