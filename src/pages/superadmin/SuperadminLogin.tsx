// src/pages/superadmin/SuperadminLogin.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SuperadminLogin = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpRequested, setIsOtpRequested] = useState(false);
  const navigate = useNavigate();

  const handleRequestOtp = () => {
    if (!mobile || mobile.length !== 10) {
      alert("Enter valid 10-digit mobile number 📱");
      return;
    }
    setIsOtpRequested(true);
    alert("✅ OTP sent successfully");
  };

  const handleVerifyOtp = () => {
    if (!otp || otp.length < 4) {
      alert("Enter a valid OTP 🔐");
      return;
    }
    localStorage.setItem("superadminToken", "dummy-token");
    alert("🎉 Login successful!");
    navigate("/owner/superadmin/dashboard");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!isOtpRequested) {
        handleRequestOtp();
      } else {
        handleVerifyOtp();
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-xl">Superadmin Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {!isOtpRequested ? (
            <>
              <label className="text-sm font-medium">Mobile Number</label>
              <Input
                type="tel"
                placeholder="Enter 10-digit mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                maxLength={10}
                onKeyDown={handleKeyDown}
              />
              <Button onClick={handleRequestOtp} className="w-full">
                Send OTP
              </Button>
            </>
          ) : (
            <>
              <label className="text-sm font-medium">OTP</label>
              <Input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                maxLength={6}
                onKeyDown={handleKeyDown}
              />
              <Button onClick={handleVerifyOtp} className="w-full">
                Verify & Login
              </Button>
              <Button
                variant="ghost"
                onClick={() => setIsOtpRequested(false)}
                className="w-full"
              >
                Request New OTP
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SuperadminLogin;
