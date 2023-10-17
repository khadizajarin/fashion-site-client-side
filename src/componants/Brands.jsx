import { useLoaderData } from "react-router-dom";
import Brand from "./Brand";

const Brands = () => {
  const brands = useLoaderData();
  console.log(brands.brands);
  return (
      <div>
          <div className=" max-w-full md:max-w-7xl mx-auto">
              <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {brands.brands.map((brand) => (
                      <Brand key={brand.id} brand={brand} /> 
                  ))}
              </div>
          </div>
      </div>
    );
};

export default Brands;