const cards = [
  {
    img: "https://tse1.mm.bing.net/th?id=OIP.cdRseUzhsYRi6SjQjyYO9gHaE8&pid=Api&P=0&h=180",
    text: "UP TO 30% OFF\nFor all hand purses",
    brand: "AVAKEN",
  },
  {
    img: "https://tse2.mm.bing.net/th?id=OIP.ydeaMvph891_YMyiWACcwQAAAA&pid=Api&P=0&h=180",
    text: "EXPLORE THE BIGGEST DISCOUNT",
    brand: "Iconic",
  },
  {
    img: "https://tse3.mm.bing.net/th?id=OIP.TfXiRGGdGUVJpv9Jm87ZkgHaHa&pid=Api&P=0&h=180",
    text: "DON’T MISS THE YEAR END SELL",
    brand: "7 days left",
  },
];

const PromoCards = () => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
    {cards.map((card, idx) => (
      <div key={idx} className="bg-white p-3 shadow-sm rounded-xl">
        <img
          src={card.img}
          alt={card.brand}
          className="w-full h-32 object-cover rounded"
        />
        <p className="mt-2 font-semibold whitespace-pre-line">{card.text}</p>
        <p className="text-gray-500 text-sm">{card.brand}</p>
      </div>
    ))}
  </div>
);
export default PromoCards;
