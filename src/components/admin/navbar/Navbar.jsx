import React from 'react';

const Navbar = () => {
  const handleLogout = () => {
    // Code to handle logout logic
  };

  return (
    <nav className="flex items-center justify-between p-1 bg-dark-purple text-white shadow-lg">
  <div className="flex items-center">
    <img src="/image/AONE.png" alt="Your Logo" style={{ width: "150px" }} />
    <span className="font-semibold text-lg">Aone TURF</span>
  </div>

  {/* <div className="flex items-center ml-auto">
    <button onClick={handleLogout} className="text-white hover:text-gray-300">Logout</button>
  </div> */}
</nav>

  
  

  );
};

export default Navbar;
