import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, XCircle, Scan } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const VerifyDiscount = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [discountCode, setDiscountCode] = useState('');
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = async () => {
    if (!discountCode.trim()) {
      toast({
        title: "Enter Code",
        description: "Please enter a discount code to verify",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API verification
    setTimeout(() => {
      // Mock verification result
      const isValid = discountCode.startsWith('EEZZZEE');
      
      if (isValid) {
        setVerificationResult({
          valid: true,
          code: discountCode,
          discount: 20,
          product: {
            name: "Fresh Organic Mangoes",
            price: 150,
            discountedPrice: 120
          },
          buyer: {
            name: "Rahul Sharma",
            phone: "+91 98765 43210"
          }
        });
        toast({
          title: "Valid Code!",
          description: "Discount code verified successfully",
        });
      } else {
        setVerificationResult({
          valid: false,
          code: discountCode
        });
        toast({
          title: "Invalid Code",
          description: "This discount code is not valid",
          variant: "destructive"
        });
      }
      
      setIsLoading(false);
    }, 1500);
  };

  const handleNewVerification = () => {
    setDiscountCode('');
    setVerificationResult(null);
  };

  const confirmSale = () => {
    toast({
      title: "Sale Confirmed!",
      description: "Transaction has been recorded",
    });
    handleNewVerification();
  };

  return (
    <Layout showBottomNav={true} userRole="vendor">
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
            <h1 className="font-semibold text-foreground flex-1">Verify Discount Code</h1>
          </div>
        </div>

        <div className="max-w-md mx-auto p-4">
          {!verificationResult ? (
            /* Verification Form */
            <Card className="shadow-medium border-0">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Scan className="h-5 w-5 text-primary" />
                  <span>Enter Discount Code</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="code">Buyer's Discount Code</Label>
                  <Input
                    id="code"
                    placeholder="EEZZZEEABC123"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value.toUpperCase())}
                    className="mt-1 text-center font-mono text-lg tracking-wider"
                  />
                </div>
                
                <Button
                  onClick={handleVerify}
                  className="w-full bg-gradient-primary hover:opacity-90"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Verifying..." : "Verify Code"}
                </Button>
                
                <div className="text-center text-sm text-muted-foreground">
                  <p>Ask the buyer to show you their discount code</p>
                  <p>from the Eezzzee app</p>
                </div>
              </CardContent>
            </Card>
          ) : (
            /* Verification Result */
            <div className="space-y-4">
              <Card className={`shadow-medium border-0 ${
                verificationResult.valid 
                  ? 'bg-gradient-to-br from-success-lighter to-white' 
                  : 'bg-gradient-to-br from-destructive-lighter to-white'
              }`}>
                <CardContent className="p-6 text-center">
                  {verificationResult.valid ? (
                    <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
                  ) : (
                    <XCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
                  )}
                  
                  <h2 className="text-xl font-bold mb-2 text-foreground">
                    {verificationResult.valid ? 'Valid Discount Code' : 'Invalid Code'}
                  </h2>
                  
                  <div className="bg-white/80 rounded-lg p-3 mb-4">
                    <div className="font-mono text-lg tracking-wider text-foreground">
                      {verificationResult.code}
                    </div>
                  </div>
                  
                  {verificationResult.valid ? (
                    <Badge className="bg-success text-success-foreground">
                      {verificationResult.discount}% Discount Approved
                    </Badge>
                  ) : (
                    <Badge variant="destructive">
                      Code Not Found
                    </Badge>
                  )}
                </CardContent>
              </Card>

              {verificationResult.valid && (
                <>
                  {/* Transaction Details */}
                  <Card className="shadow-medium border-0">
                    <CardHeader>
                      <CardTitle className="text-lg">Transaction Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Product:</span>
                        <span className="font-medium">{verificationResult.product.name}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Original Price:</span>
                        <span className="line-through text-muted-foreground">₹{verificationResult.product.price}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Discount:</span>
                        <span className="text-destructive font-medium">-₹{verificationResult.product.price - verificationResult.product.discountedPrice}</span>
                      </div>
                      
                      <div className="border-t pt-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Final Price:</span>
                          <span className="text-xl font-bold text-primary">₹{verificationResult.product.discountedPrice}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Buyer Details */}
                  <Card className="shadow-medium border-0">
                    <CardHeader>
                      <CardTitle className="text-lg">Buyer Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Name:</span>
                          <span className="font-medium">{verificationResult.buyer.name}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Phone:</span>
                          <span className="font-medium">{verificationResult.buyer.phone}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button
                      onClick={confirmSale}
                      className="flex-1 bg-gradient-secondary hover:opacity-90"
                      size="lg"
                    >
                      Confirm Sale
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleNewVerification}
                      className="flex-1"
                      size="lg"
                    >
                      Verify Another
                    </Button>
                  </div>
                </>
              )}

              {!verificationResult.valid && (
                <Button
                  onClick={handleNewVerification}
                  className="w-full bg-gradient-primary hover:opacity-90"
                  size="lg"
                >
                  Try Another Code
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default VerifyDiscount;