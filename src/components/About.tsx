import React from 'react'


const cardStyles ={
  card: "bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300",
  cardContext: "text-center",
  cardHeading:"text-xl font-semibold text-gray-800 mb-3",
  cardParagh:"text-gray-600 text-sm leading-relaxed mb-4",
  cardButton:"bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition-colors duration-300"
}
const cardText = {
  Text1:"Bilimsel yöntemlerle sağlıklı ve kalıcı kilo verme.Kişiye özel beslenme planları ile hedeflerinize ulaşın.",

  Text2:"Kas kütlesi artırımı ve sağlıklı kilo alma.Besin değeri yüksek gıdalarla güçlü, sağlıklı ve fit bir vücut.",
  Text3:" Sporcu beslenmesi ve performans optimizasyonu.Antrenman öncesi, sırası ve sonrası beslenme stratejileri.",
  Text4:" Hastalık durumunda özel beslenme. Diyabet, kolesterol,tansiyon gibi sağlık sorunları için beslenme tedavisi."
}



const About = () => {
  return (
   <section id='about' className="min-h-screen bg-gradient-to-b from-teal-50 to-white py-20">
    {/* Container- Ana wrapper */}
      <div className='container mx-auto px-4 py-20'>
        {/* Container - Başlık için*/}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>Hizmetlerimiz</h2>
          <p className='text-xl text-gray-600 leading-relaxed'>Sağlıklı yaşam hedeflerinize ulaşmak için kapsamlı diyetisyen hizmetleri sunuyoruz</p>
          </div>
        {/* Grid- 4 kartı yan yana dizmek*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Kart 1*/}
            <div className={cardStyles.card}>
              <div className={cardStyles.cardContext}>
                <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    {/* İkon buraya gelecek */}
                       <span className="text-2xl">⬇️</span>
                </div>
                <h3 className={cardStyles.cardHeading}>Kilo verme</h3>
                <p className={cardStyles.cardParagh}> 
                      {cardText.Text1}
                </p>
                <button className={cardStyles.cardButton}>
                  Kilo ver 
                </button>
              </div>
            </div>
            <div className={cardStyles.card}>
              <div className={cardStyles.cardContext}>
                <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    {/* İkon buraya gelecek */}
                       <span className="text-2xl">⬆️</span>
                </div>
                <h3 className={cardStyles.cardHeading}>Kilo Alma</h3>
                <p className={cardStyles.cardParagh}> 
                    {cardText.Text2}
                </p>
                <button className={cardStyles.cardButton}>
                  Kilo Al
                </button>
              </div>
            </div>
            <div className={cardStyles.card}>
              <div className={cardStyles.cardContext}>
                <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    {/* İkon buraya gelecek */}
                       <span className="text-2xl">⚡</span>
                </div>
                <h3 className={cardStyles.cardHeading}> Performans</h3>
                <p className={cardStyles.cardParagh}> 
                   {cardText.Text3}
                </p>
                <button className={cardStyles.cardButton}>
                  Performansı Artır
                </button>
              </div>
            </div>
            <div className={cardStyles.card}>
              <div className={cardStyles.cardContext}>
                <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    {/* İkon buraya gelecek */}
                       <span className="text-2xl">❤️</span>
                </div>
                <h3 className={cardStyles.cardHeading}>Sağlık</h3>
                <p className={cardStyles.cardParagh}> 
                   {cardText.Text4}
                </p>
                <button className={cardStyles.cardButton}>
                  Sağlığımı Koru
                </button>
              </div>
            </div>
        </div>
      </div>
   </section>
  )
}



export default About