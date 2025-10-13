"use client";
import React, { useState } from 'react';

interface FormData {
  name: string;
  surname: string;
  mail: string;
  phone_number: string;
  description: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    mail: '',
    phone_number: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/sponsorship', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          surname: formData.surname,
          mail: formData.mail,
          phone_number: formData.phone_number,
          description: formData.description
        }),
      });

      // Check HTTP status first
      if (!response.ok) {
        const text = await response.text().catch(() => '');
        console.error('HTTP error', response.status, text);
        setSubmitStatus('error');
        setErrorMessage('Sunucu hatası oluştu. Lütfen daha sonra tekrar deneyin.');
        return;
      }

      // Try to parse JSON, but handle unexpected shapes
      let result: any;
      try {
        result = await response.json();
      } catch (jsonErr) {
        console.error('JSON parse error:', jsonErr);
        setSubmitStatus('error');
        setErrorMessage('Sunucudan beklenmeyen cevap alındı.');
        return;
      }

      // Expect API to return something like { ok: true } or { ok: false, error: '...' }
      if (result && result.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          surname: '',
          mail: '',
          phone_number: '',
          description: ''
        });
      } else {
        console.error('API responded with error:', result);
        setSubmitStatus('error');
        setErrorMessage(result?.error === 'VALIDATION_ERROR'
          ? 'Lütfen tüm alanları doğru şekilde doldurun.'
          : 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Bir ağ hatası oluştu. Lütfen internet bağlantınızı kontrol edin.');
      console.error('Ağ hatası:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Kurumsal Bilgi Bölümü - Genişletilmiş */}
        <div className="md:w-2/5 bg-gradient-to-br from-blue-800 to-indigo-900 text-white p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-3">
                <span className="text-blue-800 font-bold text-xl">HSD</span>
              </div>
              <h1 className="text-2xl font-bold">HSD İstinye</h1>
            </div>
            
            <h2 className="text-3xl font-bold mb-4">Sponsorluk Başvuru Formu</h2>
            <p className="text-blue-200 mb-6">
              Kurumsal sponsorluk başvuruları için iletişim bilgilerinizi eksiksiz doldurunuz.
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
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
              Başvurunuz başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
              {errorMessage}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Adınız <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Adınızı giriniz"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="surname" className="block text-sm font-medium text-gray-700 mb-1">
                  Soyadınız <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Soyadınızı giriniz"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="mail" className="block text-sm font-medium text-gray-700 mb-1">
                E-posta Adresiniz <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="mail"
                name="mail"
                value={formData.mail}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="ornek@email.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700 mb-1">
                Telefon Numaranız <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="05XX XXX XX XX"
                required
              />
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Açıklama
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Sponsorluk önerinizi veya eklemek istediğiniz açıklamaları yazın..."
              />
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
              © 2025 HSD İstinye. Tüm hakları saklıdır. 
              <a href="#" className="text-blue-600 hover:text-blue-800 ml-2">Gizlilik Politikası</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;