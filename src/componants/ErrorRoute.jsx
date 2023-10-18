
import Footer from "./Footer";
import Navbar from "./Navbar";

const ErrorRoute = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=" flex items-center justify-center">
                <h2 className="text-3xl">EKhane nai kichui</h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorRoute;