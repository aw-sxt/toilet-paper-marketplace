import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-4 w-full h-full"> {/* Full width and height */}
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="text-2xl font-bold">SoftRoll</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-blue-200">Home</a></li>
            <li><a href="#" className="hover:text-blue-200">Products</a></li>
            <li><a href="#" className="hover:text-blue-200">About</a></li>
            <li><a href="#" className="hover:text-blue-200">Contact</a></li>
          </ul>
        </nav>
        <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-blue-100">
          Shop Now
        </button>
      </div>
    </header>
  );
};

export default Header;