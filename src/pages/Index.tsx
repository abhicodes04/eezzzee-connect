import { useState } from 'react';
import { Button } from "@/components/ui/button";
import RoleSelector from '@/components/RoleSelector';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import OTPVerification from '@/components/auth/OTPVerification';
import heroImage from '@/assets/hero-marketplace.jpg';
import { ArrowRight, Shield, Users, Gift } from "lucide-react";
import { useNavigate } from 'react-router-dom';

type AuthStep = 'landing' | 'role-select' | 'login' | 'register' | 'otp-verify';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<AuthStep>('landing');
  const [selectedRole, setSelectedRole] = useState<'buyer' | 'vendor' | null>(null);
  const [verificationPhone, setVerificationPhone] = useState('');
  const navigate = useNavigate();

  const handleRoleSelect = (role: 'buyer' | 'vendor') => {
    setSelectedRole(role);
    setCurrentStep('register');
  };

  const handleLogin = (phone: string) => {
    setVerificationPhone(phone);
    setCurrentStep('otp-verify');
  };

  const handleRegister = (phone: string) => {
    setVerificationPhone(phone);
    setCurrentStep('otp-verify');
  };

  const handleVerified = () => {
    if (selectedRole === 'buyer') {
      navigate('/home');
    } else {
      navigate('/vendor');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'role-select':
        return (
          <div className="max-w-md mx-auto">
            <RoleSelector onRoleSelect={handleRoleSelect} />
            <Button 
              variant="ghost" 
              onClick={() => setCurrentStep('landing')}
              className="w-full mt-4"
            >
              Back
            </Button>
          </div>
        );
      
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
              userRole={selectedRole!}
              onRegister={handleRegister}
              onSwitchToLogin={() => setCurrentStep('login')}
            />
            <Button 
              variant="ghost" 
              onClick={() => setCurrentStep('role-select')}
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
              onBack={() => setCurrentStep(selectedRole ? 'register' : 'login')}
            />
          </div>
        );
      
      default:
        return (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-6">
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Eezzzee Marketplace Community" 
                  className="w-full max-w-2xl mx-auto rounded-2xl shadow-strong"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Welcome to{' '}
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    Eezzzee
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Connect with local vendors, discover amazing products, and get exclusive discounts in your community
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-6 rounded-xl bg-primary-lighter/50 border border-primary-lighter">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Trusted Community</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with verified local vendors in your society and neighborhood
                </p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-secondary-lighter/50 border border-secondary-lighter">
                <Gift className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Exclusive Discounts</h3>
                <p className="text-sm text-muted-foreground">
                  Get unique discount codes and earn loyalty coins on every purchase
                </p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-success-lighter/50 border border-success-lighter">
                <Users className="h-12 w-12 text-success mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Local Network</h3>
                <p className="text-sm text-muted-foreground">
                  Support local businesses and build stronger community connections
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button 
                onClick={() => setCurrentStep('role-select')}
                className="flex-1 bg-gradient-primary hover:opacity-90" 
                size="lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setCurrentStep('login')}
                size="lg"
                className="flex-1"
              >
                I Have Account
              </Button>
            </div>

            {/* Social Proof */}
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                Join 10,000+ happy customers and vendors
              </p>
              <div className="flex justify-center items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  4.8/5 community rating
                </span>
              </div>
            </div>
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
