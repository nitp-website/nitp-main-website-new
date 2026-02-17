'use client';

import { useEffect, useState } from 'react';

const LANGUAGES = [
  { label: 'English', value: '/auto/en' },
  { label: 'हिंदी', value: '/auto/hi' }
];

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('English');
  const [showPopup, setShowPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check Cookies for existing selection
    const cookies = document.cookie.split(';');
    const googCookie = cookies.find(c => c.trim().startsWith('googtrans='));
    
    if (googCookie) {
      const val = googCookie.split('=')[1];
      if (val === '/auto/hi') setSelectedLanguage('हिंदी');
      else setSelectedLanguage('English');
    }

    // Check LocalStorage for first-time popup
    const storedLang = localStorage.getItem('language_preference');
    if (!storedLang) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const googleTranslateElementInit = () => {
    // @ts-ignore
    new window.google.translate.TranslateElement(
      {
        pageLanguage: 'auto',
        includedLanguages: 'en,hi',
        autoDisplay: false,
      },
      'google_translate_element'
    );
  };

  useEffect(() => {
    // Inject Google Translate script if not exists
    const scriptId = 'google-translate-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
      // @ts-ignore
      window.googleTranslateElementInit = googleTranslateElementInit;
    }
  }, []);

  const changeLanguage = (langLabel: string, langValue: string) => {
    // Set cookie for Google Translate
    document.cookie = `googtrans=${langValue}; path=/; domain=${window.location.hostname}`;
    document.cookie = `googtrans=${langValue}; path=/;`;

    // Save preference
    localStorage.setItem('language_preference', langLabel);
    setSelectedLanguage(langLabel);
    setIsOpen(false);
    setShowPopup(false);

    // Reload to apply translation
    window.location.reload();
  };

  return (
    <>
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>

      {/* Clean Professional Selector */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-1.5 text-white text-sm font-medium hover:bg-white/10 rounded transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
          <span className="notranslate">{selectedLanguage}</span>
          <svg 
            className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div
            className="absolute left-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50"
            onMouseLeave={() => setIsOpen(false)}
          >
            {LANGUAGES.map((lang) => (
              <button
                key={lang.label}
                onClick={() => changeLanguage(lang.label, lang.value)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors notranslate ${
                  selectedLanguage === lang.label
                    ? 'bg-gray-100 text-gray-900 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Professional Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Select Language
              </h3>
              <p className="text-sm text-gray-600">
                Choose your preferred language
              </p>
            </div>

            <div className="space-y-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.label}
                  onClick={() => changeLanguage(lang.label, lang.value)}
                  className={`w-full py-3 px-4 rounded-md text-sm font-medium transition-colors ${
                    selectedLanguage === lang.label
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
