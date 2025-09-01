import { Home, Search, ShoppingBag, User, Store } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

interface BottomNavProps {
  userRole?: 'buyer' | 'vendor';
}

const BottomNavigation = ({ userRole = 'buyer' }: BottomNavProps) => {
  const location = useLocation();

  const buyerNavItems = [
    { icon: Home, label: 'Home', path: '/home' },
    { icon: Search, label: 'Browse', path: '/browse' },
    { icon: ShoppingBag, label: 'Discounts', path: '/discounts' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  const vendorNavItems = [
    { icon: Home, label: 'Home', path: '/vendor' },
    { icon: ShoppingBag, label: 'Products', path: '/vendor/products' },
    { icon: Store, label: 'Store', path: '/vendor/store' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  const navItems = userRole === 'vendor' ? vendorNavItems : buyerNavItems;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center p-2 rounded-lg min-w-[64px] transition-all duration-200 ${
                isActive 
                  ? 'text-primary bg-primary-lighter' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;