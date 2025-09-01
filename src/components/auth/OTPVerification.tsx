import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface OTPVerificationProps {
  phone: string;
  onVerified: () => void;
  onBack: () => void;
}

const OTPVerification = ({ phone, onVerified, onBack }: OTPVerificationProps) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [canResend, setCanResend] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const { toast } = useToast();

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleVerify = async () => {
    const otpString = otp.join('');
    if (otpString.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter the complete 6-digit OTP",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    // Simulate API verification
    setTimeout(() => {
      if (otpString === '123456') {
        toast({
          title: "Phone Verified!",
          description: "Your account has been successfully verified",
        });
        onVerified();
      } else {
        toast({
          title: "Invalid OTP",
          description: "Please check the OTP and try again",
          variant: "destructive"
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleResend = () => {
    setCanResend(false);
    setCountdown(30);
    setOtp(['', '', '', '', '', '']);
    toast({
      title: "OTP Sent",
      description: "A new OTP has been sent to your phone",
    });
  };

  const maskedPhone = phone.replace(/(\+\d{2})\d{5}(\d{5})/, '$1 *****$2');

  return (
    <Card className="w-full shadow-medium">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 p-4 bg-primary-lighter rounded-full w-16 h-16 flex items-center justify-center">
          <Smartphone className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-2xl">Verify Phone Number</CardTitle>
        <CardDescription>
          We've sent a 6-digit OTP to {maskedPhone}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-center gap-2">
          {otp.map((digit, index) => (
            <Input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 text-center text-lg font-semibold"
            />
          ))}
        </div>

        <Button 
          onClick={handleVerify}
          className="w-full bg-gradient-primary hover:opacity-90" 
          size="lg"
          disabled={isLoading || otp.join('').length !== 6}
        >
          {isLoading ? "Verifying..." : "Verify OTP"}
        </Button>

        <div className="text-center space-y-2">
          <div className="text-sm text-muted-foreground">
            Didn't receive the OTP?
          </div>
          <Button
            variant="link"
            onClick={handleResend}
            disabled={!canResend}
            className="text-primary hover:underline p-0 h-auto font-medium"
          >
            {canResend ? (
              <span className="flex items-center gap-1">
                <RefreshCw className="h-4 w-4" />
                Resend OTP
              </span>
            ) : (
              `Resend in ${countdown}s`
            )}
          </Button>
        </div>

        <Button variant="outline" onClick={onBack} className="w-full">
          Change Phone Number
        </Button>
      </CardContent>
    </Card>
  );
};

export default OTPVerification;