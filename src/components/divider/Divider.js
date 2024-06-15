import React from 'react';
const Divider = () => {
  return (
    <div className="relative flex items-center justify-center my-8 mt-12">
      <hr className="border-t border-gray-300 w-full" />
      <span className="absolute bg-red-500 px-4 text-lg font-bold text-white">
        Top Stories
      </span>
    </div>
  );
};

export default Divider;
