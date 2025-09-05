import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import ReferralManager from '@/components/auth/ReferralManager';

const ReferralCenter = () => {
  const navigate = useNavigate();
  // Mock user data - in real app this would come from auth context
  const [userRole] = useState<'buyer' | 'vendor'>('buyer');
  const [userPhone] = useState('+91 98765 43210');

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(-1)}
            className="h-8 w-8 p-0"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Referral Center</h1>
            <p className="text-muted-foreground">Invite friends and earn rewards</p>
          </div>
        </div>

        {/* Referral Manager */}
        <ReferralManager userRole={userRole} userPhone={userPhone} />
      </div>
    </div>
  );
};

export default ReferralCenter;