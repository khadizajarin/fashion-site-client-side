import { useLoaderData } from "react-router-dom";
import Brand from "./Brand";

const Brands = () => {
  const brands = useLoaderData();
  

  return (
    <div className="">
      <div className="lg:max-w-7xl mx-auto">
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <div key={brand.id}>
              <Brand brand={brand} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
