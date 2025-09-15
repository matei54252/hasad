import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Pseudo-locale for testing
const createPseudoTranslations = (translations: Record<string, string>) => {
  const pseudo: Record<string, string> = {};
  
  Object.keys(translations).forEach(key => {
    const original = translations[key];
    // Expand text by 30% and add brackets to reveal truncation
    const expanded = `[${original}ـــ]`;
    pseudo[key] = expanded;
  });
  
  return pseudo;
};

// Missing key tracker for development
class MissingKeyTracker {
  private missingKeys = new Set<string>();
  private reportedKeys = new Set<string>();

  track(key: string, namespace: string = 'translation') {
    const fullKey = `${namespace}:${key}`;
    this.missingKeys.add(fullKey);
    
    if (!this.reportedKeys.has(fullKey) && import.meta.env.DEV) {
      console.warn(`🔍 Missing translation key: ${fullKey}`);
      this.reportedKeys.add(fullKey);
    }
  }

  getMissingKeys() {
    return Array.from(this.missingKeys);
  }

  clear() {
    this.missingKeys.clear();
    this.reportedKeys.clear();
  }
}

export const missingKeyTracker = new MissingKeyTracker();

// Translation resources
const resources = {
  en: {
    translation: {
      // Authentication
      "signInAccount": "Sign in to your account",
      "createAccount": "Create your account",
      "welcomeBack": "Welcome back",
      "email": "Email",
      "password": "Password",
      "confirmPassword": "Confirm Password",
      "login": "Login",
      "signup": "Sign Up",
      "logout": "Logout",
      "loading": "Loading...",
      "rememberMe": "Remember me",
      "forgotPassword": "Forgot password?",
      "dontHaveAccount": "Don't have an account?",
      "alreadyHaveAccount": "Already have an account?",
      "passwordsDoNotMatch": "Passwords do not match",
      
      // Navigation & Layout
      "administration": "Administration",
      "readOnly": "Read-only",
      "dashboard": "Dashboard",
      "farmers": "Farmers",
      "consumers": "Consumers",
      "alerts": "Alerts",
      "settings": "Settings",
      "profile": "Profile",
      "home": "Home",
      "marketplace": "Marketplace",
      "shopping": "Shopping",
      "plans": "Plans",
      "crops": "Crops",
      "cart": "Cart",
      "orders": "Orders",
      "messages": "Messages",
      "analytics": "Analytics",
      
      // Contact Management
      "contacts": "Contacts",
      "addContact": "Add Contact",
      "editContact": "Edit Contact",
      "deleteContact": "Delete Contact",
      "deleteConfirm": "Are you sure you want to delete this contact?",
      "manageContacts": "Manage your contacts efficiently",
      "noContacts": "No contacts found",
      "personalInfo": "Personal Information",
      "contactInfo": "Contact Information",
      "name": "Name",
      "type": "Type",
      "nationality": "Nationality",
      "uploadId": "Upload ID",
      "chooseFile": "Choose file",
      "mobile": "Mobile",
      "telephone": "Telephone",
      "address": "Address",
      "city": "City",
      "country": "Country",
      "postcode": "Postcode",
      "consumer": "Consumer",
      "institutional": "Institutional",
      "corporate": "Corporate",
      "save": "Save",
      "cancel": "Cancel",
      "edit": "Edit",
      "delete": "Delete",
      "search": "Search",
      "filter": "Filter",
      
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
      "sort": "Sort",
      "export": "Export",
      "refresh": "Refresh",
      "close": "Close",
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
      "hourAgo": "1 hour ago",
      "dayAgo": "1 day ago",
      
      // Language
      "selectLanguage": "Select Language",
      "arabic": "Arabic",
      "english": "English",
      "switchTo": "Switch to ",
      
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
      "totalEntries": "total entries",
      
      // App Content
      "goodMorning": "Good morning",
      "manageFarmEfficiently": "Manage your farm efficiently",
      "discoverFreshProduce": "Discover fresh produce",
      "quickActions": "Quick Actions",
      "realTimeMonitoring": "Real-time monitoring",
      "deviceManagement": "Device management",
      "trackGrowth": "Track growth",
      "maintenanceSchedule": "Maintenance schedule",
      "performanceReports": "Performance reports",
      "sellProducts": "Sell products",
      "freshProduce": "Fresh produce",
      "deliveryPlans": "Delivery plans",
      "yourItems": "Your items",
      "orderHistory": "Order history",
      "chatWithFarmers": "Chat with farmers",
      "yourInsights": "Your insights",
      "todaysWeather": "Today's weather",
      "partlyCloudy": "Partly cloudy",
      "uvIndex": "UV Index",
      "farmOverview": "Farm overview",
      "activeCrops": "Active crops",
      "pendingOrders": "Pending orders",
      "thisMonth": "This month",
      "featuredProducts": "Featured products",
      "freshLettuce": "Fresh lettuce",
      "organicTomatoes": "Organic tomatoes",
      "sweetCorn": "Sweet corn",
      "kg": "kg",
      "greenValleyFarm": "Green Valley Farm",
      "sunnyOrganicFarm": "Sunny Organic Farm",
      "harvestHills": "Harvest Hills",
      "orderCompleted": "Order {{orderId}} completed",
      "newOrderReceived": "New order received",
      "lettuceHarvestReady": "Lettuce harvest ready",
      "orderDelivered": "Order delivered",
      "orderShipped": "Order shipped",
      "paymentProcessed": "Payment processed",
      
      // Subscription Plans
      "subscriptionPlans": "Subscription Plans",
      "freshProduceDelivered": "Fresh produce delivered to your door",
      "myActiveSubscriptions": "My Active Subscriptions",
      "availableSubscriptionPlans": "Available Subscription Plans",
      "everyWeek": "Every week",
      "everyTwoWeeks": "Every two weeks",
      "everyMonth": "Every month",
      "sunday": "Sunday",
      "monday": "Monday",
      "tuesday": "Tuesday",
      "wednesday": "Wednesday",
      "thursday": "Thursday",
      "friday": "Friday",
      "saturday": "Saturday",
      "modify": "Modify",
      "pause": "Pause",
      "resume": "Resume",
      "schedule": "Schedule",
      "nextDelivery": "Next delivery",
      "includedProducts": "Included products",
      "mostPopular": "Most Popular",
      "subscribeNow": "Subscribe Now",
      "subscribeTo": "Subscribe to",
      "subscriptionDuration": "Subscription Duration",
      "preferredDeliveryDay": "Preferred Delivery Day",
      "deliveryTimeSlot": "Delivery Time Slot",
      "morning": "Morning",
      "afternoon": "Afternoon",
      "evening": "Evening",
      "deliveryAddress": "Delivery Address",
      "specialInstructions": "Special Instructions",
      "optional": "Optional",
      "enterCompleteAddress": "Enter your complete address",
      "specialInstructionsPlaceholder": "Any special delivery instructions...",
      "planPrice": "Plan price",
      "frequency": "Frequency",
      "totalPerDelivery": "Total per delivery",
      "per": "per",
      "weeks": "weeks",
      "months": "months",
      
      // Marketplace
      "hasadMarketplace": "HASAD Marketplace",
      "searchProductsFarms": "Search products and farms...",
      "allProducts": "All Products",
      "leafyGreens": "Leafy Greens",
      "vegetables": "Vegetables",
      "herbs": "Herbs",
      "fruits": "Fruits",
      "grains": "Grains",
      "newestFirst": "Newest first",
      "priceLowToHigh": "Price: Low to High",
      "priceHighToLow": "Price: High to Low",
      "highestRated": "Highest rated",
      "filters": "Filters",
      "organic": "Organic",
      "daysFresh": "days fresh",
      "reviews": "reviews",
      "harvested": "Harvested",
      "addToCart": "Add to Cart",
      "outOfStock": "Out of Stock",
      "noProductsFound": "No products found",
      "adjustSearchCriteria": "Try adjusting your search criteria",
      "advancedFilters": "Advanced Filters",
      "priceRange": "Price Range",
      "min": "Min",
      "max": "Max",
      "farmingMethod": "Farming Method",
      "hydroponic": "Hydroponic",
      "conventional": "Conventional",
      "certifications": "Certifications",
      "fairTrade": "Fair Trade",
      "allLocations": "All Locations",
      "riyadh": "Riyadh",
      "jeddah": "Jeddah",
      "dammam": "Dammam",
      "mecca": "Mecca",
      "availability": "Availability",
      "inStockOnly": "In stock only",
      "sameDayDelivery": "Same day delivery",
      "clearFilters": "Clear Filters",
      "applyFilters": "Apply Filters",
      "available": "Available",
      "minOrder": "Min order",
      
      // Shopping Cart
      "shoppingCart": "Shopping Cart",
      "yourCartIsEmpty": "Your cart is empty",
      "addFreshProduce": "Add some fresh produce to get started",
      "browseMarketplace": "Browse Marketplace",
      "clearAll": "Clear All",
      "subtotal": "Subtotal",
      "deliveryFee": "Delivery fee",
      "tax": "Tax",
      "total": "Total",
      "proceedToCheckout": "Proceed to Checkout",
      "freeDeliveryOver": "Free delivery over",
      "estimatedDelivery": "Estimated delivery",
      "tomorrowTwoPm": "Tomorrow at 2 PM",
      "orderSummary": "Order Summary",
      
      // Settings
      "appPreferences": "App Preferences",
      "helpAndSupport": "Help & Support",
      "notifications": "Notifications",
      "smartFarmingFingerTips": "Smart farming at your fingertips",
      
      // Admin Dashboard
      "hasadAdminPanel": "HASAD Admin Panel",
      "adminPortal": "Admin Portal",
      "monitoringOnly": "Monitoring Only",
      "adminReadOnlyNotice": "This is a read-only administrative interface. No changes can be made to user accounts or system settings.",
      
      // Navigation
      "reports": "Reports",
      
      // KPI Cards
      "totalFarmers": "Total Farmers",
      "totalConsumers": "Total Consumers", 
      "activeDevices": "Active Devices",
      "openAlerts": "Open Alerts",
      "monthlyRevenue": "Monthly Revenue",
      "systemUptime": "System Uptime",
      "dataProcessed": "Data Processed",
      "avgResponseTime": "Avg Response Time",
      
      // Table Headers & Actions
      "name": "Name",
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
      "view": "View",
      
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
      
      // Search & Filters
      "searchUsers": "Search users...",
      "searchFarmers": "Search farmers...",
      "searchConsumers": "Search consumers...",
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
      "subscriptionDetails": "Subscription Details",
      
      // Alerts
      "criticalAlerts": "Critical Alerts",
      "warningAlerts": "Warning Alerts",
      "infoAlerts": "Info Alerts",
      "alertDetails": "Alert Details",
      "severity": "Severity",
      "timestamp": "Timestamp",
      "source": "Source",
      "message": "Message",
      
      // Pagination
      "previous": "Previous",
      "next": "Next",
      "page": "Page",
      "of": "of",
      "showing": "Showing",
      "to": "to",
      "entries": "entries",
      
      // Empty States
      "noFarmersFound": "No farmers found",
      "noConsumersFound": "No consumers found",
      "noAlertsFound": "No alerts found",
      
      // Accessibility
      "viewUserDetails": "View user details",
      "switchTo": "Switch to ",
      
      // Additional Admin Strings
      "adminUser": "Admin User",
      "systemAdministrator": "System Administrator",
      "adjustSearchCriteria": "Try adjusting your search or filter criteria",
      "allSeverities": "All Severities",
      "allTypes": "All Types",
      "critical": "Critical",
      "warning": "Warning",
      "info": "Info",
      "deviceFaults": "Device Faults",
      "thresholdAlerts": "Threshold Alerts",
      "maintenanceDue": "Maintenance",
      "connectivityIssues": "Connectivity",
      "harvestReady": "Harvest Ready",
      "systemUpdates": "System Updates",
      "acknowledged": "Acknowledged",
      "readOnlyView": "Read-Only View",
      "readOnlyViewDescription": "This is a monitoring interface. No changes can be made to user accounts or settings.",
      "readOnlyAlertDescription": "This is a monitoring interface. Alerts cannot be acknowledged or resolved from this view.",
      "alertId": "Alert ID",
      "type": "Type",
      "created": "Created",
      "additionalInformation": "Additional Information",
      "statusInformation": "Status Information",
      "resolved": "Resolved",
      "yes": "Yes",
      "no": "No",
      "role": "Role",
      "phone": "Phone",
      "farmName": "Farm Name",
      "farmType": "Farm Type",
      "certifications": "Certifications",
      "lastUpdate": "Last Update",
      "expiryDate": "Expiry Date",
      
      // Additional table and UI strings
      "sites": "sites",
      "ordersCount": "orders",
      "farmer": "Farmer",
      "consumer": "Consumer",
      "hydroponic": "Hydroponic",
      "organic": "Organic",
      "greenhouse": "Greenhouse",
      "conventional": "Conventional",
      
      // Alert types
      "device_fault": "Device Fault",
      "threshold_exceeded": "Threshold Exceeded",
      "maintenance_due": "Maintenance Due",
      "connectivity_issue": "Connectivity Issue",
      "harvest_ready": "Harvest Ready",
      "system_update": "System Update",
      
      // Profile Page
      "manageYourAccount": "Manage your account and preferences",
      "paymentMethods": "Payment Methods",
      "manageYourCards": "Manage your payment cards",
      "addresses": "Addresses", 
      "deliveryAddresses": "Delivery addresses",
      "notificationSettings": "Notifications",
      "managePreferences": "Manage preferences",
      "helpAndSupport": "Help & Support",
      "getAssistance": "Get assistance",
      "appPreferences": "Settings",
      "termsAndPrivacy": "Terms & Privacy",
      "legalInformation": "Legal information",
      "viewYourPerformance": "View your performance",
      "productsListed": "Products Listed",
      "ordersCompleted": "Orders Completed", 
      "totalEarnings": "Total Earnings",
      "appVersion": "App Version",
      "rating": "Rating",
      "editProfile": "Edit Profile",
      "saveChanges": "Save Changes",
      "farmLocation": "Farm Location",
      "personalInformation": "Personal Information",
      "accountStats": "Account Statistics",
      
      // Subscription Plans - Additional
      "starterFreshBox": "Starter Fresh Box",
      "familyFreshBox": "Family Fresh Box",
      "adoptARooftop": "Adopt-a-Rooftop",
      "seasonalSpecialtyBox": "Seasonal Specialty Box",
      "perfectForSmallFamilies": "Perfect for small families - 3-4 varieties of fresh produce",
      "idealForFamilies": "Ideal for families - 6-8 varieties of fresh produce",
      "sponsorYourOwnSection": "Sponsor your own section of a rooftop farm",
      "curatedSelectionSeasonal": "Curated selection of seasonal specialties and rare varieties",
      "freshSeasonalVegetables": "Fresh seasonal vegetables",
      "recipeCardsIncluded": "Recipe cards included",
      "flexibleDeliverySchedule": "Flexible delivery schedule",
      "cancelAnytime": "Cancel anytime",
      "premiumSeasonalVegetablesFruits": "Premium seasonal vegetables & fruits",
      "recipeCardsCookingTips": "Recipe cards & cooking tips",
      "priorityDeliverySlots": "Priority delivery slots",
      "substitutionPreferences": "Substitution preferences",
      "yourOwnDedicatedGrowingSpace": "Your own dedicated growing space",
      "monthlyHarvestDelivery": "Monthly harvest delivery",
      "farmVisitAccess": "Farm visit access",
      "growthProgressUpdates": "Growth progress updates",
      "personalizedCropSelection": "Personalized crop selection",
      "rareSpecialtyVarieties": "Rare & specialty varieties",
      "seasonalPeakFreshness": "Seasonal peak freshness",
      "educationalContent": "Educational content",
      "chefCollaborationRecipes": "Chef collaboration recipes",
      "premiumPackaging": "Premium packaging",
      "durationOptions": "Duration Options",
      "weeklyFreshBox": "Weekly Fresh Box",
      "myRooftopGarden": "My Rooftop Garden",
      "paused": "Paused",
      "cancelled": "Cancelled",
      "expired": "Expired",
      "myActiveSubscriptions": "My Active Subscriptions",
      "availableSubscriptionPlans": "Available Subscription Plans",
      
      // Marketplace & Cart
      "searchProducts": "Search products...",
      "allCategories": "All Categories",
      "sortBy": "Sort by",
      "priceAscending": "Price: Low to High",
      "priceDescending": "Price: High to Low",
      "ratingHighest": "Highest Rated",
      "newest": "Newest",
      "addToCart": "Add to Cart",
      "outOfStock": "Out of Stock",
      "inStock": "In Stock",
      "lowStock": "Low Stock",
      "quantity": "Quantity",
      "remove": "Remove",
      "clearCart": "Clear Cart",
      "cartEmpty": "Cart is empty",
      "startShopping": "Start shopping",
      "cartSummary": "Cart Summary",
      "itemsInCart": "item in cart",
      "itemsInCartPlural": "items in cart",
      "checkout": "Checkout",
      "continueShopping": "Continue Shopping",
      "unit": "unit",
      "piece": "piece",
      "bunch": "bunch",
      "box": "box",
      "perKg": "per kg",
      "perPiece": "per piece",
      "perBunch": "per bunch",
      "perBox": "per box",
      "productDetails": "Product Details",
      "farmerInfo": "Farmer Information",
      "nutritionFacts": "Nutrition Facts",
      "customerReviews": "Customer Reviews",
      "writeReview": "Write Review",
      "verified": "Verified",
      "helpfulVotes": "helpful votes",
      "sortReviews": "Sort Reviews",
      "mostHelpful": "Most Helpful",
      "mostRecent": "Most Recent",
      "highestRating": "Highest Rating",
      "lowestRating": "Lowest Rating"
    }
  },
  ar: {
    translation: {
      // Authentication
      "signInAccount": "تسجيل الدخول إلى حسابك",
      "createAccount": "إنشاء حساب جديد",
      "welcomeBack": "مرحباً بعودتك",
      "email": "البريد الإلكتروني",
      "password": "كلمة المرور",
      "confirmPassword": "تأكيد كلمة المرور",
      "login": "تسجيل الدخول",
      "signup": "إنشاء حساب",
      "logout": "تسجيل الخروج",
      "loading": "جاري التحميل...",
      "rememberMe": "تذكرني",
      "forgotPassword": "نسيت كلمة المرور؟",
      "dontHaveAccount": "ليس لديك حساب؟",
      "alreadyHaveAccount": "لديك حساب بالفعل؟",
      "passwordsDoNotMatch": "كلمات المرور غير متطابقة",
      
      // Navigation & Layout
      "administration": "الإدارة",
      "readOnly": "للقراءة فقط",
      "dashboard": "لوحة التحكم",
      "farmers": "المزارعون",
      "consumers": "المستهلكون",
      "alerts": "التنبيهات",
      "settings": "الإعدادات",
      "profile": "الملف الشخصي",
      "home": "الرئيسية",
      "marketplace": "السوق",
      "shopping": "التسوق",
      "plans": "الخطط",
      "crops": "المحاصيل",
      "cart": "السلة",
      "orders": "الطلبات",
      "messages": "الرسائل",
      "analytics": "التحليلات",
      
      // Contact Management
      "contacts": "جهات الاتصال",
      "addContact": "إضافة جهة اتصال",
      "editContact": "تعديل جهة الاتصال",
      "deleteContact": "حذف جهة الاتصال",
      "deleteConfirm": "هل أنت متأكد من حذف جهة الاتصال هذه؟",
      "manageContacts": "إدارة جهات الاتصال بكفاءة",
      "noContacts": "لا توجد جهات اتصال",
      "personalInfo": "المعلومات الشخصية",
      "contactInfo": "معلومات الاتصال",
      "name": "الاسم",
      "type": "النوع",
      "nationality": "الجنسية",
      "uploadId": "رفع الهوية",
      "chooseFile": "اختر ملف",
      "mobile": "الجوال",
      "telephone": "الهاتف",
      "address": "العنوان",
      "city": "المدينة",
      "country": "البلد",
      "postcode": "الرمز البريدي",
      "consumer": "مستهلك",
      "institutional": "مؤسسي",
      "corporate": "شركة",
      "save": "حفظ",
      "cancel": "إلغاء",
      "edit": "تعديل",
      "delete": "حذف",
      "search": "بحث",
      "filter": "تصفية",
      
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
      "sort": "ترتيب",
      "export": "تصدير",
      "refresh": "تحديث",
      "close": "إغلاق",
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
      "hourAgo": "منذ ساعة واحدة",
      "dayAgo": "منذ يوم واحد",
      
      // Language
      "selectLanguage": "اختر اللغة",
      "arabic": "العربية",
      "english": "الإنجليزية",
      "switchTo": "التبديل إلى ",
      
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
      "totalEntries": "إجمالي الإدخالات",
      
      // App Content
      "goodMorning": "صباح الخير",
      "manageFarmEfficiently": "إدارة مزرعتك بكفاءة",
      "discoverFreshProduce": "اكتشف المنتجات الطازجة",
      "quickActions": "الإجراءات السريعة",
      "realTimeMonitoring": "المراقبة في الوقت الفعلي",
      "deviceManagement": "إدارة الأجهزة",
      "trackGrowth": "تتبع النمو",
      "maintenanceSchedule": "جدولة الصيانة",
      "performanceReports": "تقارير الأداء",
      "sellProducts": "بيع المنتجات",
      "freshProduce": "المنتجات الطازجة",
      "deliveryPlans": "خطط التوصيل",
      "yourItems": "عناصرك",
      "orderHistory": "تاريخ الطلبات",
      "chatWithFarmers": "تحدث مع المزارعين",
      "yourInsights": "رؤاك التحليلية",
      "todaysWeather": "طقس اليوم",
      "partlyCloudy": "غائم جزئياً",
      "uvIndex": "مؤشر الأشعة فوق البنفسجية",
      "farmOverview": "نظرة عامة على المزرعة",
      "activeCrops": "المحاصيل النشطة",
      "pendingOrders": "الطلبات المعلقة",
      "thisMonth": "هذا الشهر",
      "featuredProducts": "المنتجات المميزة",
      "freshLettuce": "خس طازج",
      "organicTomatoes": "طماطم عضوية",
      "sweetCorn": "ذرة حلوة",
      "kg": "كيلو",
      "greenValleyFarm": "مزرعة الوادي الأخضر",
      "sunnyOrganicFarm": "مزرعة صني العضوية",
      "harvestHills": "تلال الحصاد",
      "orderCompleted": "تم إكمال الطلب {{orderId}}",
      "newOrderReceived": "تم استلام طلب جديد",
      "lettuceHarvestReady": "الخس جاهز للحصاد",
      "orderDelivered": "تم توصيل الطلب",
      "orderShipped": "تم شحن الطلب",
      "paymentProcessed": "تم معالجة الدفع",
      
      // Subscription Plans
      "subscriptionPlans": "خطط الاشتراك",
      "freshProduceDelivered": "توصيل المنتجات الطازجة إلى بابك",
      "myActiveSubscriptions": "اشتراكاتي النشطة",
      "availableSubscriptionPlans": "خطط الاشتراك المتاحة",
      "everyWeek": "كل أسبوع",
      "everyTwoWeeks": "كل أسبوعين",
      "everyMonth": "كل شهر",
      "sunday": "الأحد",
      "monday": "الاثنين",
      "tuesday": "الثلاثاء",
      "wednesday": "الأربعاء",
      "thursday": "الخميس",
      "friday": "الجمعة",
      "saturday": "السبت",
      "modify": "تعديل",
      "pause": "إيقاف مؤقت",
      "resume": "استئناف",
      "schedule": "جدولة",
      "nextDelivery": "التوصيل التالي",
      "includedProducts": "المنتجات المشمولة",
      "mostPopular": "الأكثر شعبية",
      "subscribeNow": "اشترك الآن",
      "subscribeTo": "اشترك في",
      "subscriptionDuration": "مدة الاشتراك",
      "preferredDeliveryDay": "يوم التوصيل المفضل",
      "deliveryTimeSlot": "فترة التوصيل",
      "morning": "الصباح",
      "afternoon": "بعد الظهر",
      "evening": "المساء",
      "deliveryAddress": "عنوان التوصيل",
      "specialInstructions": "تعليمات خاصة",
      "optional": "اختياري",
      "enterCompleteAddress": "أدخل عنوانك الكامل",
      "specialInstructionsPlaceholder": "أي تعليمات خاصة للتوصيل...",
      "planPrice": "سعر الخطة",
      "frequency": "التكرار",
      "totalPerDelivery": "الإجمالي لكل توصيل",
      "per": "لكل",
      "weeks": "أسابيع",
      "months": "أشهر",
      
      // Marketplace
      "hasadMarketplace": "سوق حصاد",
      "searchProductsFarms": "البحث في المنتجات والمزارع...",
      "allProducts": "جميع المنتجات",
      "leafyGreens": "الخضروات الورقية",
      "vegetables": "الخضروات",
      "herbs": "الأعشاب",
      "fruits": "الفواكه",
      "grains": "الحبوب",
      "newestFirst": "الأحدث أولاً",
      "priceLowToHigh": "السعر: من الأقل إلى الأعلى",
      "priceHighToLow": "السعر: من الأعلى إلى الأقل",
      "highestRated": "الأعلى تقييماً",
      "filters": "المرشحات",
      "organic": "عضوي",
      "daysFresh": "أيام طازجة",
      "reviews": "تقييمات",
      "harvested": "تم حصاده",
      "addToCart": "أضف إلى السلة",
      "outOfStock": "نفد المخزون",
      "noProductsFound": "لم يتم العثور على منتجات",
      "adjustSearchCriteria": "جرب تعديل معايير البحث",
      "advancedFilters": "مرشحات متقدمة",
      "priceRange": "نطاق السعر",
      "min": "الحد الأدنى",
      "max": "الحد الأقصى",
      "farmingMethod": "طريقة الزراعة",
      "hydroponic": "زراعة مائية",
      "conventional": "تقليدية",
      "certifications": "الشهادات",
      "fairTrade": "التجارة العادلة",
      "allLocations": "جميع المواقع",
      "riyadh": "الرياض",
      "jeddah": "جدة",
      "dammam": "الدمام",
      "mecca": "مكة",
      "availability": "التوفر",
      "inStockOnly": "المتوفر فقط",
      "sameDayDelivery": "توصيل في نفس اليوم",
      "clearFilters": "مسح المرشحات",
      "applyFilters": "تطبيق المرشحات",
      "available": "متوفر",
      "minOrder": "الحد الأدنى للطلب",
      
      // Shopping Cart
      "shoppingCart": "سلة التسوق",
      "yourCartIsEmpty": "سلتك فارغة",
      "addFreshProduce": "أضف بعض المنتجات الطازجة للبدء",
      "browseMarketplace": "تصفح السوق",
      "clearAll": "مسح الكل",
      "subtotal": "المجموع الفرعي",
      "deliveryFee": "رسوم التوصيل",
      "tax": "الضريبة",
      "total": "الإجمالي",
      "proceedToCheckout": "المتابعة للدفع",
      "freeDeliveryOver": "توصيل مجاني للطلبات أكثر من",
      "estimatedDelivery": "التوصيل المتوقع",
      "tomorrowTwoPm": "غداً في الساعة 2 مساءً",
      "orderSummary": "ملخص الطلب",
      
      // Settings
      "appPreferences": "تفضيلات التطبيق",
      "helpAndSupport": "المساعدة والدعم",
      "notifications": "الإشعارات",
      "smartFarmingFingerTips": "الزراعة الذكية في متناول يدك",
      
      // Admin Dashboard
      "hasadAdminPanel": "لوحة إدارة حصاد",
      "adminPortal": "بوابة الإدارة",
      "monitoringOnly": "للمراقبة فقط",
      "adminReadOnlyNotice": "هذه واجهة إدارية للقراءة فقط. لا يمكن إجراء تغييرات على حسابات المستخدمين أو إعدادات النظام.",
      
      // Navigation
      "reports": "التقارير",
      
      // KPI Cards
      "totalFarmers": "إجمالي المزارعين",
      "totalConsumers": "إجمالي المستهلكين", 
      "activeDevices": "الأجهزة النشطة",
      "openAlerts": "التنبيهات المفتوحة",
      "monthlyRevenue": "الإيرادات الشهرية",
      "systemUptime": "وقت تشغيل النظام",
      "dataProcessed": "البيانات المعالجة",
      "avgResponseTime": "متوسط وقت الاستجابة",
      
      // Table Headers & Actions
      "name": "الاسم",
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
      "view": "عرض",
      
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
      
      // Search & Filters
      "searchUsers": "البحث عن المستخدمين...",
      "searchFarmers": "البحث عن المزارعين...",
      "searchConsumers": "البحث عن المستهلكين...",
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
      "subscriptionDetails": "تفاصيل الاشتراك",
      
      // Alerts
      "criticalAlerts": "تنبيهات حرجة",
      "warningAlerts": "تنبيهات تحذيرية",
      "infoAlerts": "تنبيهات إعلامية",
      "alertDetails": "تفاصيل التنبيه",
      "severity": "الخطورة",
      "timestamp": "الطابع الزمني",
      "source": "المصدر",
      "message": "الرسالة",
      
      // Pagination
      "previous": "السابق",
      "next": "التالي",
      "page": "صفحة",
      "of": "من",
      "showing": "عرض",
      "to": "إلى",
      "entries": "إدخالات",
      
      // Empty States
      "noFarmersFound": "لم يتم العثور على مزارعين",
      "noConsumersFound": "لم يتم العثور على مستهلكين",
      "noAlertsFound": "لم يتم العثور على تنبيهات",
      
      // Accessibility
      "viewUserDetails": "عرض تفاصيل المستخدم",
      "switchTo": "التبديل إلى ",
      
      // Additional Admin Strings
      "adminUser": "مستخدم إداري",
      "systemAdministrator": "مدير النظام",
      "adjustSearchCriteria": "جرب تعديل معايير البحث أو التصفية",
      "allSeverities": "جميع مستويات الخطورة",
      "allTypes": "جميع الأنواع",
      "critical": "حرج",
      "warning": "تحذير",
      "info": "معلومات",
      "deviceFaults": "أعطال الأجهزة",
      "thresholdAlerts": "تنبيهات العتبة",
      "maintenanceDue": "صيانة مستحقة",
      "connectivityIssues": "مشاكل الاتصال",
      "harvestReady": "جاهز للحصاد",
      "systemUpdates": "تحديثات النظام",
      "acknowledged": "مُقر",
      "readOnlyView": "عرض للقراءة فقط",
      "readOnlyViewDescription": "هذه واجهة مراقبة. لا يمكن إجراء تغييرات على حسابات المستخدمين أو الإعدادات.",
      "readOnlyAlertDescription": "هذه واجهة مراقبة. لا يمكن إقرار التنبيهات أو حلها من هذا العرض.",
      "alertId": "معرف التنبيه",
      "type": "النوع",
      "created": "تم الإنشاء",
      "additionalInformation": "معلومات إضافية",
      "statusInformation": "معلومات الحالة",
      "resolved": "تم الحل",
      "yes": "نعم",
      "no": "لا",
      "role": "الدور",
      "phone": "الهاتف",
      "farmName": "اسم المزرعة",
      "farmType": "نوع المزرعة",
      "certifications": "الشهادات",
      "lastUpdate": "آخر تحديث",
      "expiryDate": "تاريخ الانتهاء",
      
      // Additional table and UI strings
      "sites": "مواقع",
      "ordersCount": "طلبات",
      "farmer": "مزارع",
      "consumer": "مستهلك",
      "hydroponic": "زراعة مائية",
      "organic": "عضوي",
      "greenhouse": "بيت محمي",
      "conventional": "تقليدي",
      
      // Alert types
      "device_fault": "عطل في الجهاز",
      "threshold_exceeded": "تجاوز العتبة",
      "maintenance_due": "صيانة مستحقة",
      "connectivity_issue": "مشكلة في الاتصال",
      "harvest_ready": "جاهز للحصاد",
      "system_update": "تحديث النظام",
      
      // Profile Page
      "manageYourAccount": "إدارة حسابك وتفضيلاتك",
      "paymentMethods": "طرق الدفع",
      "manageYourCards": "إدارة بطاقاتك المصرفية",
      "addresses": "العناوين",
      "deliveryAddresses": "عناوين التوصيل",
      "notificationSettings": "الإشعارات",
      "managePreferences": "إدارة التفضيلات",
      "helpAndSupport": "المساعدة والدعم",
      "getAssistance": "الحصول على المساعدة",
      "appPreferences": "الإعدادات",
      "termsAndPrivacy": "الشروط والخصوصية",
      "legalInformation": "المعلومات القانونية",
      "viewYourPerformance": "عرض أدائك",
      "productsListed": "المنتجات المدرجة",
      "ordersCompleted": "الطلبات المكتملة",
      "totalEarnings": "إجمالي الأرباح",
      "appVersion": "إصدار التطبيق",
      "rating": "التقييم",
      "editProfile": "تعديل الملف الشخصي",
      "saveChanges": "حفظ التغييرات",
      "farmLocation": "موقع المزرعة",
      "personalInformation": "المعلومات الشخصية",
      "accountStats": "إحصائيات الحساب",
      
      // Subscription Plans - Additional
      "starterFreshBox": "صندوق البداية الطازج",
      "familyFreshBox": "صندوق العائلة الطازج",
      "adoptARooftop": "تبني سطح",
      "seasonalSpecialtyBox": "صندوق التخصصات الموسمية",
      "perfectForSmallFamilies": "مثالي للعائلات الصغيرة - ٣-٤ أنواع من المنتجات الطازجة",
      "idealForFamilies": "مثالي للعائلات - ٦-٨ أنواع من المنتجات الطازجة",
      "sponsorYourOwnSection": "ارعى قسمك الخاص من مزرعة الأسطح",
      "curatedSelectionSeasonal": "مجموعة منتقاة من التخصصات الموسمية والأصناف النادرة",
      "freshSeasonalVegetables": "خضروات موسمية طازجة",
      "recipeCardsIncluded": "بطاقات الوصفات مشمولة",
      "flexibleDeliverySchedule": "جدولة توصيل مرنة",
      "cancelAnytime": "إلغاء في أي وقت",
      "premiumSeasonalVegetablesFruits": "خضروات وفواكه موسمية مميزة",
      "recipeCardsCookingTips": "بطاقات الوصفات ونصائح الطبخ",
      "priorityDeliverySlots": "مواعيد توصيل أولوية",
      "substitutionPreferences": "تفضيلات الاستبدال",
      "yourOwnDedicatedGrowingSpace": "مساحة زراعة مخصصة لك",
      "monthlyHarvestDelivery": "توصيل الحصاد الشهري",
      "farmVisitAccess": "إمكانية زيارة المزرعة",
      "growthProgressUpdates": "تحديثات تقدم النمو",
      "personalizedCropSelection": "اختيار محاصيل شخصي",
      "rareSpecialtyVarieties": "أصناف نادرة ومتخصصة",
      "seasonalPeakFreshness": "نضارة الذروة الموسمية",
      "educationalContent": "محتوى تعليمي",
      "chefCollaborationRecipes": "وصفات بالتعاون مع الطهاة",
      "premiumPackaging": "تغليف مميز",
      "durationOptions": "خيارات المدة",
      "weeklyFreshBox": "صندوق أسبوعي طازج",
      "myRooftopGarden": "حديقة سطحي",
      "paused": "متوقف مؤقتاً",
      "cancelled": "ملغي",
      "expired": "منتهي الصلاحية",
      "myActiveSubscriptions": "اشتراكاتي النشطة",
      "availableSubscriptionPlans": "خطط الاشتراك المتاحة",
      
      // Marketplace & Cart
      "searchProducts": "البحث في المنتجات...",
      "allCategories": "جميع الفئات",
      "sortBy": "ترتيب حسب",
      "priceAscending": "السعر: من الأقل إلى الأعلى",
      "priceDescending": "السعر: من الأعلى إلى الأقل",
      "ratingHighest": "الأعلى تقييماً",
      "newest": "الأحدث",
      "addToCart": "أضف إلى السلة",
      "outOfStock": "نفد المخزون",
      "inStock": "متوفر",
      "lowStock": "مخزون قليل",
      "quantity": "الكمية",
      "remove": "إزالة",
      "clearCart": "مسح السلة",
      "cartEmpty": "السلة فارغة",
      "startShopping": "ابدأ التسوق",
      "cartSummary": "ملخص السلة",
      "itemsInCart": "عنصر في السلة",
      "itemsInCartPlural": "عناصر في السلة",
      "checkout": "الدفع",
      "continueShopping": "متابعة التسوق",
      "unit": "وحدة",
      "piece": "قطعة",
      "bunch": "حزمة",
      "box": "صندوق",
      "perKg": "للكيلو",
      "perPiece": "للقطعة",
      "perBunch": "للحزمة",
      "perBox": "للصندوق",
      "productDetails": "تفاصيل المنتج",
      "farmerInfo": "معلومات المزارع",
      "nutritionFacts": "القيم الغذائية",
      "customerReviews": "تقييمات العملاء",
      "writeReview": "اكتب تقييم",
      "verified": "موثق",
      "helpfulVotes": "أصوات مفيدة",
      "sortReviews": "ترتيب التقييمات",
      "mostHelpful": "الأكثر فائدة",
      "mostRecent": "الأحدث",
      "highestRating": "أعلى تقييم",
      "lowestRating": "أقل تقييم"
    }
  },
  // Pseudo-locale for testing
  pseudo: {
    translation: createPseudoTranslations({
      // Core auth strings
      "signInAccount": "Sign in to your account",
      "createAccount": "Create your account",
      "email": "Email",
      "password": "Password",
      "login": "Login",
      "signup": "Sign Up",
      
      // Profile strings
      "profile": "Profile",
      "editProfile": "Edit Profile",
      "saveChanges": "Save Changes",
      "cancel": "Cancel",
      "paymentMethods": "Payment Methods",
      "addresses": "Addresses",
      "notificationSettings": "Notifications",
      "helpAndSupport": "Help & Support",
      "appPreferences": "Settings",
      "termsAndPrivacy": "Terms & Privacy",
      "logout": "Logout",
      
      // Plans strings
      "subscriptionPlans": "Subscription Plans",
      "myActiveSubscriptions": "My Active Subscriptions",
      "availableSubscriptionPlans": "Available Subscription Plans",
      "modify": "Modify",
      "pause": "Pause",
      "resume": "Resume",
      "schedule": "Schedule",
      "nextDelivery": "Next delivery",
      
      // Cart strings
      "shoppingCart": "Shopping Cart",
      "addToCart": "Add to Cart",
      "removeFromCart": "Remove from Cart",
      "clearCart": "Clear Cart",
      "checkout": "Checkout",
      "subtotal": "Subtotal",
      "total": "Total",
      
      // Common strings
      "loading": "Loading",
      "error": "Error",
      "success": "Success",
      "active": "Active",
      "inactive": "Inactive"
    })
  }
};

// Get stored language preference or default to Arabic
const getStoredLanguage = (): 'ar' | 'en' => {
  try {
    const stored = localStorage.getItem('hasad-language');
    return (stored === 'ar' || stored === 'en') ? stored : 'ar';
  } catch {
    return 'ar';
  }
};

// Store language preference
const storeLanguage = (language: 'ar' | 'en') => {
  try {
    localStorage.setItem('hasad-language', language);
  } catch (error) {
    console.warn('Failed to store language preference:', error);
  }
};

// Set document direction and language attributes
const setDocumentDirection = (language: 'ar' | 'en') => {
  const isRTL = language === 'ar';
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.documentElement.lang = language;
};

// Initialize i18n
const initI18n = async () => {
  try {
    const initialLanguage = getStoredLanguage();
    
    await i18n.use(initReactI18next).init({
      resources,
      lng: initialLanguage,
      fallbackLng: 'en',
      // Custom missing key handler
      missingKeyHandler: (lng, ns, key, fallbackValue) => {
        missingKeyTracker.track(key, ns);
        return fallbackValue || key;
      },
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
    // Fallback to Arabic
    setDocumentDirection('ar');
  }
};

// Language change handler
export const changeLanguage = (language: 'ar' | 'en') => {
  try {
    i18n.changeLanguage(language);
    setDocumentDirection(language);
    storeLanguage(language);
    
    // Trigger a re-render by dispatching a custom event
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language } }));
    
    console.log('✅ Language changed to:', language);
  } catch (error) {
    console.error('❌ Failed to change language:', error);
  }
};

// Format numbers according to locale
export const formatI18nNumber = (value: number, locale?: string): string => {
  const currentLocale = locale || i18n.language;
  const localeCode = currentLocale === 'ar' ? 'ar-SA-u-nu-arab' : 'en-US';
  
  try {
    return new Intl.NumberFormat(localeCode, {
      numberingSystem: currentLocale === 'ar' ? 'arab' : 'latn'
    }).format(value);
  } catch {
    return value.toString();
  }
};

// Format currency according to locale
export const formatI18nCurrency = (value: number, currency = 'SAR', locale?: string): string => {
  const currentLocale = locale || i18n.language;
  const localeCode = currentLocale === 'ar' ? 'ar-SA-u-nu-arab' : 'en-US';
  
  try {
    return new Intl.NumberFormat(localeCode, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      numberingSystem: currentLocale === 'ar' ? 'arab' : 'latn'
    }).format(value);
  } catch {
    return `${currency} ${value.toFixed(2)}`;
  }
};

// Format dates according to locale
export const formatI18nDate = (date: string | Date, locale?: string): string => {
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
export const formatI18nRelativeTime = (date: string | Date, locale?: string): string => {
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