import{ useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Advertisement from "../Advertisement";
import Swal from "sweetalert2";
import { useContext} from "react";
import { AuthContext } from "../AuthProvide/AuthProvider";

const Products = (params) => {
  const [products, setProducts] = useState([]);
  const { name } = useParams();

  const {user} = useContext(AuthContext);

//  add product to cart
    const handleCartAdd= ((user,object) => {
      const email = user.email;
      const newCart ={email , object}
    
      fetch('http://localhost:5000/cart',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCart)
      })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
          Swal.fire({
            icon: "success",
            title: 'Product Added to Cart Successfully!',
            text: 'See your added products in My Cart',
            timer: 2000
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
    });


    // add new product to to database
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

  // const availableProducts =products.filter(product => product.brand === name);
  // if( availableProducts = 0){
    
  // }

  
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
              (products.filter(product => product.brand === name) != 0) ?
               ( products.filter(product => product.brand === name).map(product => (
                  <div key={product._id}>
                      <div className="card lg:card-side bg-base-100 shadow-xl my-10 ">
                        <figure><img className="h-96 w-96" src={product.photo} alt="Album"/></figure>
                        <div className="card-body ">
                          <h2 className="card-title text-4xl">{product.productName}</h2>
                          <p className="font-bold text-xl">{product.brand}</p>
                          <p className="font-bold">{product.type}</p>
                          <p className="font-bold">{product.price}</p> 
                          <p>{product.rating}</p>
                          <div className="card-actions justify-end">
                            <Link to ={`/details/${product._id}`}><button className="btn btn-neutral">Details</button></Link>
                            <Link to={`/updateProduct/${product._id}`}><button className="btn btn-neutral">Update</button></Link>
                            <button onClick={() => handleCartAdd(user,product)}  className="btn btn-neutral">Add to Cart</button>
                          </div>
                        </div>
                    </div>
                  </div>
                ))) : (
                  <div className="text-7xl font-extrabold text-center">
                    No products are available right now!
                  </div>
                )
            }
          </div>

      </div>
    </div>
  );
};

export default Products;

