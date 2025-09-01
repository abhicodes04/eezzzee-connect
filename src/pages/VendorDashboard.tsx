import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Package, BarChart3, ShoppingBag, TrendingUp } from "lucide-react";
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
        <div className="bg-gradient-primary p-6 text-white">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-2">Vendor Dashboard</h1>
            <p className="text-primary-lighter">Manage your marketplace presence</p>
          </div>
        </div>

        <div className="max-w-md mx-auto p-4 -mt-8 relative z-10">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 mb-6">
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
          <Card className="shadow-medium border-0 mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
              <CardDescription>Manage your business efficiently</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full h-auto p-4 justify-start hover:bg-primary-lighter/20 transition-all duration-300 group"
                  onClick={action.onClick}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary-lighter rounded-lg group-hover:bg-primary-light transition-colors duration-300">
                      <action.icon className="h-5 w-5 text-primary group-hover:text-white" />
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
    </Layout>
  );
};

export default VendorDashboard;