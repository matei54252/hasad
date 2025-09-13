import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../contexts/CartContext';
import { ShoppingBag, Search, Filter } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  farmer: string;
  category: string;
  unit: string;
  description: string;
  rating: number;
  reviews: number;
  inStock: number;
}

export const MarketplaceScreen: React.FC = () => {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const { items: cartItems, getTotalItems, getTotalPrice } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCart, setShowCart] = useState(false);

  const categories = [
    { id: 'all', name: 'All', icon: '🌾' },
    { id: 'vegetables', name: 'Vegetables', icon: '🥬' },
    { id: 'fruits', name: 'Fruits', icon: '🍎' },
    { id: 'herbs', name: 'Herbs', icon: '🌿' },
    { id: 'grains', name: 'Grains', icon: '🌾' }
  ];

  const products: Product[] = [
    {
      id: '1',
      name: 'Fresh Lettuce',
      price: 3.99,
      image: '🥬',
      farmer: 'Green Valley Farm',
      category: 'vegetables',
      unit: 'lb',
      description: 'Crisp, fresh lettuce grown organically',
      rating: 4.8,
      reviews: 124,
      inStock: 50
    },
    {
      id: '2',
      name: 'Organic Tomatoes',
      price: 4.50,
      image: '🍅',
      farmer: 'Sunny Acres',
      category: 'vegetables',
      unit: 'lb',
      description: 'Vine-ripened organic tomatoes',
      rating: 4.9,
      reviews: 89,
      inStock: 30
    },
    {
      id: '3',
      name: 'Sweet Corn',
      price: 2.99,
      image: '🌽',
      farmer: 'Harvest Hills',
      category: 'vegetables',
      unit: 'lb',
      description: 'Sweet, tender corn on the cob',
      rating: 4.7,
      reviews: 156,
      inStock: 75
    },
    {
      id: '4',
      name: 'Fresh Apples',
      price: 3.25,
      image: '🍎',
      farmer: 'Orchard View',
      category: 'fruits',
      unit: 'lb',
      description: 'Crisp, sweet apples perfect for snacking',
      rating: 4.6,
      reviews: 203,
      inStock: 100
    },
    {
      id: '5',
      name: 'Organic Carrots',
      price: 2.75,
      image: '🥕',
      farmer: 'Earth Grown',
      category: 'vegetables',
      unit: 'lb',
      description: 'Fresh, crunchy organic carrots',
      rating: 4.8,
      reviews: 67,
      inStock: 40
    },
    {
      id: '6',
      name: 'Fresh Basil',
      price: 1.99,
      image: '🌿',
      farmer: 'Herb Garden Co.',
      category: 'herbs',
      unit: 'bunch',
      description: 'Aromatic fresh basil leaves',
      rating: 4.9,
      reviews: 45,
      inStock: 25
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.farmer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
    // You could add a toast notification here
  };

  return (
    <div className="p-4">
      {/* Products Grid */}
      <div className="grid grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card card-hover">
            <div className="text-center mb-3">
              <div className="text-4xl mb-2">{product.image}</div>
              <h3 className="heading-sm mb-1">{product.name}</h3>
              <p className="body-sm text-gray-600 mb-2">{product.farmer}</p>
              
              {/* Rating */}
              <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-yellow-400">⭐</span>
                <span className="body-sm font-medium">{product.rating}</span>
                <span className="body-sm text-gray-500">({product.reviews})</span>
              </div>
              
              {/* Price */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-bold text-green-600">
                  ${product.price.toFixed(2)}
                </span>
                <span className="body-sm text-gray-500">/{product.unit}</span>
              </div>
              
              {/* Stock Status */}
              <div className="mb-3">
                {product.inStock > 10 ? (
                  <span className="status-indicator status-success">
                    ✅ In Stock
                  </span>
                ) : product.inStock > 0 ? (
                  <span className="status-indicator status-warning">
                    ⚠️ Low Stock
                  </span>
                ) : (
                  <span className="status-indicator status-error">
                    ❌ Out of Stock
                  </span>
                )}
              </div>
              
              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                disabled={product.inStock === 0}
                className={`btn w-full ${
                  product.inStock === 0 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'btn-primary'
                }`}
              >
                {product.inStock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="heading-md mb-2">No products found</h3>
          <p className="body-md text-gray-600">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}

      {/* Backdrop for cart dropdown */}
      {showCart && (
        <div 
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setShowCart(false)}
        />
      )}

    </div>
  );
};