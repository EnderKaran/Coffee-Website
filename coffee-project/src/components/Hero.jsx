import LogoImage from '../assets/logo.png';

function Hero() {
    return ( 
        <div className="flex flex-col items-center text-center pt-20 md:pt-32">

            <img src={LogoImage} alt="Coffee Logo" className="w-24 h-24 md:w-48 md:h-48 mb-4" />
            
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white">Coffee</h1>
            
            <div className="text-amber-500 text-2xl md:text-3xl font-light my-4">
                X
            </div>

            <p className="max-w-md text-white-80 text-white leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

        </div>
     );
}

export default Hero;