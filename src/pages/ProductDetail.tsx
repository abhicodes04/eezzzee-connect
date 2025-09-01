import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowLeft, Star, MapPin, Phone, MessageCircle, Sparkles, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [showDiscountModal, setShowDiscountModal] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [codeCopied, setCodeCopied] = useState(false);

  // Mock product data - in real app, fetch based on ID
  const product = {
    id: 1,
    name: "Fresh Organic Mangoes",
    category: "Fruits",
    price: 150,
    originalPrice: 180,
    discount: 20,
    rating: 4.5,
    reviews: 24,
    description: "Premium quality organic mangoes sourced directly from local farms. Sweet, juicy, and perfectly ripened. Rich in vitamins and natural goodness.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    vendor: {
      name: "Green Valley Farms",
      rating: 4.8,
      phone: "+91 98765 43210",
      location: "Sector 15, Gurgaon"
    },
    features: ["Organic Certified", "Farm Fresh", "Chemical Free", "Hand Picked"],
    stock: 25,
    unit: "per kg"
  };

  const generateDiscountCode = () => {
    const code = `EEZZZEE${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    setDiscountCode(code);
    setShowDiscountModal(true);
  };

  const copyDiscountCode = async () => {
    try {
      await navigator.clipboard.writeText(discountCode);
      setCodeCopied(true);
      toast({
        title: "Code Copied!",
        description: "Discount code copied to clipboard",
      });
      setTimeout(() => setCodeCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Please copy the code manually",
        variant: "destructive"
      });
    }
  };

  const confirmPurchase = () => {
    toast({
      title: "Purchase Confirmed!",
      description: "+5 loyalty coins earned",
    });
    setShowDiscountModal(false);
    navigate('/home');
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-subtle">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b p-4">
          <div className="max-w-md mx-auto flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(-1)}
              className="p-2"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="font-semibold text-foreground flex-1 truncate">Product Details</h1>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          {/* Product Images */}
          <div className="aspect-square bg-muted mb-4">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-4 space-y-6">
            {/* Product Info */}
            <div>
              <div className="flex justify-between items-start mb-2">
                <h1 className="text-xl font-bold text-foreground line-clamp-2">{product.name}</h1>
                <Badge className="bg-success-lighter text-success ml-2">{product.category}</Badge>
              </div>
              
              <div className="flex items-center space-x-4 mb-3">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-secondary text-secondary" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews})</span>
                </div>
                <div className="text-muted-foreground">•</div>
                <div className="text-muted-foreground">{product.stock} in stock</div>
              </div>

              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                <span className="text-lg text-muted-foreground line-through">₹{product.originalPrice}</span>
                <Badge variant="secondary" className="bg-secondary-lighter text-secondary">
                  {product.discount}% OFF
                </Badge>
              </div>

              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <Card className="shadow-soft border-0">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3 text-foreground">Key Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Vendor Info */}
            <Card className="shadow-soft border-0">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3 text-foreground">Vendor Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{product.vendor.name}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-secondary text-secondary" />
                      <span className="text-sm font-medium">{product.vendor.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{product.vendor.location}</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Button */}
            <div className="sticky bottom-0 bg-white/95 backdrop-blur-sm p-4 -mx-4 border-t">
              <Button
                onClick={generateDiscountCode}
                className="w-full bg-gradient-primary hover:opacity-90 h-14 text-lg font-semibold shadow-glow"
                size="lg"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Get {product.discount}% Discount Code
              </Button>
            </div>
          </div>
        </div>

        {/* Discount Code Modal */}
        <Dialog open={showDiscountModal} onOpenChange={setShowDiscountModal}>
          <DialogContent className="max-w-sm mx-auto">
            <DialogHeader>
              <DialogTitle className="text-center">Your Discount Code</DialogTitle>
            </DialogHeader>
            <div className="text-center space-y-4">
              <div className="p-6 bg-gradient-primary rounded-lg">
                <div className="text-white text-2xl font-bold tracking-wider">
                  {discountCode}
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Show this code to the vendor to get {product.discount}% discount
              </p>
              
              <Button
                onClick={copyDiscountCode}
                variant="outline"
                className="w-full"
              >
                {codeCopied ? (
                  <>
                    <Check className="h-4 w-4 mr-2 text-success" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Code
                  </>
                )}
              </Button>
              
              <Button
                onClick={confirmPurchase}
                className="w-full bg-gradient-secondary hover:opacity-90"
                size="lg"
              >
                I've Made the Purchase
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default ProductDetail;