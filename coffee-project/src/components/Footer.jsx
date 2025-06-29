// src/components/Footer.jsx

import React, { useState, useEffect } from 'react'; // useEffect'i import ediyoruz
import { HiMapPin, HiPhone, HiEnvelope, HiArrowUp } from 'react-icons/hi2';
import AboutBg from '../assets/about-bg.png';

function Footer() {
  // 1. Butonun görünürlüğünü kontrol etmek için state
  const [isVisible, setIsVisible] = useState(false);

  // 2. Scroll dinleyicisini yönetecek fonksiyon
  const toggleVisibility = () => {
    // Eğer 300 pikselden fazla aşağı kaydırılmışsa, butonu görünür yap
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // 3. Sayfa yüklendiğinde scroll dinleyicisini ekleyen ve
  // component kaldırıldığında temizleyen useEffect hook'u
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup function: Component DOM'dan kaldırıldığında event listener'ı da kaldırır.
    // Bu, hafıza sızıntılarını önlemek için çok önemlidir.
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); // Boş dependency array, bu effect'in sadece bir kez çalışmasını sağlar.

  // Üste kaydırma fonksiyonu
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    // Renk değişikliği burada uygulandı (bg-black)
    <footer className="relative bg-black text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-center bg-cover opacity-10 z-0"
        style={{ backgroundImage: `url(${AboutBg})` }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ... Diğer footer sütunları aynı kalıyor ... */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4">About us</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Pariatur voluptate cocaecat nostrud est exercitation. Culpa duis laboru excepteur ad.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4">Address</h3>
            <div className="flex items-start space-x-3">
              <HiMapPin className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
              <p className="text-sm text-white/70">
                27 Division St, New York, <br />
                NY 10002, USA
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4">Contact us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <HiPhone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a href="tel:+17426584122" className="text-sm text-white/70 hover:text-white transition-colors">+1 742 65 84 122</a>
              </div>
              <div className="flex items-center space-x-3">
                <HiEnvelope className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a href="mailto:info@sitename.com" className="text-sm text-white/70 hover:text-white transition-colors">info@sitename.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. AKILLI SCROLL TO TOP BUTONU */}
      {/* Bu butonu footer'ın grid yapısından çıkarıp doğrudan footer'ın içine koyduk */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 w-12 h-12 bg-amber-500/80 hover:bg-amber-500 text-zinc-900 rounded-full flex items-center justify-center transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <HiArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
}

export default Footer;