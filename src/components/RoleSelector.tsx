import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Store } from "lucide-react";

interface RoleSelectorProps {
  onRoleSelect: (role: 'buyer' | 'vendor') => void;
}

const RoleSelector = ({ onRoleSelect }: RoleSelectorProps) => {
  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Choose Your Role</h2>
        <p className="text-muted-foreground">How would you like to use Eezzzee?</p>
      </div>

      <div className="grid gap-4">
        <Card className="cursor-pointer hover:shadow-medium transition-all duration-300 border-2 hover:border-primary-light"
              onClick={() => onRoleSelect('buyer')}>
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-4 p-4 bg-primary-lighter rounded-full w-16 h-16 flex items-center justify-center">
              <ShoppingBag className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-xl">I'm a Buyer</CardTitle>
            <CardDescription>
              Discover local products, get exclusive discounts, and connect with vendors in your community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Browse local products by category</li>
              <li>• Get exclusive discount codes</li>
              <li>• Earn loyalty coins on purchases</li>
              <li>• Connect with trusted vendors</li>
            </ul>
            <Button className="w-full mt-4 bg-gradient-primary hover:opacity-90" size="lg">
              Continue as Buyer
            </Button>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-medium transition-all duration-300 border-2 hover:border-secondary-light"
              onClick={() => onRoleSelect('vendor')}>
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-4 p-4 bg-secondary-lighter rounded-full w-16 h-16 flex items-center justify-center">
              <Store className="h-8 w-8 text-secondary" />
            </div>
            <CardTitle className="text-xl">I'm a Vendor</CardTitle>
            <CardDescription>
              Showcase your products, reach local customers, and grow your business in the community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• List and manage your products</li>
              <li>• Reach local customers easily</li>
              <li>• Offer exclusive discounts</li>
              <li>• Build your community presence</li>
            </ul>
            <Button className="w-full mt-4 bg-gradient-secondary hover:opacity-90" size="lg">
              Continue as Vendor
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RoleSelector;