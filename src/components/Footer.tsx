import React from 'react'

// Uyumlu, sade footer: sosyal ikonlar ve geliştirici imzası
const Footer = () => {
  return (
    <footer className="relative bg-teal-800/95 text-white">
      {/* Üst ince ayraç */}
      <div className="absolute -top-px inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="container mx-auto px-4 py-10">
        {/* Sosyal ikonlar */}
        <ul className="flex items-center justify-center gap-4 md:gap-6 mb-5">
          {/* Instagram */}
          <li>
            <a
              href="#" // Burayı Instagram linkinizle değiştirin
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-white/90 group-hover:text-white">
                <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </li>
          {/* LinkedIn */}
          <li>
            <a
              href="#" // Burayı LinkedIn linkinizle değiştirin
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-white/90 group-hover:text-white">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8" cy="10" r="1.3" fill="currentColor" stroke="none" />
                <path d="M7 16v-3.2M11 16v-2.2c0-1.4 1.1-2.3 2.4-2.3s2.6.9 2.6 2.6V16" />
              </svg>
            </a>
          </li>
          {/* YouTube */}
          <li>
            <a
              href="#" // Burayı YouTube linkinizle değiştirin
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="group w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-white/90 group-hover:text-white">
                <rect x="3" y="7" width="18" height="10" rx="3" />
                <path d="M11 10.5l3 1.5-3 1.5v-3z" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </li>
          {/* Facebook (basit f) */}
          <li>
            <a
              href="#" // Burayı Facebook linkinizle değiştirin
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="group w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-white/90 group-hover:text-white">
                <circle cx="12" cy="12" r="9" />
                <path d="M13 8.5h1.5M12 17v-7a2 2 0 012-2" />
              </svg>
            </a>
          </li>
        </ul>

        {/* İmza ve telif */}
        <div className="text-center">
          <p className="text-sm text-teal-100/80">© {new Date().getFullYear()} Diyetisyen</p>
          <p className="text-xs text-teal-100/60 mt-1">
            Designed & built by
            <a
              href="https://github.com/metehannolgun"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 underline decoration-white/30 hover:decoration-white/70 underline-offset-4"
            >
              @metehannolgun
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer