function Navbar () {
    return ( 
        <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
            {/* Left Menu */}
            <div className="flex items-center space-x-8">
                <a href="#" className="text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-white transition-colors">About Us</a>
                <a href="#" className="text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-white transition-colors">We Offer</a>
                <a href="#" className="text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-white transition-colors">Why Us</a>
                <a href="#" className="text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-white transition-colors">Get Your Chance</a>
                <a href="#" className="text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-white transition-colors">Testimonials</a>
            </div>

            {/* Right Menu */}
            <div className="flex items-center space-x-6">
            <div className="flex space-x-4 text-sm font-bold text-white/80">
                <a href="#" className="hover:text-white transition-colors">Fb</a>
                <a href="#" className="hover:text-white transition-colors">Tw</a>
                <a href="#" className="hover:text-white transition-colors">In</a>
                </div>
                <span className="text-sm font-semibold text-white/80">+1 742 65 84 122</span>
                <a href="#" className="bg-amber-500 text-zinc-900 font-bold uppercase text-sm px-6 py-3 rounded-md hover:bg-amber-400 transition-colors">
                Order Now
                </a>
            </div>
        </nav>
     );
}

export default Navbar;