import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSettings } from '../../contexts/SettingsContext';
import { useAuth } from '../../contexts/AuthContext';
import { 
  ArrowLeft, 
  Globe, 
  DollarSign, 
  Bell, 
  Moon, 
  Sun, 
  HelpCircle, 
  Info, 
  ChevronRight,
  User,
  Mail,
  Calendar,
  CreditCard,
  Shield,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface SettingsScreenProps {
  onBack: () => void;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({ onBack }) => {
  const { t, i18n } = useTranslation();
  const { 
    darkMode, 
    toggleDarkMode, 
    language, 
    changeLanguage, 
    currency, 
    changeCurrency, 
    notifications, 
    updateNotifications 
  } = useSettings();
  const { user } = useAuth();
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showCurrencyModal, setShowCurrencyModal] = useState(false);

  const languages = [
    { code: 'ar', name: 'العربية', nameEn: 'Arabic', flag: '🇸🇦' },
    { code: 'en', name: 'English', nameEn: 'English', flag: '🇺🇸' }
  ];

  const currencies = [
    { code: 'SAR', name: 'الريال السعودي', nameEn: 'Saudi Riyal', symbol: 'ر.س', flag: '🇸🇦' },
    { code: 'USD', name: 'الدولار الأمريكي', nameEn: 'US Dollar', symbol: '$', flag: '🇺🇸' },
    { code: 'EUR', name: 'اليورو', nameEn: 'Euro', symbol: '€', flag: '🇪🇺' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const settingsSections = [
    {
      title: t('appPreferences'),
      icon: <User className="w-5 h-5" />,
      items: [
        {
          id: 'language',
          label: t('selectLanguage'),
          value: currentLanguage.name,
          icon: <Globe className="w-5 h-5" />,
          action: () => setShowLanguageModal(true),
          description: 'Change app language and region'
        },
        {
          id: 'currency',
          label: 'العملة المفضلة',
          value: `${currency.symbol} ${currency.nameAr}`,
          icon: <DollarSign className="w-5 h-5" />,
          action: () => setShowCurrencyModal(true),
          description: 'Set your preferred currency'
        },
        {
          id: 'darkMode',
          label: 'الوضع المظلم',
          value: darkMode ? 'مفعل' : 'معطل',
          icon: darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />,
          action: toggleDarkMode,
          description: 'Toggle dark/light theme',
          toggle: true,
          toggleValue: darkMode
        }
      ]
    },
    {
      title: t('notifications'),
      icon: <Bell className="w-5 h-5" />,
      items: [
        {
          id: 'emailNotifications',
          label: 'إشعارات البريد الإلكتروني',
          value: notifications.email ? 'مفعل' : 'معطل',
          icon: <Mail className="w-5 h-5" />,
          action: () => updateNotifications({ email: !notifications.email }),
          description: 'Receive updates via email',
          toggle: true,
          toggleValue: notifications.email
        },
        {
          id: 'pushNotifications',
          label: 'الإشعارات الفورية',
          value: notifications.push ? 'مفعل' : 'معطل',
          icon: <Bell className="w-5 h-5" />,
          action: () => updateNotifications({ push: !notifications.push }),
          description: 'Receive push notifications',
          toggle: true,
          toggleValue: notifications.push
        },
        {
          id: 'smsNotifications',
          label: 'إشعارات الرسائل النصية',
          value: notifications.sms ? 'مفعل' : 'معطل',
          icon: <Bell className="w-5 h-5" />,
          action: () => updateNotifications({ sms: !notifications.sms }),
          description: 'Receive SMS notifications',
          toggle: true,
          toggleValue: notifications.sms
        }
      ]
    },
    {
      title: t('helpAndSupport'),
      icon: <HelpCircle className="w-5 h-5" />,
      items: [
        {
          id: 'help',
          label: 'المساعدة والدعم',
          value: 'احصل على المساعدة',
          icon: <HelpCircle className="w-5 h-5" />,
          action: () => console.log('Help'),
          description: 'Get help and support'
        },
        {
          id: 'about',
          label: 'حول حصاد',
          value: 'الإصدار 1.0.0',
          icon: <Info className="w-5 h-5" />,
          action: () => console.log('About'),
          description: 'App version and information'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 preserve-position">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 preserve-position">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label={`${t('switchTo')} ${language.name}`}
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <h1 className="text-xl font-bold text-gray-900">{t('settings')}</h1>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* User Profile Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
              <span className="text-2xl text-white">{user?.avatar || '👤'}</span>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900 mb-1">{user?.name}</h2>
              <p className="text-gray-600 text-sm mb-2">{user?.email}</p>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                  {user?.type === 'farmer' ? '👨‍🌾 مزارع' : '🛒 مستهلك'}
                </span>
                <span className="text-green-600 text-sm font-medium">⭐ 4.8</span>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Sections */}
        {settingsSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Section Header */}
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="text-gray-700">
                  {section.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
              </div>
            </div>

            {/* Section Items */}
            <div className="divide-y divide-gray-100">
              {section.items.map((item, itemIndex) => (
                <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className="text-gray-600">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-medium text-gray-900 mb-1">{item.label}</h4>
                        <p className="text-sm text-gray-600 break-words">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 ml-4">
                      {item.toggle ? (
                        <button
                          onClick={item.action}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                            item.toggleValue ? 'bg-green-600' : 'bg-gray-300'
                          }`}
                          role="switch"
                          aria-checked={item.toggleValue}
                          aria-label={`Toggle ${item.label}`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              item.toggleValue ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      ) : (
                        <>
                          <span className="text-sm text-gray-500 font-medium truncate max-w-[120px]">
                            {item.value}
                          </span>
                          <button
                            onClick={item.action}
                            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                            aria-label={`Change ${item.label}`}
                          >
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Account Information Section - Redesigned with proper contrast */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-green-600 px-6 py-4">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-white" />
              <h3 className="text-lg font-semibold text-white">معلومات الحساب</h3>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between py-2">
              <span className="text-sm font-medium text-gray-700">البريد الإلكتروني:</span>
              <span className="text-sm text-gray-900 font-medium break-all">amrshasanin@gmail.com</span>
            </div>
            
            <div className="flex items-center justify-between py-2">
              <span className="text-sm font-medium text-gray-700">نوع الحساب:</span>
              <span className="text-sm text-gray-900 font-medium">مستهلك</span>
            </div>
            
            <div className="flex items-center justify-between py-2">
              <span className="text-sm font-medium text-gray-700">العملة المفضلة:</span>
              <span className="text-sm text-gray-900 font-medium">ر.س الريال السعودي (SAR)</span>
            </div>
            
            <div className="flex items-center justify-between py-2">
              <span className="text-sm font-medium text-gray-700">تاريخ الانضمام:</span>
              <span className="text-sm text-gray-900 font-medium">يناير 2024</span>
            </div>
          </div>
        </div>

        {/* Environment Status Section - New design with proper contrast */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-white" />
              <h3 className="text-lg font-semibold text-white">حالة التطبيق</h3>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <div>
                  <p className="text-sm font-semibold text-green-800">متصل</p>
                  <p className="text-xs text-green-700">الخدمة تعمل بشكل طبيعي</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <Info className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="text-sm font-semibold text-blue-800">آخر تحديث</p>
                  <p className="text-xs text-blue-700">منذ دقيقتين</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-gray-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-800 mb-1">ملاحظة هامة</p>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    جميع بياناتك محمية ومشفرة. يتم حفظ التفضيلات محلياً على جهازك لضمان الخصوصية والأمان.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App Version Footer */}
        <div className="text-center py-6">
          <p className="text-sm text-gray-500 mb-1">HASAD v1.0.0</p>
          <p className="text-xs text-gray-400">الزراعة الذكية في متناول يدك</p>
        </div>
      </div>

      {/* Language Selection Modal */}
      {showLanguageModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">{t('selectLanguage')}</h3>
            </div>
            
            <div className="p-6 space-y-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    changeLanguage(lang.code as 'ar' | 'en');
                    setShowLanguageModal(false);
                  }}
                  className={`w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all ${
                    i18n.language === lang.code
                      ? 'border-green-500 bg-green-50 text-green-800'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <div className="flex-1 text-left">
                    <p className="font-medium">{lang.name}</p>
                    <p className="text-sm text-gray-600">{lang.nameEn}</p>
                  </div>
                  {i18n.language === lang.code && (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  )}
                </button>
              ))}
            </div>

            <div className="p-6 border-t border-gray-200">
              <button
                onClick={() => setShowLanguageModal(false)}
                className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                {t('cancel')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Currency Selection Modal */}
      {showCurrencyModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">اختر العملة</h3>
            </div>
            
            <div className="p-6 space-y-3 max-h-80 overflow-y-auto">
              {currencies.map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => {
                    changeCurrency(curr);
                    setShowCurrencyModal(false);
                  }}
                  className={`w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all ${
                    currency.code === curr.code
                      ? 'border-green-500 bg-green-50 text-green-800'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-2xl">{curr.flag}</span>
                  <div className="flex-1 text-left">
                    <p className="font-medium">{curr.name}</p>
                    <p className="text-sm text-gray-600">{curr.symbol} {curr.nameEn}</p>
                  </div>
                  {currency.code === curr.code && (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  )}
                </button>
              ))}
            </div>

            <div className="p-6 border-t border-gray-200">
              <button
                onClick={() => setShowCurrencyModal(false)}
                className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                {t('cancel')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};