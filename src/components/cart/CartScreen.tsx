import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../contexts/CartContext';
import { useSettings } from '../../contexts/SettingsContext';

export const CartScreen: React.FC = () => {
  const { t } = useTranslation();
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const { formatCurrency } = useSettings();

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    // Implement checkout logic
    alert('Checkout functionality would be implemented here');
  };

  if (items.length === 0) {
    return (
      <div className="p-4">
        <h1 className="heading-lg mb-6">{t('shoppingCart')} 🛍️</h1>
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🛒</div>
          <h3 className="heading-md mb-2">{t('yourCartIsEmpty')}</h3>
          <p className="body-md text-gray-600 mb-6">{t('addFreshProduce')}</p>
          <button className="btn btn-primary">
            {t('browseMarketplace')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="heading-lg">{t('shoppingCart')} 🛍️</h1>
        <button
          onClick={clearCart}
          className="btn btn-outline btn-sm"
        >
          {t('clearAll')}
        </button>
      </div>

      {/* Cart Items */}
      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.id} className="card">
            <div className="flex items-center gap-4">
              {/* Product Image */}
              <div className="text-3xl">{item.image}</div>
              
              {/* Product Info */}
              <div className="flex-1">
                <h3 className="heading-sm mb-1">{item.name}</h3>
                <p className="body-sm text-gray-600 mb-2">{item.farmer}</p>
                <p className="text-lg font-bold text-green-600">
                  {formatCurrency(item.price)} / {item.unit}
                </p>
              </div>
              
              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                >
                  -
                </button>
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                >
                  +
                </button>
              </div>
              
              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 p-2"
              >
                🗑️
              </button>
            </div>
            
            {/* Item Total */}
            <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
              <span className="body-md text-gray-600">{t('subtotal')}:</span>
              <span className="heading-sm text-green-600">
                {formatCurrency(item.price * item.quantity)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="card mb-6" style={{ background: 'linear-gradient(135deg, #f8faf9 0%, #e8f5e8 100%)' }}>
        <h3 className="heading-md mb-4">{t('orderSummary')}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span className="body-md">{t('subtotal')}:</span>
            <span className="body-md font-medium">{formatCurrency(getTotalPrice())}</span>
          </div>
          <div className="flex justify-between">
            <span className="body-md">{t('deliveryFee')}:</span>
            <span className="body-md font-medium">{formatCurrency(4.99)}</span>
          </div>
          <div className="flex justify-between">
            <span className="body-md">{t('tax')}:</span>
            <span className="body-md font-medium">{formatCurrency(getTotalPrice() * 0.08)}</span>
          </div>
          <div className="border-t border-gray-200 pt-2">
            <div className="flex justify-between">
              <span className="heading-sm">{t('total')}:</span>
              <span className="heading-sm text-green-600">
                {formatCurrency(getTotalPrice() + 4.99 + (getTotalPrice() * 0.08))}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <button
        onClick={handleCheckout}
        className="btn btn-primary w-full btn-lg"
      >
        {t('proceedToCheckout')} 💳
      </button>

      {/* Delivery Info */}
      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-blue-600">🚚</span>
          <span className="body-md font-medium text-blue-800">{t('freeDeliveryOver')} {formatCurrency(50)}</span>
        </div>
        <p className="body-sm text-blue-600">
          {t('estimatedDelivery')}: {t('tomorrowTwoPm')}
        </p>
      </div>
    </div>
  );
};