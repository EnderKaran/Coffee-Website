import { useRef, useState } from "react";
import { HiCheckBadge, HiPhone, HiPlay } from "react-icons/hi2";
import PromoVideo from '../assets/promo-video.mp4';
import AboutBg from '../assets/about-bg.png';

function AboutSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // A single function to handle both play and pause.
  const togglePlayPause = () => {
    // Get the next state by inverting the current state.
    const nextIsPlaying = !isPlaying;
    
    if (nextIsPlaying) {
      videoRef.current.play(); // If it's going to play, then play.
    } else {
      videoRef.current.pause(); // If it's going to pause, then pause.
    }
    
    setIsPlaying(nextIsPlaying); // Update the state with the new status.
  };

  return ( 
    // The main container must be 'relative' to position child elements against it.
    <section className="relative bg-zinc-900 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* BACKGROUND LAYER (z-0) */}
      {/* This layer must be a direct child of the section. */}
      <div 
        className="absolute inset-0 bg-center bg-cover opacity-10 z-0"
        style={{ backgroundImage: `url(${AboutBg})` }}
      ></div>

      {/* CONTENT LAYER (z-10) */}
      {/* This layer should be a SIBLING to the background layer and have z-10 to sit on top. */}
      <div className="relative z-10 max-w-7xl mx-auto lg:flex lg:items-center lg:space-x-12">
        
        {/* Column 1: Video Area */}
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <div className="relative rounded-lg shadow-lg overflow-hidden">
            <video
              ref={videoRef}
              src={PromoVideo}
              loop
              playsInline
              onClick={togglePlayPause}
              className={`w-full h-full object-cover rounded-lg ${isPlaying ? 'cursor-pointer' : ''}`}
            >
              Your browser does not support the video tag.
            </video>
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                onClick={togglePlayPause}
              >
                <button className="bg-white/30 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center hover:bg-white/50 transition-colors pointer-events-none">
                  <HiPlay className="w-10 h-10 text-white ml-1" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Column 2: Text Content */}
        <div className="lg:w-1/2">
          <h2 className="font-serif text-4xl font-bold mb-4">
            Choose Fresh Beans -<br /> Taste A Great Coffee
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
          </p>
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-10 mb-10">
            <div className="flex items-center space-x-3">
              <HiCheckBadge className="w-10 h-10 text-amber-500 flex-shrink-0" />
              <div>
                <span className="font-bold">Certified Organic</span>
                <span className="block text-sm text-white/60">From $29 / kg</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <HiPhone className="w-10 h-10 text-amber-500 flex-shrink-0" />
              <div>
                <span className="font-bold">Call us At</span>
                <span className="block text-sm text-white/60">+1 742 65 84 122</span>
              </div>
            </div>
          </div>
          <a href="#" className="inline-block border border-amber-500 text-amber-500 font-bold uppercase text-sm px-8 py-3 rounded-md hover:bg-amber-500 hover:text-zinc-900 transition-colors">
            Take A Tour
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;