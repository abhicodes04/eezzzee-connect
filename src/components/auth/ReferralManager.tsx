import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Copy, Share, Users, Coins } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ReferralManagerProps {
  userRole: 'buyer' | 'vendor';
  userPhone: string;
}

const ReferralManager = ({ userRole, userPhone }: ReferralManagerProps) => {
  const [myReferralCode, setMyReferralCode] = useState('');
  const [referralStats, setReferralStats] = useState({
    totalReferrals: 0,
    coinsEarned: 0,
    pendingRewards: 0
  });
  const { toast } = useToast();

  useEffect(() => {
    // Generate unique referral code based on user phone
    const generateReferralCode = (phone: string) => {
      const phoneDigits = phone.replace(/\D/g, '').slice(-6);
      const prefix = userRole === 'buyer' ? 'BUY' : 'VEN';
      return `${prefix}${phoneDigits}`;
    };

    setMyReferralCode(generateReferralCode(userPhone));
    
    // Simulate loading referral stats
    setReferralStats({
      totalReferrals: Math.floor(Math.random() * 10),
      coinsEarned: Math.floor(Math.random() * 500),
      pendingRewards: Math.floor(Math.random() * 100)
    });
  }, [userPhone, userRole]);

  const copyReferralCode = () => {
    navigator.clipboard.writeText(myReferralCode);
    toast({
      title: "Copied!",
      description: "Referral code copied to clipboard"
    });
  };

  const shareReferral = async () => {
    const shareText = `Join Eezzzee Marketplace with my referral code ${myReferralCode} and get bonus loyalty coins! 🎁`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Join Eezzzee Marketplace',
          text: shareText,
          url: window.location.origin
        });
      } catch (error) {
        // Fallback to clipboard
        copyReferralCode();
      }
    } else {
      copyReferralCode();
    }
  };

  return (
    <div className="space-y-6">
      {/* My Referral Code */}
      <Card className="shadow-medium">
        <CardHeader className="text-center">
          <CardTitle className="text-xl flex items-center justify-center gap-2">
            <Gift className="h-5 w-5 text-primary" />
            My Referral Code
          </CardTitle>
          <CardDescription>
            Share your code and earn bonus loyalty coins
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 p-4 bg-gradient-subtle rounded-xl border-2 border-primary/20">
              <div className="text-3xl font-bold text-primary font-mono">
                {myReferralCode}
              </div>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {userRole.toUpperCase()}
              </Badge>
            </div>
          </div>

          <div className="flex gap-2">
            <Button 
              onClick={copyReferralCode}
              variant="outline"
              className="flex-1"
            >
              <Copy className="h-4 w-4 mr-2" />
              Copy Code
            </Button>
            <Button 
              onClick={shareReferral}
              className="flex-1 bg-gradient-primary hover:opacity-90"
            >
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>

          <div className="text-center text-sm text-muted-foreground p-3 bg-success/10 rounded-lg">
            <p className="font-medium text-success">🎉 Referral Rewards</p>
            <p>You earn <strong>50 coins</strong> for each successful referral!</p>
            <p>Your friends get <strong>25 bonus coins</strong> too!</p>
          </div>
        </CardContent>
      </Card>

      {/* Referral Stats */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Users className="h-5 w-5 text-secondary" />
            Referral Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 rounded-lg bg-primary/10">
              <div className="text-2xl font-bold text-primary">
                {referralStats.totalReferrals}
              </div>
              <div className="text-xs text-muted-foreground">
                Total Referrals
              </div>
            </div>
            
            <div className="p-3 rounded-lg bg-success/10">
              <div className="text-2xl font-bold text-success flex items-center justify-center gap-1">
                <Coins className="h-5 w-5" />
                {referralStats.coinsEarned}
              </div>
              <div className="text-xs text-muted-foreground">
                Coins Earned
              </div>
            </div>
            
            <div className="p-3 rounded-lg bg-secondary/10">
              <div className="text-2xl font-bold text-secondary">
                {referralStats.pendingRewards}
              </div>
              <div className="text-xs text-muted-foreground">
                Pending Rewards
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How It Works */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="text-lg">How Referrals Work</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-white">
              1
            </div>
            <div className="text-sm">
              <p className="font-medium">Share your referral code</p>
              <p className="text-muted-foreground">Send your unique code to friends and family</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-white">
              2
            </div>
            <div className="text-sm">
              <p className="font-medium">They sign up with your code</p>
              <p className="text-muted-foreground">New users enter your code during registration</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-white">
              3
            </div>
            <div className="text-sm">
              <p className="font-medium">Both earn rewards!</p>
              <p className="text-muted-foreground">You get 50 coins, they get 25 bonus coins</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReferralManager;