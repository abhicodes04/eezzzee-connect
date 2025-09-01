import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductCard from '@/components/ProductCard';
import Layout from '@/components/Layout';
import { Search, MapPin, Filter, Bell } from "lucide-react";

// Mock data for demonstration
const categories = [
  { id: '1', name: 'Groceries', emoji: '🛒' },
  { id: '2', name: 'Electronics', emoji: '📱' },
  { id: '3', name: 'Fashion', emoji: '👕' },
  { id: '4', name: 'Home & Garden', emoji: '🏠' },
  { id: '5', name: 'Health', emoji: '💊' },
  { id: '6', name: 'Food', emoji: '🍕' },
];

const mockProducts = [
  {
    id: '1',
    title: 'Fresh Organic Vegetables Bundle',
    price: 299,
    originalPrice: 399,
    discount: 25,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&h=200&fit=crop',
    vendor: 'Green Valley Farm',
    location: 'Sector 12, Gurgaon',
    rating: 4.5
  },
  {
    id: '2',
    title: 'Smartphone Case - Protective Cover',
    price: 149,
    originalPrice: 199,
    discount: 25,
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&h=200&fit=crop',
    vendor: 'Tech Accessories Hub',
    location: 'Cyber City, Gurgaon',
    rating: 4.2
  },
  {
    id: '3',
    title: 'Handmade Cotton Kurta',
    price: 599,
    originalPrice: 799,
    discount: 25,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f37f5ad4?w=300&h=200&fit=crop',
    vendor: 'Artisan Clothing Co.',
    location: 'DLF Phase 2, Gurgaon',
    rating: 4.7
  },
  {
    id: '4',
    title: 'Indoor Plant Collection',
    price: 799,
    originalPrice: 999,
    discount: 20,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop',
    vendor: 'Garden Paradise',
    location: 'Sector 18, Gurgaon',
    rating: 4.3
  }
];

const BuyerHome = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <Layout showBottomNav userRole="buyer">
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-gradient-primary text-primary-foreground p-4 pb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <div>
                <p className="text-sm opacity-90">Your Location</p>
                <p className="font-semibold">Sector 14, Gurgaon</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
              <Bell className="h-5 w-5" />
            </Button>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for products, vendors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-12 bg-white border-0"
            />
            <Button variant="ghost" size="icon" className="absolute right-1 top-1 text-muted-foreground">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-3">Shop by Category</h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(
                  selectedCategory === category.id ? null : category.id
                )}
                className={`flex flex-col items-center p-3 rounded-lg min-w-[80px] transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-medium'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                <span className="text-2xl mb-1">{category.emoji}</span>
                <span className="text-xs font-medium text-center">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Deals */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Featured Deals</h2>
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
              🔥 Hot Deals
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {mockProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                className="cursor-pointer hover:scale-[1.02] transition-transform"
              />
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-3">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-16 flex-col gap-2">
              <span className="text-2xl">🎯</span>
              <span className="text-sm">My Discounts</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col gap-2">
              <span className="text-2xl">💰</span>
              <span className="text-sm">Loyalty Coins</span>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BuyerHome;