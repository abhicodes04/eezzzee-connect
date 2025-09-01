import { ReactNode } from 'react';
import BottomNavigation from './BottomNavigation';

interface LayoutProps {
  children: ReactNode;
  showBottomNav?: boolean;
  userRole?: 'buyer' | 'vendor';
}

const Layout = ({ children, showBottomNav = false, userRole }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <main className={`${showBottomNav ? 'pb-20' : ''}`}>
        {children}
      </main>
      {showBottomNav && <BottomNavigation userRole={userRole} />}
    </div>
  );
};

export default Layout;