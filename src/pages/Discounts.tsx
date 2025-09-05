import { useState } from 'react';
import { Gift, Clock, MapPin, Percent, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/Layout';

const Discounts = () => {
  const [activeTab, setActiveTab] = useState('active');

  const activeDiscounts = [
    {
      id: 1,
      code: 'EEZZ25TECH',
      discount: '25%',
      vendor: 'TechStore Mumbai',
      product: 'Premium Wireless Headphones',
      originalPrice: 4999,
      discountedPrice: 3749,
      expiresAt: '2024-01-15T18:00:00Z',
      status: 'active'
    },
    {
      id: 2,
      code: 'EEZZ15FASH',
      discount: '15%',
      vendor: 'Fashion Hub',
      product: 'Designer Kurta Set',
      originalPrice: 2999,
      discountedPrice: 2549,
      expiresAt: '2024-01-12T12:00:00Z',
      status: 'active'
    }
  ];

  const usedDiscounts = [
    {
      id: 3,
      code: 'EEZZ30BOOK',
      discount: '30%',
      vendor: 'Book Corner',
      product: 'Complete Book Set',
      originalPrice: 1500,
      discountedPrice: 1050,
      usedAt: '2024-01-05T14:30:00Z',
      coinsEarned: 10
    }
  ];

  const formatTimeLeft = (expiresAt: string) => {
    const now = new Date();
    const expiry = new Date(expiresAt);
    const diff = expiry.getTime() - now.getTime();
    
    if (diff <= 0) return 'Expired';
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${hours}h ${minutes}m left`;
  };

  return (
    <Layout showBottomNav userRole="buyer">
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">My Discounts</h1>
            <p className="text-muted-foreground">Manage your discount codes and track savings</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gradient-primary text-primary-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Total Saved</p>
                    <p className="text-2xl font-bold">₹12,450</p>
                  </div>
                  <Percent className="h-8 w-8 opacity-80" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-secondary text-secondary-foreground">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Active Codes</p>
                    <p className="text-2xl font-bold">{activeDiscounts.length}</p>
                  </div>
                  <Gift className="h-8 w-8 opacity-80" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Loyalty Coins</p>
                    <p className="text-2xl font-bold text-success">247</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-success" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Discount Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="active">Active Discounts</TabsTrigger>
              <TabsTrigger value="used">Used Discounts</TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="space-y-4">
              {activeDiscounts.length > 0 ? (
                activeDiscounts.map((discount) => (
                  <Card key={discount.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="secondary" className="text-lg font-bold px-3 py-1">
                              {discount.discount}
                            </Badge>
                            <h3 className="text-lg font-semibold">{discount.product}</h3>
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {discount.vendor}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {formatTimeLeft(discount.expiresAt)}
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <span className="text-2xl font-bold text-success">
                              ₹{discount.discountedPrice}
                            </span>
                            <span className="text-lg line-through text-muted-foreground">
                              ₹{discount.originalPrice}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col gap-3 lg:items-end">
                          <div className="bg-muted p-3 rounded-lg">
                            <p className="text-xs text-muted-foreground mb-1">Discount Code</p>
                            <p className="text-lg font-mono font-bold">{discount.code}</p>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Share Code
                            </Button>
                            <Button size="sm" className="bg-gradient-primary">
                              Use Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card className="text-center py-12">
                  <CardContent>
                    <Gift className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No Active Discounts</h3>
                    <p className="text-muted-foreground mb-6">
                      Browse products to generate discount codes
                    </p>
                    <Button className="bg-gradient-primary">
                      Browse Products
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="used" className="space-y-4">
              {usedDiscounts.map((discount) => (
                <Card key={discount.id} className="opacity-75">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className="text-sm">
                            Used {discount.discount}
                          </Badge>
                          <h3 className="text-lg font-semibold">{discount.product}</h3>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {discount.vendor}
                          </div>
                          <div>
                            Used on {new Date(discount.usedAt).toLocaleDateString()}
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <span className="text-xl font-bold">
                            ₹{discount.discountedPrice}
                          </span>
                          <span className="text-sm line-through text-muted-foreground">
                            ₹{discount.originalPrice}
                          </span>
                          <Badge className="bg-success text-success-foreground">
                            +{discount.coinsEarned} coins earned
                          </Badge>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-lg font-mono font-bold text-muted-foreground">
                          {discount.code}
                        </p>
                        <p className="text-sm text-muted-foreground">Redeemed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Discounts;