import React from "react";

const Card = ({ name, field, review }) => {
  return (
    <div className="border rounded-lg shadow-md min-w-60  bg-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="h-[200px] bg-gray-300 flex items-center justify-center">
        
      </div> 
      <div className="p-4">
        <p className="text-purple-700 font-semibold">{name}</p>
        {field && <p className="text-sm text-gray-600">{field}</p>}
        {review && <p className="text-sm text-gray-600">{review}</p>}
      </div>
    </div>
  );
};

export default Card;
