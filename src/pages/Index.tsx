// import { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import RoleSelector from '@/components/RoleSelector';
// import LoginForm from '@/components/auth/LoginForm';
// import RegisterForm from '@/components/auth/RegisterForm';
// import OTPVerification from '@/components/auth/OTPVerification';
// import VendorOnboardingForm from '@/components/auth/VendorOnboardingForm';
// import heroImage from '@/assets/hero-marketplace.jpg';
// import { ArrowRight, Shield, Users, Gift } from "lucide-react";
// import { useNavigate } from 'react-router-dom';

// type AuthStep = 'landing' | 'role-select' | 'login' | 'register' | 'otp-verify' | 'vendor-onboarding';

// const Index = () => {
//   const [currentStep, setCurrentStep] = useState<AuthStep>('landing');
//   const [selectedRole, setSelectedRole] = useState<'buyer' | 'vendor' | null>(null);
//   const [verificationPhone, setVerificationPhone] = useState('');
//   const [needsVendorOnboarding, setNeedsVendorOnboarding] = useState(false);
//   const navigate = useNavigate();

//   const handleRoleSelect = (role: 'buyer' | 'vendor') => {
//     setSelectedRole(role);
//     setCurrentStep('register');
//   };

//   const handleLogin = (phone: string) => {
//     setVerificationPhone(phone);
//     setCurrentStep('otp-verify');
//   };

//   const handleRegister = (phone: string, needsOnboarding = false) => {
//     setVerificationPhone(phone);
//     setNeedsVendorOnboarding(needsOnboarding);
//     setCurrentStep('otp-verify');
//   };

//   const handleVerified = () => {
//     if (selectedRole === 'buyer') {
//       navigate('/home');
//     } else if (needsVendorOnboarding) {
//       setCurrentStep('vendor-onboarding');
//     } else {
//       navigate('/vendor');
//     }
//   };

//   const handleVendorOnboardingComplete = () => {
//     navigate('/vendor');
//   };

//   const renderStep = () => {
//     switch (currentStep) {
//       case 'role-select':
//         return (
//           <div className="max-w-md mx-auto">
//             <RoleSelector onRoleSelect={handleRoleSelect} />
//             <Button 
//               variant="ghost" 
//               onClick={() => setCurrentStep('landing')}
//               className="w-full mt-4"
//             >
//               Back
//             </Button>
//           </div>
//         );
      
//       case 'login':
//         return (
//           <div className="max-w-md mx-auto">
//             <LoginForm 
//               onLogin={handleLogin}
//               onSwitchToRegister={() => setCurrentStep('register')}
//             />
//             <Button 
//               variant="ghost" 
//               onClick={() => setCurrentStep('landing')}
//               className="w-full mt-4"
//             >
//               Back
//             </Button>
//           </div>
//         );
      
//       case 'register':
//         return (
//           <div className="max-w-md mx-auto">
//             <RegisterForm 
//               userRole={selectedRole!}
//               onRegister={handleRegister}
//               onSwitchToLogin={() => setCurrentStep('login')}
//             />
//             <Button 
//               variant="ghost" 
//               onClick={() => setCurrentStep('role-select')}
//               className="w-full mt-4"
//             >
//               Back
//             </Button>
//           </div>
//         );
      
//       case 'otp-verify':
//         return (
//           <div className="max-w-md mx-auto">
//             <OTPVerification 
//               phone={verificationPhone}
//               onVerified={handleVerified}
//               onBack={() => setCurrentStep(selectedRole ? 'register' : 'login')}
//             />
//           </div>
//         );
      
//       case 'vendor-onboarding':
//         return (
//           <VendorOnboardingForm 
//             onComplete={handleVendorOnboardingComplete}
//             onBack={() => setCurrentStep('otp-verify')}
//           />
//         );
      
//       default:
//         return (
//           <div className="space-y-8">
//             {/* Navigation Header */}
//             <header className="flex items-center justify-between py-4 px-6 bg-card border-b sticky top-0 z-50">
//               <div className="flex items-center space-x-4">
//                 <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
//                   Eezzzee
//                 </h1>
//               </div>
//               <nav className="hidden lg:flex items-center space-x-8">
//                 <a href="#categories" className="text-foreground hover:text-primary transition-colors">Categories</a>
//                 <a href="#featured" className="text-foreground hover:text-primary transition-colors">Featured</a>
//                 <a href="#vendors" className="text-foreground hover:text-primary transition-colors">Vendors</a>
//                 <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
//               </nav>
//               <div className="flex items-center space-x-4">
//                 <Button 
//                   variant="outline" 
//                   onClick={() => setCurrentStep('login')}
//                   className="hidden sm:flex"
//                 >
//                   Sign In
//                 </Button>
//                 <Button 
//                   onClick={() => setCurrentStep('role-select')}
//                   className="bg-gradient-primary hover:opacity-90"
//                 >
//                   Get Started
//                 </Button>
//               </div>
//             </header>

//             {/* Hero Section */}
//             <section className="relative py-20 px-6 text-center overflow-hidden">
//               <div className="absolute inset-0 bg-gradient-subtle"></div>
//               <div className="relative max-w-6xl mx-auto">
//                 <div className="grid lg:grid-cols-2 gap-12 items-center">
//                   <div className="text-left">
//                     <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
//                       Your Local{' '}
//                       <span className="bg-gradient-hero bg-clip-text text-transparent">
//                         Marketplace
//                       </span>
//                     </h1>
//                     <p className="text-xl text-muted-foreground mb-8 max-w-lg">
//                       Connect with trusted local vendors, discover amazing products, 
//                       and get exclusive discounts in your community.
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-4 mb-8">
//                       <Button 
//                         size="lg" 
//                         onClick={() => setCurrentStep('role-select')}
//                         className="bg-gradient-primary hover:opacity-90 px-8 py-4 text-lg"
//                       >
//                         Start Shopping
//                         <ArrowRight className="ml-2 h-5 w-5" />
//                       </Button>
//                       <Button 
//                         variant="outline" 
//                         size="lg"
//                         onClick={() => setCurrentStep('login')}
//                         className="px-8 py-4 text-lg"
//                       >
//                         I'm a Vendor
//                       </Button>
//                     </div>
//                     <div className="flex items-center gap-6 text-sm text-muted-foreground">
//                       <div className="flex items-center gap-1">
//                         {[...Array(5)].map((_, i) => (
//                           <span key={i} className="text-yellow-400 text-lg">⭐</span>
//                         ))}
//                       </div>
//                       <span>10,000+ happy customers</span>
//                       <span>•</span>
//                       <span>500+ local vendors</span>
//                     </div>
//                   </div>
                  
//                   <div className="relative">
//                     <img 
//                       src={heroImage} 
//                       alt="Eezzzee Marketplace Community" 
//                       className="w-full rounded-2xl shadow-strong"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             {/* Features Grid */}
//             <section id="categories" className="py-20 px-6">
//               <div className="max-w-6xl mx-auto">
//                 <div className="text-center mb-16">
//                   <h2 className="text-4xl font-bold mb-4">Why Choose Eezzzee?</h2>
//                   <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//                     Experience the future of local commerce with our innovative marketplace platform
//                   </p>
//                 </div>
                
//                 <div className="grid lg:grid-cols-3 gap-8">
//                   <div className="text-center p-8 rounded-2xl bg-gradient-card border border-primary-lighter hover:shadow-strong transition-all duration-300">
//                     <div className="h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
//                       <Shield className="h-8 w-8 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-semibold mb-4">Trusted Community</h3>
//                     <p className="text-muted-foreground leading-relaxed">
//                       Connect with verified local vendors in your society and neighborhood. 
//                       Every vendor is carefully vetted for quality and reliability.
//                     </p>
//                   </div>
                  
//                   <div className="text-center p-8 rounded-2xl bg-gradient-card border border-secondary-lighter hover:shadow-strong transition-all duration-300">
//                     <div className="h-16 w-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
//                       <Gift className="h-8 w-8 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-semibold mb-4">Exclusive Discounts</h3>
//                     <p className="text-muted-foreground leading-relaxed">
//                       Get unique discount codes and earn loyalty coins on every purchase. 
//                       Save more while supporting local businesses.
//                     </p>
//                   </div>
                  
//                   <div className="text-center p-8 rounded-2xl bg-gradient-card border border-success-lighter hover:shadow-strong transition-all duration-300">
//                     <div className="h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
//                       <Users className="h-8 w-8 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-semibold mb-4">Local Network</h3>
//                     <p className="text-muted-foreground leading-relaxed">
//                       Support local businesses and build stronger community connections. 
//                       Discover hidden gems in your neighborhood.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             {/* Call to Action */}
//             <section className="py-20 px-6 bg-gradient-hero text-white">
//               <div className="max-w-4xl mx-auto text-center">
//                 <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//                   Ready to Transform Your Shopping Experience?
//                 </h2>
//                 <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
//                   Join thousands of satisfied customers and vendors who've made Eezzzee their go-to marketplace.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                   <Button 
//                     size="lg" 
//                     onClick={() => setCurrentStep('role-select')}
//                     className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg"
//                   >
//                     Join as Buyer
//                   </Button>
//                   <Button 
//                     variant="outline" 
//                     size="lg"
//                     onClick={() => setCurrentStep('role-select')}
//                     className="border-white text-secondary hover:bg-white/90 px-8 py-4 text-lg"
//                   >
//                     Become a Vendor
//                   </Button>
//                 </div>
//               </div>
//             </section>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <div className="container mx-auto px-4 py-8">
//         {renderStep()}
//       </div>
//     </div>
//   );
// };

// export default Index;


import { useState } from 'react';
import { Button } from "@/components/ui/button";
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import OTPVerification from '@/components/auth/OTPVerification';
import VendorOnboardingForm from '@/components/auth/VendorOnboardingForm';
import heroImage from '@/assets/hero-marketplace.jpg';
import { ArrowRight, Store, TrendingUp, DollarSign, Users, Package, BarChart3 } from "lucide-react";
import { useNavigate } from 'react-router-dom';

type AuthStep = 'landing' | 'login' | 'register' | 'otp-verify' | 'vendor-onboarding';

const VendorIndex = () => {
  const [currentStep, setCurrentStep] = useState<AuthStep>('landing');
  const [verificationPhone, setVerificationPhone] = useState('');
  const [needsVendorOnboarding, setNeedsVendorOnboarding] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (phone: string) => {
    setVerificationPhone(phone);
    setCurrentStep('otp-verify');
  };

  const handleRegister = (phone: string, needsOnboarding = true) => {
    setVerificationPhone(phone);
    setNeedsVendorOnboarding(needsOnboarding);
    setCurrentStep('otp-verify');
  };

  const handleVerified = () => {
    if (needsVendorOnboarding) {
      setCurrentStep('vendor-onboarding');
    } else {
      navigate('/Vendor');
    }
  };

  const handleVendorOnboardingComplete = () => {
    navigate('/vendor');
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
              userRole="vendor"
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
      
      case 'vendor-onboarding':
        return (
          <VendorOnboardingForm 
            onComplete={handleVendorOnboardingComplete}
            onBack={() => setCurrentStep('otp-verify')}
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
                <span className="text-sm bg-gradient-primary px-3 py-1 rounded-full text-white">
                  Vendor Portal
                </span>
              </div>
              <nav className="hidden lg:flex items-center space-x-8">
                <a href="#benefits" className="text-foreground hover:text-primary transition-colors">Benefits</a>
                <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
                <a href="#success" className="text-foreground hover:text-primary transition-colors">Success Stories</a>
                {/* <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Pricing</a> */}
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
                  Start Selling
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
                      Grow Your{' '}
                      <span className="bg-gradient-hero bg-clip-text text-transparent">
                        Business
                      </span>{' '}
                      Locally
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                      Join India's fastest-growing local marketplace. Connect with customers 
                      in your community, increase sales, and build lasting relationships.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                      <Button 
                        size="lg" 
                        onClick={() => setCurrentStep('register')}
                        className="bg-gradient-primary hover:opacity-90 px-8 py-4 text-lg"
                      >
                        Start Selling Today
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg"
                        onClick={() => setCurrentStep('login')}
                        className="px-8 py-4 text-lg"
                      >
                        Already a Vendor?
                      </Button>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-lg">⭐</span>
                        ))}
                      </div>
                      <span>500+ successful vendors</span>
                      <span>•</span>
                      <span>Zero setup fees</span>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <img 
                      src={heroImage} 
                      alt="Successful Vendors on Eezzzee" 
                      className="w-full rounded-2xl shadow-strong"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="py-20 px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Why Sell on Eezzzee?</h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Everything you need to succeed as a local vendor, all in one platform
                  </p>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="text-center p-8 rounded-2xl bg-gradient-card border border-primary-lighter hover:shadow-strong transition-all duration-300">
                    <div className="h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Store className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Your Digital Store</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Create a professional online presence with your own customizable store. 
                      Showcase products, manage inventory, and track performance.
                    </p>
                  </div>
                  
                  <div className="text-center p-8 rounded-2xl bg-gradient-card border border-secondary-lighter hover:shadow-strong transition-all duration-300">
                    <div className="h-16 w-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Increase Sales</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Reach more customers in your local area. Our platform helps you 
                      connect with buyers actively looking for your products.
                    </p>
                  </div>
                  
                  <div className="text-center p-8 rounded-2xl bg-gradient-card border border-success-lighter hover:shadow-strong transition-all duration-300">
                    <div className="h-16 w-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <DollarSign className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Low Commission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Keep more of what you earn with our competitive commission structure. 
                      Transparent pricing with no hidden fees.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="py-20 px-6 bg-gradient-subtle">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Powerful Tools for Vendors</h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Manage your business efficiently with our comprehensive vendor dashboard
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-card p-6 rounded-xl border hover:shadow-strong transition-all duration-300">
                    <Package className="h-8 w-8 text-primary mb-4" />
                    <h4 className="font-semibold mb-2">Product Management</h4>
                    <p className="text-sm text-muted-foreground">
                      Easy product listing, bulk uploads, inventory tracking, and category management.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-xl border hover:shadow-strong transition-all duration-300">
                    <BarChart3 className="h-8 w-8 text-primary mb-4" />
                    <h4 className="font-semibold mb-2">Analytics Dashboard</h4>
                    <p className="text-sm text-muted-foreground">
                      Track sales, monitor performance, understand customer behavior with detailed insights.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-xl border hover:shadow-strong transition-all duration-300">
                    <Users className="h-8 w-8 text-primary mb-4" />
                    <h4 className="font-semibold mb-2">Customer Management</h4>
                    <p className="text-sm text-muted-foreground">
                      Handle orders, communicate with buyers, manage reviews and build relationships.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-xl border hover:shadow-strong transition-all duration-300">
                    <DollarSign className="h-8 w-8 text-primary mb-4" />
                    <h4 className="font-semibold mb-2">Payment Processing</h4>
                    <p className="text-sm text-muted-foreground">
                      Secure payments, automatic payouts, financial reporting, and tax management.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-xl border hover:shadow-strong transition-all duration-300">
                    <Store className="h-8 w-8 text-primary mb-4" />
                    <h4 className="font-semibold mb-2">Store Customization</h4>
                    <p className="text-sm text-muted-foreground">
                      Brand your store with custom themes, logos, and layout options.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-xl border hover:shadow-strong transition-all duration-300">
                    <TrendingUp className="h-8 w-8 text-primary mb-4" />
                    <h4 className="font-semibold mb-2">Marketing Tools</h4>
                    <p className="text-sm text-muted-foreground">
                      Create promotions, discount codes, and marketing campaigns to boost sales.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Success Stats */}
            <section id="success" className="py-20 px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">Join Our Success Story</h2>
                <p className="text-xl text-muted-foreground mb-12">
                  See how vendors are thriving on our platform
                </p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="p-8">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-muted-foreground">Active Vendors</div>
                  </div>
                  <div className="p-8">
                    <div className="text-4xl font-bold text-primary mb-2">₹2.5L+</div>
                    <div className="text-muted-foreground">Average Monthly Revenue</div>
                  </div>
                  <div className="p-8">
                    <div className="text-4xl font-bold text-primary mb-2">95%</div>
                    <div className="text-muted-foreground">Vendor Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 px-6 bg-gradient-hero text-white">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Ready to Start Your Vendor Journey?
                </h2>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Join hundreds of successful vendors who've transformed their local business with Eezzzee.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    onClick={() => setCurrentStep('register')}
                    className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg"
                  >
                    Start Selling Now
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => setCurrentStep('login')}
                    className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
                  >
                    Sign In to Dashboard
                  </Button>
                </div>
                <p className="text-sm opacity-75 mt-4">
                  No setup fees • 24/7 support • Start earning in minutes
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

export default VendorIndex;