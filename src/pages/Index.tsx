import { useState } from 'react';
import { Button } from "@/components/ui/button";
import UserRegistration from '@/components/UserRegistration';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import OTPVerification from '@/components/auth/OTPVerification';
import heroImage from '@/assets/hero-marketplace.jpg';
import { ArrowRight, Shield, Users, Gift, ShoppingBag, Store, TrendingUp, Star, Truck, MapPin, Package, Heart } from "lucide-react";
import { useNavigate } from 'react-router-dom';

type AuthStep = 'landing' | 'login' | 'register' | 'otp-verify' | 'user-registration';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<AuthStep>('landing');
  const [verificationPhone, setVerificationPhone] = useState('');
  const navigate = useNavigate();

  const handleLogin = (phone: string) => {
    setVerificationPhone(phone);
    setCurrentStep('otp-verify');
  };

  const handleRegister = (phone: string) => {
    setVerificationPhone(phone);
    setCurrentStep('otp-verify');
  };

  const handleVerified = () => {
    navigate('/home');
  };

  const handleUserRegistrationComplete = () => {
    navigate('/home');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'login':
        return (
          <div className="max-w-md mx-auto">
            <LoginForm 
              onLogin={handleLogin}
              onSwitchToRegister={() => setCurrentStep('register')}
            />
            <Button 
              variant="ghost" 
              onClick={() => setCurrentStep('landing')}
              className="w-full mt-4"
            >
              Back
            </Button>
          </div>
        );
      
      case 'register':
        return (
          <div className="max-w-md mx-auto">
            <RegisterForm 
              userRole="buyer"
              onRegister={handleRegister}
              onSwitchToLogin={() => setCurrentStep('login')}
            />
            <Button 
              variant="ghost" 
              onClick={() => setCurrentStep('landing')}
              className="w-full mt-4"
            >
              Back
            </Button>
          </div>
        );
      
      case 'otp-verify':
        return (
          <div className="max-w-md mx-auto">
            <OTPVerification 
              phone={verificationPhone}
              onVerified={handleVerified}
              onBack={() => setCurrentStep('register')}
            />
          </div>
        );

      case 'user-registration':
        return (
          <UserRegistration 
            onComplete={handleUserRegistrationComplete}
            onBack={() => setCurrentStep('landing')}
          />
        );
      
      default:
        return (
          <div className="space-y-8">
            {/* Navigation Header */}
            <header className="flex items-center justify-between py-4 px-6 bg-card border-b sticky top-0 z-50">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  Eezzzee
                </h1>
              </div>
              <nav className="hidden lg:flex items-center space-x-8">
                <a href="#categories" className="text-foreground hover:text-primary transition-colors">Categories</a>
                <a href="#featured" className="text-foreground hover:text-primary transition-colors">Featured</a>
                <a href="#vendors" className="text-foreground hover:text-primary transition-colors">Vendors</a>
                <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a> 
              </nav>
              <div className="flex items-center space-x-4">
                <Button 
                  variant="outline" 
                  onClick={() =>  navigate('/login')}
                  className="hidden sm:flex"
                >
                  Sign In
                </Button>
                <Button 
                  onClick={() => navigate('/register')}
                  className="bg-gradient-primary hover:opacity-90"
                >
                  Get Started
                </Button>
              </div>
            </header>

            {/* Hero Section */}
            <section className="relative py-20 px-6 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-subtle"></div>
              <div className="relative max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="text-left">
                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                      Your Local{' '}
                      <span className="bg-gradient-hero bg-clip-text text-transparent">
                        Marketplace
                      </span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                      Connect with trusted local vendors, discover amazing products, 
                      and get exclusive discounts in your community.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                      <Button 
                        size="lg" 
                        onClick={() => setCurrentStep('user-registration')}
                        className="bg-gradient-primary hover:opacity-90 px-8 py-4 text-lg"
                      >
                        Start Shopping
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg"
                        onClick={() => setCurrentStep('user-registration')}
                        className="px-8 py-4 text-lg"
                      >
                        Get Started
                      </Button>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-lg">⭐</span>
                        ))}
                      </div>
                      <span>10,000+ happy customers</span>
                      <span>•</span>
                      <span>500+ local vendors</span>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <img 
                      src={heroImage} 
                      alt="Eezzzee Marketplace Community" 
                      className="w-full rounded-2xl shadow-strong"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            </section>

            {/* Shop Categories - Enhanced for Buyers */}
            <section id="categories" className="py-20 px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Discover amazing products from trusted local vendors in your neighborhood
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  <div className="group text-center p-6 rounded-2xl bg-gradient-card border border-primary-lighter hover:shadow-strong transition-all duration-300 cursor-pointer">
                    <div className="h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <ShoppingBag className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Groceries</h4>
                    <p className="text-sm text-muted-foreground">Fresh fruits, vegetables & daily essentials</p>
                  </div>
                  
                  <div className="group text-center p-6 rounded-2xl bg-gradient-card border border-secondary-lighter hover:shadow-strong transition-all duration-300 cursor-pointer">
                    <div className="h-16 w-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Gift className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Gifts & Crafts</h4>
                    <p className="text-sm text-muted-foreground">Handmade items, flowers & presents</p>
                  </div>
                  
                  <div className="group text-center p-6 rounded-2xl bg-gradient-card border border-success-lighter hover:shadow-strong transition-all duration-300 cursor-pointer">
                    <div className="h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Beauty & Care</h4>
                    <p className="text-sm text-muted-foreground">Cosmetics, skincare & wellness</p>
                  </div>
                  
                  <div className="group text-center p-6 rounded-2xl bg-gradient-card border border-primary-lighter hover:shadow-strong transition-all duration-300 cursor-pointer">
                    <div className="h-16 w-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Package className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Services</h4>
                    <p className="text-sm text-muted-foreground">Home services, repairs & maintenance</p>
                  </div>
                </div>

                {/* Why Choose Eezzzee */}
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-4">Why Choose Eezzzee?</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Experience the future of local commerce with our innovative marketplace platform
                  </p>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="text-center p-8 rounded-2xl bg-gradient-card border border-primary-lighter hover:shadow-strong transition-all duration-300">
                    <div className="h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Trusted Community</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Connect with verified local vendors in your society and neighborhood. 
                      Every vendor is carefully vetted for quality and reliability.
                    </p>
                  </div>
                  
                  <div className="text-center p-8 rounded-2xl bg-gradient-card border border-secondary-lighter hover:shadow-strong transition-all duration-300">
                    <div className="h-16 w-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Gift className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Exclusive Discounts</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Get unique discount codes and earn loyalty coins on every purchase. 
                      Save more while supporting local businesses.
                    </p>
                  </div>
                  
                  <div className="text-center p-8 rounded-2xl bg-gradient-card border border-success-lighter hover:shadow-strong transition-all duration-300">
                    <div className="h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Local Network</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Support local businesses and build stronger community connections. 
                      Discover hidden gems in your neighborhood.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Features */}
            <section id="featured" className="py-20 px-6 bg-gradient-subtle">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Features That Make a Difference</h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Whether you're shopping or selling, we've got you covered
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12">
                  {/* For Buyers */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-center">For Shoppers</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <Truck className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Fast Local Delivery</h4>
                          <p className="text-muted-foreground text-sm">Same-day or next-day delivery from vendors in your area</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0">
                          <Star className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Quality Assured</h4>
                          <p className="text-muted-foreground text-sm">Rate and review products with our quality guarantee system</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Hyperlocal Shopping</h4>
                          <p className="text-muted-foreground text-sm">Discover vendors within your society and building</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* For Vendors */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-center">For Vendors</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <Store className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Digital Storefront</h4>
                          <p className="text-muted-foreground text-sm">Create your professional online store with custom branding</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Grow Your Business</h4>
                          <p className="text-muted-foreground text-sm">Analytics, marketing tools, and customer insights to boost sales</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <Users className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Community Support</h4>
                          <p className="text-muted-foreground text-sm">Connect with local customers and build lasting relationships</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Local Vendors Showcase */}
            <section id="vendors" className="py-20 px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">Meet Your Local Vendors</h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Amazing local businesses already thriving on Eezzzee
                </p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-card p-6 rounded-xl border hover:shadow-strong transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">RS</span>
                    </div>
                    <h4 className="font-semibold mb-2">Raj's Fresh Store</h4>
                    <p className="text-sm text-muted-foreground mb-3">Organic fruits & vegetables</p>
                    <div className="flex items-center justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm ml-1">4.8 (124)</span>
                    </div>
                  </div>
                  
                  <div className="bg-card p-6 rounded-xl border hover:shadow-strong transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">MB</span>
                    </div>
                    <h4 className="font-semibold mb-2">Maya's Boutique</h4>
                    <p className="text-sm text-muted-foreground mb-3">Handmade clothes & accessories</p>
                    <div className="flex items-center justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm ml-1">4.9 (89)</span>
                    </div>
                  </div>
                  
                  <div className="bg-card p-6 rounded-xl border hover:shadow-strong transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">AK</span>
                    </div>
                    <h4 className="font-semibold mb-2">Arjun Kirana</h4>
                    <p className="text-sm text-muted-foreground mb-3">Daily essentials & groceries</p>
                    <div className="flex items-center justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm ml-1">4.7 (156)</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 px-6 bg-gradient-hero text-white">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Ready to Transform Your Local Experience?
                </h2>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Join thousands of satisfied customers and vendors who've made Eezzzee their go-to marketplace.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    onClick={() => setCurrentStep('user-registration')}
                    className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg"
                  >
                    Join as Buyer
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => setCurrentStep('user-registration')}
                    className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
                  >
                    Get Started
                  </Button>
                </div>
                <p className="text-sm opacity-75 mt-4">
                  Free to join • 24/7 support • Start in minutes
                </p>
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {renderStep()}
      </div>
    </div>
  );
};

export default Index;
