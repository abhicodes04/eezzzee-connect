import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BuyerHome from "./pages/BuyerHome";
import VendorDashboard from "./pages/VendorDashboard";
import VendorProducts from "./pages/VendorProducts";
import ProductDetail from "./pages/ProductDetail";
import AddProduct from "./pages/AddProduct";
import VerifyDiscount from "./pages/VerifyDiscount";
import ReferralCenter from "./pages/ReferralCenter";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<BuyerHome />} />
          <Route path="/vendor" element={<VendorDashboard />} />
          <Route path="/vendor/products" element={<VendorProducts />} />
          <Route path="/vendor/add-product" element={<AddProduct />} />
          <Route path="/vendor/verify-discount" element={<VerifyDiscount />} />
          <Route path="/referral" element={<ReferralCenter />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
