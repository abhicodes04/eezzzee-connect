import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Package, BarChart3, ShoppingBag, TrendingUp, Gift, User, Bell } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const VendorDashboard = () => {
  const navigate = useNavigate();
  const [stats] = useState({
    totalProducts: 24,
    totalSales: 156,
    revenue: 45600,
    activeDiscounts: 8
  });

  const quickActions = [
    {
      icon: Plus,
      title: "Add Product",
      description: "Create a new product listing",
      onClick: () => navigate('/vendor/add-product')
    },
    {
      icon: Package,
      title: "Manage Products",
      description: "View and edit your products",
      onClick: () => navigate('/vendor/products')
    },
    {
      icon: BarChart3,
      title: "Verify Discounts",
      description: "Check buyer discount codes",
      onClick: () => navigate('/vendor/verify-discount')
    },
    {
      icon: ShoppingBag,
      title: "Orders",
      description: "View recent transactions",
      onClick: () => navigate('/vendor/orders')
    }
  ];

  return (
    <Layout showBottomNav={true} userRole="vendor">
      <div className="min-h-screen bg-gradient-subtle">
        {/* Header */}
        <div className="bg-gradient-secondary p-6 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm opacity-90">Welcome back</p>
                  <p className="font-semibold">Raj Electronics</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => navigate('/referral')}
                  className="text-white hover:bg-white/10 relative"
                >
                  <Gift className="h-5 w-5" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full text-xs flex items-center justify-center text-white">
                    !
                  </div>
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Bell className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-2">Vendor Dashboard</h1>
            <p className="text-secondary-lighter">Manage your marketplace presence</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-4 -mt-8 relative z-10">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <Card className="bg-gradient-card shadow-medium border-0">
              <CardContent className="p-4 text-center">
                <Package className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stats.totalProducts}</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card shadow-medium border-0">
              <CardContent className="p-4 text-center">
                <TrendingUp className="h-6 w-6 text-success mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stats.totalSales}</div>
                <div className="text-sm text-muted-foreground">Sales</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card shadow-medium border-0">
              <CardContent className="p-4 text-center">
                <BarChart3 className="h-6 w-6 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">₹{stats.revenue.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Revenue</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card shadow-medium border-0">
              <CardContent className="p-4 text-center">
                <ShoppingBag className="h-6 w-6 text-primary-light mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stats.activeDiscounts}</div>
                <div className="text-sm text-muted-foreground">Active Codes</div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="shadow-medium border-0">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
                <CardDescription>Manage your business efficiently</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full h-auto p-4 justify-start hover:bg-secondary-lighter/20 transition-all duration-300 group touch-target"
                    onClick={action.onClick}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-secondary-lighter rounded-lg group-hover:bg-secondary-light transition-colors duration-300">
                        <action.icon className="h-5 w-5 text-secondary group-hover:text-white" />
                      </div>
                      <div className="text-left flex-1">
                        <div className="font-medium text-foreground">{action.title}</div>
                        <div className="text-sm text-muted-foreground">{action.description}</div>
                      </div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="shadow-medium border-0">
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">New order received</p>
                      <p className="text-xs text-muted-foreground">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Product "Fresh Mangoes" updated</p>
                      <p className="text-xs text-muted-foreground">1 hour ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Discount code verified</p>
                      <p className="text-xs text-muted-foreground">3 hours ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default VendorDashboard;