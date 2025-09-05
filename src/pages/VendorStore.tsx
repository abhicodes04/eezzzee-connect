import { useState } from 'react';
import { Store, Edit, Share, BarChart, Users, Eye, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';

const VendorStore = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock vendor store data
  const store = {
    name: 'TechStore Mumbai',
    description: 'Premium electronics and gadgets for tech enthusiasts',
    owner: 'Rajesh Kumar',
    rating: 4.8,
    totalReviews: 234,
    totalProducts: 45,
    totalOrders: 1250,
    location: 'Bandra West, Mumbai',
    established: '2020',
    profileImage: '/placeholder.svg'
  };

  const storeStats = [
    { label: 'Total Products', value: '45', icon: Store },
    { label: 'Total Orders', value: '1,250', icon: BarChart },
    { label: 'Store Views', value: '12.5K', icon: Eye },
    { label: 'Customers', value: '890', icon: Users },
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
    }
  ];

  return (
    <Layout showBottomNav userRole="vendor">
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-6">
          {/* Store Header */}
          <Card className="mb-6 overflow-hidden">
            <div className="bg-gradient-hero p-6 text-white">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <Avatar className="h-24 w-24 border-4 border-white/20">
                  <AvatarImage src={store.profileImage} alt={store.name} />
                  <AvatarFallback className="text-2xl font-bold bg-white text-primary">
                    {store.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">{store.name}</h1>
                      <p className="text-lg opacity-90 mb-2">{store.description}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          ⭐ {store.rating} ({store.totalReviews} reviews)
                        </Badge>
                        <span>Est. {store.established}</span>
                        <span>{store.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-4 lg:mt-0">
                      <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 border-white/30 text-white">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                      <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 border-white/30 text-white">
                        <Share className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 border-white/30 text-white">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Store Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {storeStats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-xl font-bold">{stat.value}</p>
                    </div>
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Store Content Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Store Info */}
                <Card>
                  <CardHeader>
                    <CardTitle>Store Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">About Store</h4>
                      <p className="text-sm text-muted-foreground">
                        {store.description}. We specialize in providing high-quality electronics 
                        and gadgets with competitive pricing and excellent customer service.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Store Owner</h4>
                      <p className="text-sm text-muted-foreground">{store.owner}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Business Hours</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                        <p>Sunday: 11:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <div className="h-8 w-8 rounded-full bg-success flex items-center justify-center">
                          <Store className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">New product added</p>
                          <p className="text-xs text-muted-foreground">Smart Fitness Watch</p>
                        </div>
                        <p className="text-xs text-muted-foreground">2h ago</p>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                          <BarChart className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Discount verified</p>
                          <p className="text-xs text-muted-foreground">Code: EEZZ25TECH</p>
                        </div>
                        <p className="text-xs text-muted-foreground">1d ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="products" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Store Products</h3>
                <Button className="bg-gradient-primary">
                  Add New Product
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Store Views</span>
                        <span className="font-medium">12.5K</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Product Views</span>
                        <span className="font-medium">8.9K</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Conversion Rate</span>
                        <span className="font-medium">12.3%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Top Products</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Wireless Headphones</span>
                        <Badge variant="secondary">45 views</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Smart Watch</span>
                        <Badge variant="secondary">32 views</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Bluetooth Speaker</span>
                        <Badge variant="secondary">28 views</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default VendorStore;