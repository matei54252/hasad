import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface Currency {
  code: string;
  name: string;
  nameAr: string;
  symbol: string;
  flag: string;
}

interface SettingsContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  language: 'ar' | 'en';
  changeLanguage: (lang: 'ar' | 'en') => void;
  currency: Currency;
  changeCurrency: (currency: Currency) => void;
  formatCurrency: (amount: number) => string;
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  updateNotifications: (notifications: Partial<SettingsContextType['notifications']>) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};

const availableCurrencies: Currency[] = [
  { code: 'SAR', name: 'Saudi Riyal', nameAr: 'الريال السعودي', symbol: 'ر.س', flag: '🇸🇦' },
  { code: 'USD', name: 'US Dollar', nameAr: 'الدولار الأمريكي', symbol: '$', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', nameAr: 'اليورو', symbol: '€', flag: '🇪🇺' },
  { code: 'GBP', name: 'British Pound', nameAr: 'الجنيه الإسترليني', symbol: '£', flag: '🇬🇧' },
  { code: 'AED', name: 'UAE Dirham', nameAr: 'الدرهم الإماراتي', symbol: 'د.إ', flag: '🇦🇪' },
  { code: 'KWD', name: 'Kuwaiti Dinar', nameAr: 'الدينار الكويتي', symbol: 'د.ك', flag: '🇰🇼' },
  { code: 'QAR', name: 'Qatari Riyal', nameAr: 'الريال القطري', symbol: 'ر.ق', flag: '🇶🇦' },
  { code: 'BHD', name: 'Bahraini Dinar', nameAr: 'الدينار البحريني', symbol: 'د.ب', flag: '🇧🇭' },
  { code: 'OMR', name: 'Omani Rial', nameAr: 'الريال العماني', symbol: 'ر.ع', flag: '🇴🇲' },
  { code: 'JOD', name: 'Jordanian Dinar', nameAr: 'الدينار الأردني', symbol: 'د.أ', flag: '🇯🇴' }
];

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [currency, setCurrency] = useState<Currency>(availableCurrencies[0]); // Default to SAR
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false
  });

  // Load settings from localStorage on mount
  useEffect(() => {
    try {
      // Load dark mode preference
      const savedDarkMode = localStorage.getItem('hasad-dark-mode');
      if (savedDarkMode !== null) {
        const isDark = savedDarkMode === 'true';
        setDarkMode(isDark);
        applyDarkMode(isDark);
      }

      // Load language preference
      const savedLanguage = localStorage.getItem('hasad-language') as 'ar' | 'en';
      if (savedLanguage && (savedLanguage === 'ar' || savedLanguage === 'en')) {
        setLanguage(savedLanguage);
        i18n.changeLanguage(savedLanguage);
        document.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = savedLanguage;
      }

      // Load currency preference
      const savedCurrency = localStorage.getItem('hasad-currency');
      if (savedCurrency) {
        const currencyData = JSON.parse(savedCurrency);
        const foundCurrency = availableCurrencies.find(c => c.code === currencyData.code);
        if (foundCurrency) {
          setCurrency(foundCurrency);
        }
      }

      // Load notification preferences
      const savedNotifications = localStorage.getItem('hasad-notifications');
      if (savedNotifications) {
        setNotifications(JSON.parse(savedNotifications));
      }
    } catch (error) {
      console.warn('Failed to load settings from localStorage:', error);
    }
  }, [i18n]);

  const applyDarkMode = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#1f2937';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f8faf9';
    }
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    applyDarkMode(newDarkMode);
    
    try {
      localStorage.setItem('hasad-dark-mode', newDarkMode.toString());
    } catch (error) {
      console.warn('Failed to save dark mode preference:', error);
    }
  };

  const changeLanguage = (lang: 'ar' | 'en') => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    
    // Only update document direction and language attribute
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    try {
      localStorage.setItem('hasad-language', lang);
    } catch (error) {
      console.warn('Failed to save language preference:', error);
    }
  };

  const changeCurrency = (newCurrency: Currency) => {
    setCurrency(newCurrency);
    
    try {
      localStorage.setItem('hasad-currency', JSON.stringify(newCurrency));
    } catch (error) {
      console.warn('Failed to save currency preference:', error);
    }
  };

  const formatCurrency = (amount: number): string => {
    try {
      // Use Intl.NumberFormat for proper currency formatting
      const formatter = new Intl.NumberFormat(language === 'ar' ? 'ar-SA' : 'en-US', {
        style: 'currency',
        currency: currency.code,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      
      return formatter.format(amount);
    } catch (error) {
      // Fallback formatting if Intl.NumberFormat fails
      console.warn('Currency formatting failed, using fallback:', error);
      return `${currency.symbol} ${amount.toFixed(2)}`;
    }
  };

  const updateNotifications = (newNotifications: Partial<SettingsContextType['notifications']>) => {
    const updated = { ...notifications, ...newNotifications };
    setNotifications(updated);
    
    try {
      localStorage.setItem('hasad-notifications', JSON.stringify(updated));
    } catch (error) {
      console.warn('Failed to save notification preferences:', error);
    }
  };

  return (
    <SettingsContext.Provider value={{
      darkMode,
      toggleDarkMode,
      language,
      changeLanguage,
      currency,
      changeCurrency,
      formatCurrency,
      notifications,
      updateNotifications
    }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { availableCurrencies };
export type { Currency };