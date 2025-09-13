import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { LoginScreen } from './components/auth/LoginScreen';
import { RegisterScreen } from './components/auth/RegisterScreen';
import { HomeScreen } from './components/home/HomeScreen';
import { MarketplaceScreen } from './components/marketplace/MarketplaceScreen';
import { ProductDetailScreen } from './components/products/ProductDetailScreen';
import { CartScreen } from './components/cart/CartScreen';
import { ProfileScreen } from './components/profile/ProfileScreen';
import { FarmerDashboard } from './components/farmer/FarmerDashboard';
import { AddProductScreen } from './components/farmer/AddProductScreen';
import { OrdersScreen } from './components/orders/OrdersScreen';
import { MessagesScreen } from './components/messages/MessagesScreen';
import { BottomNavigation } from './components/navigation/BottomNavigation';
import { FarmDashboard } from './components/farm/FarmDashboard';
import { IoTControls } from './components/farm/IoTControls';
import { CropManagement } from './components/farm/CropManagement';
import { TasksAndMaintenance } from './components/farm/TasksAndMaintenance';
import { ProductCatalog } from './components/marketplace/ProductCatalog';
import { SubscriptionPlans } from './components/marketplace/SubscriptionPlans';
import { AnalyticsReports } from './components/shared/AnalyticsReports';
import { SettingsScreen } from './components/settings/SettingsScreen';
import { SettingsProvider } from './contexts/SettingsContext';
import { useAuth } from './contexts/AuthContext';
import { FarmSite } from './types';
import './App.css';

function AppContent() {
  const { user } = useAuth();
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedFarmSite, setSelectedFarmSite] = useState<FarmSite>({
    id: 'site1',
    name: 'Green Valley Rooftop Farm',
    location: {
      lat: 24.7136,
      lng: 46.6753,
      address: '123 King Fahd Road',
      city: 'Riyadh',
      country: 'Saudi Arabia'
    },
    type: 'rooftop',
    size: 500,
    status: 'active',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-02-12T00:00:00Z'
  });

  const mockFarmSites: FarmSite[] = [
    selectedFarmSite,
    {
      id: 'site2',
      name: 'Downtown Greenhouse',
      location: {
        lat: 24.7136,
        lng: 46.6753,
        address: '456 Olaya Street',
        city: 'Riyadh',
        country: 'Saudi Arabia'
      },
      type: 'greenhouse',
      size: 300,
      status: 'active',
      created_at: '2024-01-15T00:00:00Z',
      updated_at: '2024-02-10T00:00:00Z'
    }
  ];

  if (!user) {
    return (
      <div className="app-container">
        <Routes>
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="*" element={<LoginScreen />} />
        </Routes>
      </div>
    );
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen />;
      case 'marketplace':
        return <MarketplaceScreen />;
      case 'subscriptions':
        return <SubscriptionPlans />;
      case 'orders':
        return <OrdersScreen />;
      case 'profile':
        return <ProfileScreen onNavigateToSettings={() => setCurrentScreen('settings')} />;
      case 'settings':
        return <SettingsScreen onBack={() => setCurrentScreen('profile')} />;
      case 'farmer-dashboard':
        return <FarmDashboard selectedSite={selectedFarmSite} onSiteChange={setSelectedFarmSite} sites={mockFarmSites} />;
      case 'iot-controls':
        return <IoTControls selectedSite={selectedFarmSite} />;
      case 'crop-management':
        return <CropManagement selectedSite={selectedFarmSite} />;
      case 'tasks-maintenance':
        return <TasksAndMaintenance selectedSite={selectedFarmSite} />;
      case 'add-product':
        return <AddProductScreen />;
      case 'analytics':
        return <AnalyticsReports userRole={user.type || 'consumer'} />;
      case 'legacy-farmer-dashboard':
        return <FarmerDashboard />;
      case 'cart':
        return <CartScreen />;
      case 'messages':
        return <MessagesScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="app-container">
      <div className="screen-content">
        {renderScreen()}
      </div>
      <BottomNavigation 
        currentScreen={currentScreen} 
        onScreenChange={setCurrentScreen}
        userType={user.type || 'consumer'}
      />
    </div>
  );
}

function App() {
  return (
    <SettingsProvider>
      <AuthProvider>
        <CartProvider>
          <Router>
            <div className="preserve-position">
              <AppContent />
            </div>
          </Router>
        </CartProvider>
      </AuthProvider>
    </SettingsProvider>
  );
}

export default App;