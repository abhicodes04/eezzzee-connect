import { useState } from 'react';
import { User, Edit, Settings, LogOut, Gift, TrendingUp, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import Layout from '@/components/Layout';

const Profile = () => {
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);
  
  // Mock user data
  const user = {
    name: 'Priya Sharma',
    phone: '+91 98765 43210',
    email: 'priya.sharma@example.com',
    role: 'buyer',
    location: 'Bandra West, Mumbai',
    joinDate: '2023-08-15',
    loyaltyCoins: 247,
    totalSaved: 12450,
    referralCode: 'PRIYA2024'
  };

  const stats = [
    { label: 'Orders Completed', value: '28', icon: TrendingUp },
    { label: 'Money Saved', value: '₹12,450', icon: Gift },
    { label: 'Loyalty Coins', value: '247', icon: TrendingUp },
  ];

  return (
    <Layout showBottomNav userRole={user.role as 'buyer' | 'vendor'}>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-6">
          {/* Profile Header */}
          <Card className="mb-6 overflow-hidden">
            <div className="bg-gradient-hero p-6 text-white">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                <Avatar className="h-24 w-24 border-4 border-white/20">
                  <AvatarImage src="/placeholder.svg" alt={user.name} />
                  <AvatarFallback className="text-2xl font-bold bg-white text-primary">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          {user.role === 'buyer' ? 'Buyer' : 'Vendor'}
                        </Badge>
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          Member since {new Date(user.joinDate).getFullYear()}
                        </Badge>
                      </div>
                    </div>
                    
                    <Button variant="secondary" className="bg-white/20 hover:bg-white/30 border-white/30 text-white">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      {user.phone}
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      {user.email}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {user.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Stats Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                          <p className="text-2xl font-bold">{stat.value}</p>
                        </div>
                        <stat.icon className="h-8 w-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-success flex items-center justify-center">
                        <Gift className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Earned 15 loyalty coins</p>
                        <p className="text-sm text-muted-foreground">From purchase at TechStore Mumbai</p>
                      </div>
                      <p className="text-sm text-muted-foreground">2 hours ago</p>
                    </div>
                    
                    <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                        <TrendingUp className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Used discount code EEZZ25TECH</p>
                        <p className="text-sm text-muted-foreground">Saved ₹1,250 on wireless headphones</p>
                      </div>
                      <p className="text-sm text-muted-foreground">1 day ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Referral Card */}
              <Card className="bg-gradient-secondary text-secondary-foreground">
                <CardHeader>
                  <CardTitle className="text-white">Refer & Earn</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <p className="text-sm mb-1 opacity-90">Your Referral Code</p>
                      <p className="font-mono font-bold text-lg">{user.referralCode}</p>
                    </div>
                    <Button variant="secondary" className="w-full bg-white/20 hover:bg-white/30 border-white/30">
                      Share Code
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Push Notifications</p>
                      <p className="text-sm text-muted-foreground">Get notified about new discounts</p>
                    </div>
                    <Switch checked={notifications} onCheckedChange={setNotifications} />
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Updates</p>
                      <p className="text-sm text-muted-foreground">Weekly newsletter</p>
                    </div>
                    <Switch checked={emailUpdates} onCheckedChange={setEmailUpdates} />
                  </div>
                  
                  <Separator />
                  
                  <Button variant="ghost" className="w-full justify-start p-0 h-auto">
                    <Settings className="h-4 w-4 mr-2" />
                    Account Settings
                  </Button>
                  
                  <Button variant="ghost" className="w-full justify-start p-0 h-auto text-destructive">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;