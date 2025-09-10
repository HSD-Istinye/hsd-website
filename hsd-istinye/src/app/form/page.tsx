"use client";
import React, { useState } from 'react';

interface FormData {
  ad: string;
  soyad: string;
  email: string;
  telefon: string;
  pozisyon: string;
  departman: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    ad: '',
    soyad: '',
    email: '',
    telefon: '',
    pozisyon: '',
    departman: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simüle edilmiş API çağrısı
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form verileri:', formData);
    alert('Form başarıyla gönderildi!');
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Kurumsal Bilgi Bölümü */}
        <div className="md:w-2/5 bg-gradient-to-br from-blue-800 to-indigo-900 text-white p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-3">
                <span className="text-blue-800 font-bold text-xl">HSD</span>
              </div>
              <h1 className="text-2xl font-bold">HSD İstinye</h1>
            </div>
            
            <h2 className="text-3xl font-bold mb-4">Kişi Bilgi Formu</h2>
            <p className="text-blue-200 mb-6">
              Kurumsal iletişim ve kayıt sistemimize hoş geldiniz. Lütfen iletişim bilgilerinizi eksiksiz doldurunuz.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <span>Kişisel bilgileriniz güvende</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <span>Şifrelenmiş veri transferi</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-blue-700">
            <h3 className="font-semibold mb-2">İletişim Bilgilerimiz</h3>
            <p className="text-blue-200 text-sm">İstinye, İstanbul</p>
            <p className="text-blue-200 text-sm">+90 (212) 345 67 89</p>
            <p className="text-blue-200 text-sm">info@hsdistinye.com</p>
          </div>
        </div>
        
        {/* Form Bölümü */}
        <div className="md:w-3/5 p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800">Kişisel Bilgiler</h3>
            <p className="text-gray-500">Lütfen aşağıdaki bilgileri eksiksiz doldurunuz</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="ad" className="block text-sm font-medium text-gray-700 mb-1">
                  Adınız <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="ad"
                  name="ad"
                  value={formData.ad}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Adınızı giriniz"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="soyad" className="block text-sm font-medium text-gray-700 mb-1">
                  Soyadınız <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="soyad"
                  name="soyad"
                  value={formData.soyad}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Soyadınızı giriniz"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-posta Adresiniz <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="ornek@email.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-1">
                Telefon Numaranız <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="telefon"
                name="telefon"
                value={formData.telefon}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="05XX XXX XX XX"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="departman" className="block text-sm font-medium text-gray-700 mb-1">
                  Departman
                </label>
                <select
                  id="departman"
                  name="departman"
                  value={formData.departman}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                >
                  <option value="">Departman seçiniz</option>
                  <option value="IT">Bilişim Teknolojileri</option>
                  <option value="HR">İnsan Kaynakları</option>
                  <option value="Finance">Finans</option>
                  <option value="Sales">Satış</option>
                  <option value="Marketing">Pazarlama</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="pozisyon" className="block text-sm font-medium text-gray-700 mb-1">
                  Pozisyon
                </label>
                <input
                  type="text"
                  id="pozisyon"
                  name="pozisyon"
                  value={formData.pozisyon}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Pozisyonunuz"
                />
              </div>
            </div>
            
            <div className="flex items-center">
              <input
                id="kvkk"
                name="kvkk"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                required
              />
              <label htmlFor="kvkk" className="ml-2 block text-sm text-gray-700">
                <a href="#" className="text-blue-600 hover:text-blue-800">KVKK bilgilendirme metnini</a> okudum ve onaylıyorum.
              </label>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 transition shadow-md flex items-center justify-center disabled:opacity-75"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Gönderiliyor...
                </>
              ) : 'Gönder'}
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-xs text-gray-500">
              © 2023 HSD İstinye. Tüm hakları saklıdır. 
              <a href="#" className="text-blue-600 hover:text-blue-800 ml-2">Gizlilik Politikası</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;