import chair from "../assets/chair.png";

const MainBanner = () => (
  <div className="w-full h-100 flex bg-[#c3dccc] justify-between items-center p-6 rounded-xl">
    <div>
      <p className="text-xl">Biggest Offer Revealed</p>
      <h2 className="text-4xl font-bold">
        MORE DEALS INSIDE
        <br />
        UP TO 50% OFF
      </h2>
      <button className="mt-10 text-blue-600 font-semibold">
        Wishlist Now &gt;
      </button>
    </div>
    <img src={chair} alt="chair" className="w-100 h-100 object-contain" />
  </div>
);
export default MainBanner;
