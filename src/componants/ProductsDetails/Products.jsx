import{ useState, useEffect } from "react";
import Navbar from "../Navbar";
// import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    fetch('https://fashion-site-server-go9vg31hf-khadizajarin.vercel.app/addProduct', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  //adding slide
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    'https://media.istockphoto.com/id/1384828553/photo/is-it-time-to-travel-again.jpg?s=2048x2048&w=is&k=20&c=YpfU5EYJouDLrFpabU7TONwlMBe-7FDx3a5N_CUcQPI=',
    'https://media.istockphoto.com/id/1394033419/photo/luxury-fashion-store-front-in-modern-shopping-mall.jpg?s=2048x2048&w=is&k=20&c=S5iLyBdlt-VVt66zB-Z0hpyY4xQ4AaiWbxvLYi1FyCc=',
    'https://media.istockphoto.com/id/1464735815/photo/architecture-blueprint-or-hands-in-a-meeting-planning-a-creative-strategy-or-building-ideas.jpg?s=2048x2048&w=is&k=20&c=3ODVgugCuN9B882DkdSOrp0_mB7RUczZPDdnM3tw73k=',
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };






  return (
    <div>
      <Navbar></Navbar>

      {/* adding slider */}
       <div className="relative">
      <div className="slider-container flex items-center justify-center w-full md:w-2/3 mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide absolute w-full h-full transition-transform ${
              index === currentSlide ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <img src={image} alt={`Slide ${index + 1}`} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
      <button
        className="prev-button absolute left-2 transform -translate-y-1/2 text-white px-4 py-2 rounded-full"
        onClick={prevSlide}
      >
        {'<'}
      </button>
      <button
        className="next-button absolute right-2 transform -translate-y-1/2 text-white px-4 py-2 rounded-full"
        onClick={nextSlide}
      >
        {'>'}
      </button>
    </div>


{/* products showing */}

      <div className="max-w-7xl mx-auto mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {
              products.map(product => (
              <div key={product._id} > { product.productName } </div>))
            }
          </div>

      </div>
    </div>
  );
};

export default Products;
