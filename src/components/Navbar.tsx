import React, { useState } from 'react'

const styles = {
  //li style
  link1:"bg-teal-700/90 backdrop-blur-md border-2 border-white/40 rounded-full px-4 py-2 hover:bg-white/25 hover:border-white/60 hover:scale-105 transition-all duration-300 shadow-lg shadow-teal-900/50",
  // a style
  link2:"text-white hover:text-teal-100 font-medium"
}




const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Smooth scroll handler (tüm linkler için)
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const el = document.querySelector(targetId)
    if (!el) return
    const y = (el as HTMLElement).offsetTop
    window.scrollTo({ top: y, behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <nav className='bg-teal-700/95 p-3 text-black relative'>
        <div className='flex justify-between items-center mx-auto container'>
            <img src='src/utils/Logo.png' alt='' className='w-36'></img>
            
            {/* Desktop Menu */}
            <ul className='hidden md:flex space-x-6'>
              <li className={styles.link1}>
                <a className={styles.link2} href='#home' onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a>
              </li>
              <li className={styles.link1} >
                <a className={styles.link2} href='#about' onClick={(e) => handleSmoothScroll(e, '#about')}>About</a>
              </li>
              <li className={styles.link1} >
                <a className={styles.link2} href='#contact' onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a>
              </li>
           </ul>

           {/* Hamburger Button */}
           <button 
             className='block md:hidden text-white hover:text-teal-100 transition-colors duration-300'
             onClick={toggleMenu}
           >
             <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
               {isMenuOpen ? (
                 <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
               ) : (
                 <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
               )}
             </svg>
           </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className='md:hidden absolute top-full left-0 right-0 bg-teal-700/95 backdrop-blur-md border-t border-white/20 z-50'>
            <ul className='flex flex-col items-center py-4 space-y-4'>
              <li className={styles.link1}>
                <a className={styles.link2} href='#home' onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a>
              </li>
              <li className={styles.link1} >
                <a className={styles.link2} href='#about' onClick={(e) => handleSmoothScroll(e, '#about')}>About</a>
              </li>
              <li className={styles.link1} >
                <a className={styles.link2} href='#contact' onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a>
              </li>
            </ul>
          </div>
        )}
    </nav>
  )
}

export default Navbar