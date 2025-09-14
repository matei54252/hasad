import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation & Layout
      "administration": "Administration",
      "readOnly": "Read-only",
      "dashboard": "Dashboard",
      "farmers": "Farmers",
      "consumers": "Consumers",
      "alerts": "Alerts",
      "settings": "Settings",
      "profile": "Profile",
      "logout": "Logout",
      
      // KPI Cards
      "totalFarmers": "Total Farmers",
      "totalConsumers": "Total Consumers",
      "activeDevices": "Active Devices",
      "openAlerts": "Open Alerts",
      "monthlyRevenue": "Monthly Revenue",
      "systemUptime": "System Uptime",
      "dataProcessed": "Data Processed",
      "avgResponseTime": "Avg Response Time",
      
      // Table Headers
      "name": "Name",
      "email": "Email",
      "status": "Status",
      "location": "Location",
      "joinDate": "Join Date",
      "lastActive": "Last Active",
      "farmSites": "Farm Sites",
      "totalOrders": "Total Orders",
      "revenue": "Revenue",
      "devices": "Devices",
      "subscription": "Subscription",
      "tier": "Tier",
      "actions": "Actions",
      
      // Status Values
      "active": "Active",
      "inactive": "Inactive",
      "suspended": "Suspended",
      "pending": "Pending",
      "verified": "Verified",
      "unverified": "Unverified",
      "online": "Online",
      "offline": "Offline",
      "maintenance": "Maintenance",
      
      // Subscription Tiers
      "basic": "Basic",
      "premium": "Premium",
      "enterprise": "Enterprise",
      "trial": "Trial",
      
      // Common Actions
      "view": "View",
      "search": "Search",
      "filter": "Filter",
      "sort": "Sort",
      "export": "Export",
      "refresh": "Refresh",
      "close": "Close",
      "loading": "Loading...",
      "noData": "No data available",
      "error": "Error",
      
      // Search & Filters
      "searchUsers": "Search users...",
      "searchFarmers": "Search farmers...",
      "searchConsumers": "Search consumers...",
      "filterByStatus": "Filter by status",
      "filterByLocation": "Filter by location",
      "filterByTier": "Filter by tier",
      "allStatuses": "All Statuses",
      "allLocations": "All Locations",
      "allTiers": "All Tiers",
      
      // Detail Drawer
      "userDetails": "User Details",
      "accountInformation": "Account Information",
      "contactInformation": "Contact Information",
      "farmInformation": "Farm Information",
      "deviceStatus": "Device Status",
      "recentActivity": "Recent Activity",
      "iotControls": "IoT Controls",
      "subscriptionDetails": "Subscription Details",
      "orderHistory": "Order History",
      
      // Alerts
      "criticalAlerts": "Critical Alerts",
      "warningAlerts": "Warning Alerts",
      "infoAlerts": "Info Alerts",
      "alertDetails": "Alert Details",
      "acknowledgeAlert": "Acknowledge Alert",
      "resolveAlert": "Resolve Alert",
      "severity": "Severity",
      "timestamp": "Timestamp",
      "source": "Source",
      "message": "Message",
      
      // Time & Dates
      "today": "Today",
      "yesterday": "Yesterday",
      "thisWeek": "This Week",
      "thisMonth": "This Month",
      "lastMonth": "Last Month",
      "minutesAgo": "{{count}} minutes ago",
      "hoursAgo": "{{count}} hours ago",
      "daysAgo": "{{count}} days ago",
      
      // Language
      "selectLanguage": "Select Language",
      "arabic": "Arabic",
      "english": "English",
      "switchToArabic": "Switch to Arabic",
      "switchToEnglish": "Switch to English",
      
      // Accessibility
      "adminReadOnlyNotice": "This is a read-only administrative interface. No changes can be made to user accounts or system settings.",
      "viewUserDetails": "View user details",
      "sortBy": "Sort by {{field}}",
      "filterBy": "Filter by {{field}}",
      "currentPage": "Page {{current}} of {{total}}",
      
      // Device Types
      "waterPump": "Water Pump",
      "irrigation": "Irrigation",
      "lighting": "Lighting",
      "ventilation": "Ventilation",
      "sensors": "Sensors",
      "nutrientDoser": "Nutrient Doser",
      
      // Metrics
      "temperature": "Temperature",
      "humidity": "Humidity",
      "ph": "pH Level",
      "waterLevel": "Water Level",
      "lightIntensity": "Light Intensity",
      "co2Level": "CO₂ Level",
      "uptime": "Uptime",
      "lastUpdate": "Last Update",
      
      // Empty States
      "noFarmersFound": "No farmers found",
      "noConsumersFound": "No consumers found",
      "noAlertsFound": "No alerts found",
      "noDevicesFound": "No devices found",
      "noActivityFound": "No recent activity found",
      
      // Pagination
      "previous": "Previous",
      "next": "Next",
      "page": "Page",
      "of": "of",
      "showing": "Showing",
      "to": "to",
      "entries": "entries",
      "totalEntries": "total entries"
    }
  },
  ar: {
    translation: {
      // Navigation & Layout
      "administration": "الإدارة",
      "readOnly": "للقراءة فقط",
      "dashboard": "لوحة التحكم",
      "farmers": "المزارعون",
      "consumers": "المستهلكون",
      "alerts": "التنبيهات",
      "settings": "الإعدادات",
      "profile": "الملف الشخصي",
      "logout": "تسجيل الخروج",
      
      // KPI Cards
      "totalFarmers": "إجمالي المزارعين",
      "totalConsumers": "إجمالي المستهلكين",
      "activeDevices": "الأجهزة النشطة",
      "openAlerts": "التنبيهات المفتوحة",
      "monthlyRevenue": "الإيرادات الشهرية",
      "systemUptime": "وقت تشغيل النظام",
      "dataProcessed": "البيانات المعالجة",
      "avgResponseTime": "متوسط وقت الاستجابة",
      
      // Table Headers
      "name": "الاسم",
      "email": "البريد الإلكتروني",
      "status": "الحالة",
      "location": "الموقع",
      "joinDate": "تاريخ الانضمام",
      "lastActive": "آخر نشاط",
      "farmSites": "مواقع المزارع",
      "totalOrders": "إجمالي الطلبات",
      "revenue": "الإيرادات",
      "devices": "الأجهزة",
      "subscription": "الاشتراك",
      "tier": "المستوى",
      "actions": "الإجراءات",
      
      // Status Values
      "active": "نشط",
      "inactive": "غير نشط",
      "suspended": "معلق",
      "pending": "معلق",
      "verified": "موثق",
      "unverified": "غير موثق",
      "online": "متصل",
      "offline": "غير متصل",
      "maintenance": "صيانة",
      
      // Subscription Tiers
      "basic": "أساسي",
      "premium": "مميز",
      "enterprise": "مؤسسي",
      "trial": "تجريبي",
      
      // Common Actions
      "view": "عرض",
      "search": "بحث",
      "filter": "تصفية",
      "sort": "ترتيب",
      "export": "تصدير",
      "refresh": "تحديث",
      "close": "إغلاق",
      "loading": "جاري التحميل...",
      "noData": "لا توجد بيانات متاحة",
      "error": "خطأ",
      
      // Search & Filters
      "searchUsers": "البحث عن المستخدمين...",
      "searchFarmers": "البحث عن المزارعين...",
      "searchConsumers": "البحث عن المستهلكين...",
      "filterByStatus": "تصفية حسب الحالة",
      "filterByLocation": "تصفية حسب الموقع",
      "filterByTier": "تصفية حسب المستوى",
      "allStatuses": "جميع الحالات",
      "allLocations": "جميع المواقع",
      "allTiers": "جميع المستويات",
      
      // Detail Drawer
      "userDetails": "تفاصيل المستخدم",
      "accountInformation": "معلومات الحساب",
      "contactInformation": "معلومات الاتصال",
      "farmInformation": "معلومات المزرعة",
      "deviceStatus": "حالة الأجهزة",
      "recentActivity": "النشاط الأخير",
      "iotControls": "تحكم إنترنت الأشياء",
      "subscriptionDetails": "تفاصيل الاشتراك",
      "orderHistory": "تاريخ الطلبات",
      
      // Alerts
      "criticalAlerts": "تنبيهات حرجة",
      "warningAlerts": "تنبيهات تحذيرية",
      "infoAlerts": "تنبيهات إعلامية",
      "alertDetails": "تفاصيل التنبيه",
      "acknowledgeAlert": "إقرار التنبيه",
      "resolveAlert": "حل التنبيه",
      "severity": "الخطورة",
      "timestamp": "الطابع الزمني",
      "source": "المصدر",
      "message": "الرسالة",
      
      // Time & Dates
      "today": "اليوم",
      "yesterday": "أمس",
      "thisWeek": "هذا الأسبوع",
      "thisMonth": "هذا الشهر",
      "lastMonth": "الشهر الماضي",
      "minutesAgo": "منذ {{count}} دقيقة",
      "hoursAgo": "منذ {{count}} ساعة",
      "daysAgo": "منذ {{count}} يوم",
      
      // Language
      "selectLanguage": "اختر اللغة",
      "arabic": "العربية",
      "english": "الإنجليزية",
      "switchToArabic": "التبديل إلى العربية",
      "switchToEnglish": "التبديل إلى الإنجليزية",
      
      // Accessibility
      "adminReadOnlyNotice": "هذه واجهة إدارية للقراءة فقط. لا يمكن إجراء تغييرات على حسابات المستخدمين أو إعدادات النظام.",
      "viewUserDetails": "عرض تفاصيل المستخدم",
      "sortBy": "ترتيب حسب {{field}}",
      "filterBy": "تصفية حسب {{field}}",
      "currentPage": "الصفحة {{current}} من {{total}}",
      
      // Device Types
      "waterPump": "مضخة المياه",
      "irrigation": "الري",
      "lighting": "الإضاءة",
      "ventilation": "التهوية",
      "sensors": "أجهزة الاستشعار",
      "nutrientDoser": "موزع المغذيات",
      
      // Metrics
      "temperature": "درجة الحرارة",
      "humidity": "الرطوبة",
      "ph": "مستوى الحموضة",
      "waterLevel": "مستوى المياه",
      "lightIntensity": "شدة الإضاءة",
      "co2Level": "مستوى ثاني أكسيد الكربون",
      "uptime": "وقت التشغيل",
      "lastUpdate": "آخر تحديث",
      
      // Empty States
      "noFarmersFound": "لم يتم العثور على مزارعين",
      "noConsumersFound": "لم يتم العثور على مستهلكين",
      "noAlertsFound": "لم يتم العثور على تنبيهات",
      "noDevicesFound": "لم يتم العثور على أجهزة",
      "noActivityFound": "لم يتم العثور على نشاط حديث",
      
      // Pagination
      "previous": "السابق",
      "next": "التالي",
      "page": "صفحة",
      "of": "من",
      "showing": "عرض",
      "to": "إلى",
      "entries": "إدخالات",
      "totalEntries": "إجمالي الإدخالات"
    }
  }
};

// Get stored language preference or default to English
const getStoredLanguage = (): 'ar' | 'en' => {
  try {
    const stored = localStorage.getItem('hasad-admin-language');
    return (stored === 'ar' || stored === 'en') ? stored : 'en';
  } catch {
    return 'en';
  }
};

// Store language preference
const storeLanguage = (language: 'ar' | 'en') => {
  try {
    localStorage.setItem('hasad-admin-language', language);
  } catch (error) {
    console.warn('Failed to store language preference:', error);
  }
};

// Set document direction and language attributes
const setDocumentDirection = (language: 'ar' | 'en') => {
  const isRTL = language === 'ar';
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.documentElement.lang = language;
  
  // Add/remove RTL class for additional styling if needed
  if (isRTL) {
    document.documentElement.classList.add('rtl');
    document.documentElement.classList.remove('ltr');
  } else {
    document.documentElement.classList.add('ltr');
    document.documentElement.classList.remove('rtl');
  }
};

// Initialize i18n
const initI18n = async () => {
  try {
    const initialLanguage = getStoredLanguage();
    
    await i18n.use(initReactI18next).init({
      resources,
      lng: initialLanguage,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false
      },
      react: {
        useSuspense: false
      },
      debug: import.meta.env.DEV
    });
    
    // Set initial document direction
    setDocumentDirection(initialLanguage);
    
    console.log('✅ i18n initialized successfully with language:', initialLanguage);
  } catch (error) {
    console.error('❌ Failed to initialize i18n:', error);
    // Fallback to English
    setDocumentDirection('en');
  }
};

// Language change handler
export const changeLanguage = (language: 'ar' | 'en') => {
  i18n.changeLanguage(language);
  setDocumentDirection(language);
  storeLanguage(language);
};

// Format numbers according to locale
export const formatNumber = (value: number, locale?: string): string => {
  const currentLocale = locale || i18n.language;
  const localeCode = currentLocale === 'ar' ? 'ar-SA' : 'en-US';
  
  try {
    return new Intl.NumberFormat(localeCode).format(value);
  } catch {
    return value.toString();
  }
};

// Format currency according to locale
export const formatCurrency = (value: number, currency = 'SAR', locale?: string): string => {
  const currentLocale = locale || i18n.language;
  const localeCode = currentLocale === 'ar' ? 'ar-SA' : 'en-US';
  
  try {
    return new Intl.NumberFormat(localeCode, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  } catch {
    return `${currency} ${value.toFixed(2)}`;
  }
};

// Format dates according to locale
export const formatDate = (date: string | Date, locale?: string): string => {
  const currentLocale = locale || i18n.language;
  const localeCode = currentLocale === 'ar' ? 'ar-SA' : 'en-US';
  
  try {
    return new Intl.DateTimeFormat(localeCode, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(new Date(date));
  } catch {
    return new Date(date).toLocaleDateString();
  }
};

// Format relative time according to locale
export const formatRelativeTime = (date: string | Date, locale?: string): string => {
  const currentLocale = locale || i18n.language;
  const localeCode = currentLocale === 'ar' ? 'ar-SA' : 'en-US';
  
  try {
    const rtf = new Intl.RelativeTimeFormat(localeCode, { numeric: 'auto' });
    const now = new Date();
    const targetDate = new Date(date);
    const diffInSeconds = (targetDate.getTime() - now.getTime()) / 1000;
    
    if (Math.abs(diffInSeconds) < 60) {
      return rtf.format(Math.round(diffInSeconds), 'second');
    } else if (Math.abs(diffInSeconds) < 3600) {
      return rtf.format(Math.round(diffInSeconds / 60), 'minute');
    } else if (Math.abs(diffInSeconds) < 86400) {
      return rtf.format(Math.round(diffInSeconds / 3600), 'hour');
    } else {
      return rtf.format(Math.round(diffInSeconds / 86400), 'day');
    }
  } catch {
    // Fallback to simple format
    const diffInHours = (new Date(date).getTime() - new Date().getTime()) / (1000 * 60 * 60);
    if (Math.abs(diffInHours) < 24) {
      return i18n.t('hoursAgo', { count: Math.abs(Math.round(diffInHours)) });
    } else {
      return i18n.t('daysAgo', { count: Math.abs(Math.round(diffInHours / 24)) });
    }
  }
};

// Initialize i18n
initI18n();

export default i18n;