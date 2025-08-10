import React from 'react'

const Hero = () => {
  return (
    <section id='home' className='min-h-screen bg-gradient-to-br from teal-700 to teal-800 via-teal-800 flex items-center justify-center relative'>
        {/*Background Overlay */}
        <div className='absolute inset-0 bg-black/20'></div>

        {/* Background Pattern*/}
        <div className='absolute inset-0 opacity-10'>
            <div className="absolute top-20 left-20 w-72 h-72 bg-teal-300 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-200 rounded-full blur-3xl"></div>
        </div>

        
        <div className='text-center text-white relative z-10 px-4 max-w-4xl mx-auto '>
            <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight'>Sağlıklı Yaşam
                <span className='block text-teal-200'>İçin Doğru</span>
                <span className='block'>Beslenme</span>
            </h1>
            <p className='text-xl md:text-2xl mb-8 text-teal-100 leading-relaxed max-w-2xl mx-auto'>Profesyonel diyetisyen hizmetleri ile hedeflerinize ulaşın.</p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <button className='bg-white text-teal-700 px-8 py-4 rounded-full font-semibold hover:bg-teal-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'>
                İletişim Formu
            </button>
            <button  className='border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm'>
                Hakkımızda
            </button>
            </div>
        </div>
        
       

    </section>
   
  )
}

export default Hero
