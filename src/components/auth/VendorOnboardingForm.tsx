import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Building, FileText, CreditCard, Store, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface VendorOnboardingFormProps {
  onComplete: () => void;
  onBack: () => void;
}

const VendorOnboardingForm = ({ onComplete, onBack }: VendorOnboardingFormProps) => {
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    description: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    gstin: '',
    panNumber: '',
    certificationId: '',
    alternatePhone: '',
    email: '',
    termsAccepted: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.businessName || !formData.address || !formData.city || !formData.pincode) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    if (!formData.termsAccepted) {
      toast({
        title: "Terms & Conditions",
        description: "Please accept the terms and conditions",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      onComplete();
      setIsLoading(false);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card className="shadow-medium">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Vendor Onboarding</CardTitle>
          <CardDescription>
            Complete your business profile to start selling on Eezzzee
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Business Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Store className="h-5 w-5 text-primary" />
                Business Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name *</Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="businessName"
                      placeholder="Enter your business name"
                      value={formData.businessName}
                      onChange={(e) => handleInputChange('businessName', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessType">Business Type</Label>
                  <Select onValueChange={(value) => handleInputChange('businessType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grocery">Grocery Store</SelectItem>
                      <SelectItem value="pharmacy">Pharmacy</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="clothing">Clothing</SelectItem>
                      <SelectItem value="restaurant">Restaurant</SelectItem>
                      <SelectItem value="services">Services</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Business Description</Label>
                <Textarea
                  id="description"
                  placeholder="Tell customers about your business..."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={3}
                />
              </div>
            </div>

            {/* Address Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Address Information
              </h3>

              <div className="space-y-2">
                <Label htmlFor="address">Business Address *</Label>
                <Textarea
                  id="address"
                  placeholder="Enter complete business address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  rows={2}
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pincode">Pincode *</Label>
                  <Input
                    id="pincode"
                    placeholder="Pincode"
                    value={formData.pincode}
                    onChange={(e) => handleInputChange('pincode', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Legal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Legal Information
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="gstin">GSTIN (Optional)</Label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="gstin"
                      placeholder="Enter GSTIN number"
                      value={formData.gstin}
                      onChange={(e) => handleInputChange('gstin', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="panNumber">PAN Number (Optional)</Label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="panNumber"
                      placeholder="Enter PAN number"
                      value={formData.panNumber}
                      onChange={(e) => handleInputChange('panNumber', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="certificationId">Certification ID (Optional)</Label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="certificationId"
                    placeholder="Trade license or certification number"
                    value={formData.certificationId}
                    onChange={(e) => handleInputChange('certificationId', e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Additional Contact
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="alternatePhone">Alternate Phone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="alternatePhone"
                      type="tel"
                      placeholder="Alternate contact number"
                      value={formData.alternatePhone}
                      onChange={(e) => handleInputChange('alternatePhone', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Business email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50">
              <Checkbox
                id="terms"
                checked={formData.termsAccepted}
                onCheckedChange={(checked) => handleInputChange('termsAccepted', checked as boolean)}
              />
              <div className="grid gap-1.5 leading-none">
                <Label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I accept the terms and conditions
                </Label>
                <p className="text-xs text-muted-foreground">
                  By proceeding, you agree to our vendor terms, privacy policy, and community guidelines.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button 
                type="button"
                variant="outline" 
                onClick={onBack}
                className="flex-1"
              >
                Back
              </Button>
              <Button 
                type="submit" 
                className="flex-1 bg-gradient-secondary hover:opacity-90"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? "Setting up..." : "Complete Setup"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendorOnboardingForm;