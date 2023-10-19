import Marquee from "react-fast-marquee";

const Advertisement = () => {
    return (
        <div className="my-12">
                <Marquee pauseOnHover ={true} speed={300}>
                    <img className="h-64 w-full" src="https://media.istockphoto.com/id/1384828553/photo/is-it-time-to-travel-again.jpg?s=2048x2048&w=is&k=20&c=YpfU5EYJouDLrFpabU7TONwlMBe-7FDx3a5N_CUcQPI=" alt="" />
                    <img className="h-64 w-full" src="https://media.istockphoto.com/id/1394033419/photo/luxury-fashion-store-front-in-modern-shopping-mall.jpg?s=2048x2048&w=is&k=20&c=S5iLyBdlt-VVt66zB-Z0hpyY4xQ4AaiWbxvLYi1FyCc=" alt="" />
                    <img className="h-64 w-full" src="https://media.istockphoto.com/id/1464735815/photo/architecture-blueprint-or-hands-in-a-meeting-planning-a-creative-strategy-or-building-ideas.jpg?s=2048x2048&w=is&k=20&c=3ODVgugCuN9B882DkdSOrp0_mB7RUczZPDdnM3tw73k=" alt="" />
                    <img className="h-64 w-full" src="https://media.istockphoto.com/id/1423035876/photo/fashion-store-exterior-shop-windows-and-mannequins-city-night-boutique-front-view-from-street.jpg?s=2048x2048&w=is&k=20&c=Ttqr5PmEtkiO3UXyhggzz5kr9iYK-RMAIGTDDRra-co=" alt="" />
                    <img className="h-64 w-full" src="https://media.istockphoto.com/id/1170635789/photo/close-up-of-colorful-t-shirts-on-hangers-apparel-background.jpg?s=2048x2048&w=is&k=20&c=V3dl-e63KoOsvmZDfJI96pYlYNIatOw9uPiLkoJxRNc=" alt="" />
                </Marquee>
        </div>
    );
};

export default Advertisement;