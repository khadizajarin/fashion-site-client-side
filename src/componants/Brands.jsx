import Brand from "./Brand";
import { useEffect, useState } from "react";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <div key={brand.id}>
              <Brand brand={brand}></Brand>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
