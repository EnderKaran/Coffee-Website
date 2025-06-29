// src/components/CallToActionSection.jsx

import React from 'react';
import { HiUser, HiEnvelope, HiLockClosed } from 'react-icons/hi2';

function CallToActionSection() {
  return (
    <div className="bg-zinc-900 py-24 text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

          {/* Sol Taraf: Metin İçeriği ve Form */}
          <div>
            <h2 className="font-serif text-4xl font-bold mb-6">
              Get Your Chance To Have<br />
              An Amazing Morning
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
            </p>

            {/* --- GÜNCELLENMİŞ FORM ALANI --- */}
            <form className="space-y-4">
              {/* Your Name Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <HiUser className="w-5 h-5 text-zinc-400" />
                </div>
                <input
                  type="text"
                  className="bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-400 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full pl-10 p-2.5 transition-colors duration-300"
                  placeholder="Your Name"
                />
              </div>
              
              {/* Your Email Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <HiEnvelope className="w-5 h-5 text-zinc-400" />
                </div>
                <input
                  type="email"
                  className="bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-400 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full pl-10 p-2.5 transition-colors duration-300"
                  placeholder="Your Email"
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <HiLockClosed className="w-5 h-5 text-zinc-400" />
                </div>
                <input
                  type="password"
                  className="bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-400 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full pl-10 p-2.5 transition-colors duration-300"
                  placeholder="Password"
                />
              </div>

              <button
                type="submit" // Buton tipini 'submit' olarak değiştirmek daha doğru
                className="mt-4 w-full bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-300/50 text-zinc-900 font-bold rounded-lg px-8 py-3 text-center transition-colors duration-300"
              >
                Get Started
              </button>
            </form>
          </div>

          {/* Sağ Taraf: Boş */}
          <div className="hidden lg:block">
            {/* Burada görsel olacaktı */}
          </div>

        </div>
      </div>
    </div>
  );
}

export default CallToActionSection;