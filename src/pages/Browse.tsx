import { useState } from 'react';
import { Search, Filter, MapPin, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';

const Browse = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All Categories', 'Electronics', 'Fashion', 'Home & Garden', 
    'Books', 'Sports', 'Beauty', 'Groceries', 'Services'
  ];

  const products = [
    {
      id: "1",
      title: 'Premium Wireless Headphones',
      price: 2999,
      originalPrice: 4999,
      discount: 40,
      vendor: 'TechStore Mumbai',
      location: 'Bandra West',
      image: '/placeholder.svg',
      rating: 4.5,
      reviews: 128
    },
    {
      id: "2",
      title: 'Smart Fitness Watch',
      price: 8999,
      originalPrice: 12999,
      discount: 30,
      vendor: 'TechStore Mumbai',
      location: 'Bandra West',
      image: '/placeholder.svg',
      rating: 4.7,
      reviews: 89
    },
    {
      id: "3",
      title: 'Bluetooth Speaker',
      price: 1999,
      originalPrice: 3499,
      discount: 42,
      vendor: 'Audio World',
      location: 'Andheri East',
      image: '/placeholder.svg',
      rating: 4.3,
      reviews: 156
    },
    {
      id: "4",
      title: 'Smartphone Case',
      price: 499,
      originalPrice: 999,
      discount: 50,
      vendor: 'Mobile Accessories',
      location: 'Juhu',
      image: '/placeholder.svg',
      rating: 4.1,
      reviews: 67
    }
  ];

  return (
    <Layout showBottomNav userRole="buyer">
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search Bar */}
              <div className="relative flex-1 w-full max-w-2xl">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products, vendors, or categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full"
                />
              </div>

              {/* Filters */}
              <div className="flex items-center gap-2 w-full lg:w-auto">
                <Select>
                  <SelectTrigger className="w-full lg:w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-full lg:w-[150px]">
                    <MapPin className="h-4 w-4" />
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Areas</SelectItem>
                    <SelectItem value="bandra">Bandra</SelectItem>
                    <SelectItem value="andheri">Andheri</SelectItem>
                    <SelectItem value="juhu">Juhu</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>

                {/* View Toggle */}
                <div className="hidden lg:flex border rounded-lg p-1">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="secondary">Electronics</Badge>
              <Badge variant="secondary">Bandra <Button variant="ghost" size="sm" className="ml-1 h-auto p-0 text-xs">×</Button></Badge>
              <Badge variant="secondary">Under ₹5000 <Button variant="ghost" size="sm" className="ml-1 h-auto p-0 text-xs">×</Button></Badge>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-6">
          {/* Results Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">Browse Products</h1>
              <p className="text-muted-foreground">Found 248 products in your area</p>
            </div>
            
            <Select defaultValue="relevance">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Most Relevant</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Products
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Browse;