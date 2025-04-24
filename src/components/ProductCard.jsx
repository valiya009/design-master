import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full hover:shadow-xl transition-transform duration-300 hover:scale-105">
      <div className="relative w-full h-48 bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full bg-cover"
        />
        {product.badge && (
          <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500 text-sm">{product.category}</p>
        <div className="flex justify-between items-center pt-2">
          <span className="text-xl font-bold text-blue-600">
            ${product.price}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-1.5 rounded-xl transition-all">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
