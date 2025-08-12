import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'

// Form data type'ı tanımla
type FormData = {
  ad: string
  soyad: string
  telefon: string
  email: string
  cinsiyet: string
  dogumTarihi: string
  kilo: string
  boy: string
  adres: string
}

// Env değerlerini bir kez oku
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<null | { type: 'success' | 'error', message: string }>(null)

  // EmailJS init (bazı sürümlerde gerekli)
  useEffect(() => {
    if (publicKey) {
      emailjs.init({ publicKey })
    }
  }, [])

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setStatus(null)
    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS env değişkenleri eksik.')
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          ad: data.ad,
          soyad: data.soyad,
          telefon: data.telefon,
          email: data.email,
          cinsiyet: data.cinsiyet,
          dogumTarihi: data.dogumTarihi,
          kilo: data.kilo,
          boy: data.boy,
          adres: data.adres,
        }
      )

      setStatus({ type: 'success', message: 'Mesajınız başarıyla gönderildi.' })
    } catch (error) {
      console.error(error)
      setStatus({ type: 'error', message: 'Gönderim sırasında bir hata oluştu. Lütfen tekrar deneyin.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            İletişime Geçin
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Size en uygun beslenme planı için bilgilerinizi paylaşın
          </p>
        </div>

        {/* Form + Harita Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sol: Form */}
          <div className="bg-white rounded-xl shadow-lg p-12 min-h-[650px]">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Ad Soyad Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ad
                  </label>
                  <input
                    {...register("ad", { required: "Ad gerekli" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Adınız"
                  />
                  {errors.ad && (
                    <p className="text-red-500 text-sm mt-1">{errors.ad.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Soyad
                  </label>
                  <input
                    {...register("soyad", { required: "Soyad gerekli" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Soyadınız"
                  />
                  {errors.soyad && (
                    <p className="text-red-500 text-sm mt-1">{errors.soyad.message}</p>
                  )}
                </div>
              </div>

              {/* Telefon ve Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    {...register("telefon", { 
                      required: "Telefon gerekli",
                      pattern: {
                        value: /^[0-9+\-\s()]+$/,
                        message: "Geçerli telefon numarası girin"
                      }
                    })}
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="0555 123 45 67"
                  />
                  {errors.telefon && (
                    <p className="text-red-500 text-sm mt-1">{errors.telefon.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    {...register("email", { 
                      required: "Email gerekli",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Geçerli email adresi girin"
                      }
                    })}
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="ornek@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Cinsiyet ve Doğum Tarihi Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cinsiyet
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        {...register("cinsiyet", { required: "Cinsiyet seçin" })}
                        type="radio"
                        value="erkek"
                        className="mr-2 text-teal-600 focus:ring-teal-500"
                      />
                      <span className="text-sm text-gray-700">Erkek</span>
                    </label>
                    
                    <label className="flex items-center">
                      <input
                        {...register("cinsiyet", { required: "Cinsiyet seçin" })}
                        type="radio"
                        value="kadin"
                        className="mr-2 text-teal-600 focus:ring-teal-500"
                      />
                      <span className="text-sm text-gray-700">Kadın</span>
                    </label>
                  </div>
                  {errors.cinsiyet && (
                    <p className="text-red-500 text-sm mt-1">{errors.cinsiyet.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Doğum Tarihi
                  </label>
                  <input
                    {...register("dogumTarihi", { required: "Doğum tarihi gerekli" })}
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  {errors.dogumTarihi && (
                    <p className="text-red-500 text-sm mt-1">{errors.dogumTarihi.message}</p>
                  )}
                </div>
              </div>

              {/* Kilo ve Boy Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kilo (kg)
                  </label>
                  <input
                    {...register("kilo", { 
                      required: "Kilo gerekli",
                      pattern: {
                        value: /^[0-9]+(\.[0-9]+)?$/,
                        message: "Geçerli kilo girin (örn: 75 veya 75.5)"
                      }
                    })}
                    type="number"
                    step="0.1"
                    min="30"
                    max="300"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="75"
                  />
                  {errors.kilo && (
                    <p className="text-red-500 text-sm mt-1">{errors.kilo.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Boy (cm)
                  </label>
                  <input
                    {...register("boy", { 
                      required: "Boy gerekli",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Geçerli boy girin"
                      }
                    })}
                    type="number"
                    min="100"
                    max="250"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="180"
                  />
                  {errors.boy && (
                    <p className="text-red-500 text-sm mt-1">{errors.boy.message}</p>
                  )}
                </div>
              </div>

              {/* Adres - Full Width */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Adres
                </label>
                <textarea
                  {...register("adres", { 
                    required: "Adres gerekli",
                    minLength: {
                      value: 10,
                      message: "Adres en az 10 karakter olmalı"
                    }
                  })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                  placeholder="Tam adresinizi girin..."
                />
                {errors.adres && (
                  <p className="text-red-500 text-sm mt-1">{errors.adres.message}</p>
                )}
              </div>

              {status && (
                <div
                  className={`${status.type === 'success' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'} border px-4 py-3 rounded`}
                >
                  {status.message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-white py-3 px-6 rounded-lg transition-colors duration-300 ${isSubmitting ? 'bg-teal-400 cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-700'}`}
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Formu Gönder'}
              </button>
            </form>
          </div>

          {/* Sağ: Harita */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Konum</h3>
            
            <div className="bg-gray-100 rounded-lg overflow-hidden mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.275583369147!2d28.9764!3d41.0082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzI5LjUiTiAyOMKwNTgnMzUuNCJF!5e0!3m2!1str!2str!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Adres Bilgisi */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-teal-600 text-sm">📍</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Adres</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-teal-600 text-sm">📞</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Telefon</h4>
                  <p className="text-gray-600 text-sm">+90 (212) 555 0123</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-teal-600 text-sm">🕒</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Çalışma Saatleri</h4>
                  <p className="text-gray-600 text-sm">Pazartesi - Cuma: 09:00 - 18:00</p>
                  <p className="text-gray-500 text-sm">Cumartesi: 09:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Contact