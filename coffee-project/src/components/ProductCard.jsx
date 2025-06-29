import { useState } from "react";
import { HiPlus, HiMinus } from 'react-icons/hi2';

function ProductCard({ imageSrc, name, initialPrice }) {
    const [grams, setGrams] = useState(100);
    
    const handleIncrement = () => {
        setGrams(prevGrams => prevGrams + 100);
    };

    const handleDecrement = () => {
      setGrams(prevGrams => Math.max(100, prevGrams - 100));
    };

    const calculatedPrice = (initialPrice * grams) / 100;

    return ( 
        <div className="text-center">
      <div className="bg-gray-100/70 p-4 rounded-lg mb-4">
        <img src={imageSrc} alt={name} className="w-full h-48 object-contain" />
      </div>
      <h3 className="font-bold text-gray-800">{name}</h3>
      <div className="flex justify-between items-center mt-2 px-2">
        <p className="font-semibold text-amber-700">${calculatedPrice}</p>
        <div className="flex items-center space-x-3 border border-gray-200 rounded-md p-1">
          <button onClick={handleDecrement} className="text-gray-500 hover:text-gray-800">
            <HiMinus className="w-4 h-4" />
          </button>
          <span className="text-sm font-semibold text-gray-800 w-12">{grams}g</span>
          <button onClick={handleIncrement} className="text-gray-500 hover:text-gray-800">
            <HiPlus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
     );
}

export default ProductCard ;