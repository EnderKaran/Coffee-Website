import Navbar from './Navbar';
import HeaderImage from '../assets/header-background.png';

function Header() {
    return (
      <header className="relative w-full h-screen">
        {/* Arka Plan Görseli */}
        <div 
          className="absolute inset-0 bg-cover  bg-no-repeat" 
          
          style={{ backgroundImage: `url(${HeaderImage})` , backgroundPosition: 'center 80%' }} 
        ></div>
        
        {/* Siyah Katman (Overlay) */}
        <div className="absolute inset-0 bg-black/70"></div>
  
        {/* İçerik Alanı */}
        <div className="relative z-10">
          <Navbar />
          
          {/* Ortadaki büyük logo ve yazı (Hero) alanı buraya gelecek */}
        </div>
      </header>
    );
  }
  
  export default Header;