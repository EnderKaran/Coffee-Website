import { useState } from "react";

function Navbar() {
    const [isOpen , setIsOpen] = useState(false);
    return ( 
        <nav className="relative">
      
      <div className="flex justify-between items-center px-4 sm:px-8 py-6 max-w-7xl mx-auto">
        
        <div>
          <a href="#" className="text-xl font-bold text-white">Coffee</a>
        </div>

        
        
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#About" className="text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-white transition-colors">About Us</a>
          <a href="#Highlights" className="text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-white transition-colors">We Offer</a>
          <a href="#CallToAction" className="text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-white transition-colors">Why Us</a>
        </div>
        <div className="hidden lg:flex items-center space-x-6">
            <span className="text-sm font-semibold text-white/80">+1 742 65 84 122</span>
            <a href="#" className="bg-amber-500 text-zinc-900 font-bold uppercase text-sm px-6 py-3 rounded-md hover:bg-amber-400 transition-colors">Order Now</a>
        </div>

        {/* HAMBURGER BUTON */}   
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {/* If isOpen is true, show X icon, if false, show hamburger icon */}
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      {/* If isOpen is true it is visible, otherwise it is hidden.*/}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-zinc-900/95 flex flex-col items-center space-y-6 py-8">
          <a href="#About" className="text-lg uppercase text-white">About Us</a>
          <a href="#Highlights" className="text-lg uppercase text-white">We Offer</a>
          <a href="#CallToAction" className="text-lg uppercase text-white">Why Us</a>
          <a href="#" className="text-lg uppercase text-white">+1 742 65 84 122</a>
          <a href="#" className="bg-amber-500 text-zinc-900 font-bold uppercase text-lg px-8 py-4 rounded-md">Order Now</a>
        </div>
      )}
    </nav>
     );
}

export default Navbar;