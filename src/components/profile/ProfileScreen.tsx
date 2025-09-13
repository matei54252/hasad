import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';

interface ProfileScreenProps {
  onNavigateToSettings: () => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ onNavigateToSettings }) => {
  const { t } = useTranslation();
  const { user, logout, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    location: user?.location || ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    updateProfile(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      location: user?.location || ''
    });
    setIsEditing(false);
  };

  const menuItems = [
    { icon: '📊', title: t('analytics'), subtitle: t('viewYourPerformance'), show: user?.type === 'farmer' },
    { icon: '💳', title: t('paymentMethods'), subtitle: t('manageYourCards') },
    { icon: '📍', title: t('addresses'), subtitle: t('deliveryAddresses'), show: user?.type === 'consumer' },
    { icon: '🔔', title: t('notifications'), subtitle: t('managePreferences') },
    { icon: '❓', title: t('helpAndSupport'), subtitle: t('getAssistance') },
    { icon: '⚙️', title: t('settings'), subtitle: t('appPreferences'), action: onNavigateToSettings },
    { icon: '📋', title: t('termsAndPrivacy'), subtitle: t('legalInformation') }
  ];

  return (
    <div className="p-4">
      {/* Header */}
      <div className="mb-6">
        <h1 className="heading-lg mb-2">{t('profile')} 👤</h1>
        <p className="body-md text-gray-600">{t('manageContacts')}</p>
      </div>

      {/* Profile Card */}
      <div className="card mb-6" style={{ background: 'linear-gradient(135deg, #4a7c59 0%, #6b9b7a 100%)' }}>
        <div className="flex items-center gap-4 text-white">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-3xl">{user?.avatar}</span>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-1">{user?.name}</h2>
            <p className="text-green-100 mb-1">{user?.email}</p>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium">
                {user?.type === 'farmer' ? '👨‍🌾 Farmer' : '🛒 Consumer'}
              </span>
              <span className="text-green-100 text-sm">⭐ 4.8 Rating</span>
            </div>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
          >
            ✏️
          </button>
        </div>
      </div>

      {/* Edit Profile Form */}
      {isEditing && (
        <div className="card mb-6">
          <h3 className="heading-md mb-4">{t('edit')} {t('profile')}</h3>
          <div className="space-y-4">
            <div className="form-group">
              <label className="form-label">{t('name')}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">{t('email')}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">{t('mobile')}</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">
                {user?.type === 'farmer' ? 'Farm Location' : t('address')}
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
            <div className="flex gap-3">
              <button onClick={handleSave} className="btn btn-primary flex-1">
                {t('save')} Changes
              </button>
              <button onClick={handleCancel} className="btn btn-outline flex-1">
                {t('cancel')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Stats (for farmers) */}
      {user?.type === 'farmer' && (
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="card text-center">
            <div className="text-2xl font-bold text-green-600">24</div>
            <p className="body-sm text-gray-600">{t('productsListed')}</p>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-blue-600">156</div>
            <p className="body-sm text-gray-600">{t('ordersCompleted')}</p>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-orange-600">{formatCurrency(8450)}</div>
            <p className="body-sm text-gray-600">{t('totalEarnings')}</p>
          </div>
        </div>
      )}

      {/* Menu Items */}
      <div className="space-y-3 mb-6">
        {menuItems.map((item, index) => {
          if (item.show === false) return null;
          
          return (
            <div 
              key={index} 
              className="card card-hover cursor-pointer"
              onClick={item.action}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && item.action) {
                  e.preventDefault();
                  item.action();
                }
              }}
              aria-label={`${item.title} - ${item.subtitle}`}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-lg">{item.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="heading-sm">{item.title}</h3>
                  <p className="body-sm text-gray-600">{item.subtitle}</p>
                </div>
                <span className="text-gray-400">›</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Logout Button */}
      <button
        onClick={logout}
        className="btn w-full"
        style={{ backgroundColor: '#f44336', color: 'white' }}
      >
        🚪 {t('logout')}
      </button>

      {/* App Version */}
      <div className="text-center mt-6">
        <p className="body-sm text-gray-500">HASAD v1.0.0</p>
        <p className="body-sm text-gray-400">{t('smartFarmingFingerTips')}</p>
      </div>
    </div>
  );
};