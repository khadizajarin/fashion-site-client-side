import{ useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Advertisement from "../Advertisement";
import { saveProduct } from "../../utilities/uitlity";
import Swal from "sweetalert2";

const Products = (params) => {
  const [products, setProducts] = useState([]);
  const { name } = useParams();


  const handleCartAdd =(id) => {
    console.log(id);
    saveProduct(id);
    Swal.fire({
      icon: "success",
      title: `Product added to you cart successfully!`,
      text: `See your cart List here in My Cart!`,
      timer: 2000
      });
    }
 

  useEffect(() => {
    fetch('https://fashion-site-server-go9vg31hf-khadizajarin.vercel.app/addProduct', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);



  return (
    <div>
      <Navbar></Navbar>
      <Advertisement></Advertisement>

      {/* displaying the name */}

      
        <h1 className="text-xl text-center">
          Displaying products for brand: <strong>{name}</strong>
        </h1>
      
                
      {   /* products showing */}

      <div className="max-w-7xl mx-auto mt-20">
          <div className="">
            {
                products.filter(product => product.brand === name).map(product => (
                  <div key={product._id}>
                      <div className="card lg:card-side bg-base-100 shadow-xl my-10 ">
                        <figure><img className="h-96 w-96" src={product.photo} alt="Album"/></figure>
                        <div className="card-body ">
                          <h2 className="card-title text-4xl">{product.productName}</h2>
                          <p className="font-bold text-xl">{product.brand}</p>
                          <p className="font-bold">{product.type}</p>
                          <p className="font-bold">{product.price}</p> 
                          <p>{product.rating}</p>
                          {/* <p>{product.description}</p> */}
                          <div className="card-actions justify-end">
                            <button className="btn btn-neutral">Details</button>
                            <Link to={`/updateProduct/${product._id}`}><button className="btn btn-neutral">Update</button></Link>
                            <button onClick={() => handleCartAdd(product._id)}  className="btn btn-neutral">Add to Cart</button>
                          </div>
                        </div>
                    </div>
                  </div>
                ))
            }
          </div>

      </div>
    </div>
  );
};

export default Products;

