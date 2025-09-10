import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BuyerHome from "./pages/BuyerHome";
import Browse from "./pages/Browse";
import Discounts from "./pages/Discounts";
import Profile from "./pages/Profile";
import VendorDashboard from "./pages/VendorDashboard";
import VendorProducts from "./pages/VendorProducts";
import VendorStore from "./pages/VendorStore";
import ProductDetail from "./pages/ProductDetail";
import AddProduct from "./pages/AddProduct";
import VerifyDiscount from "./pages/VerifyDiscount";
import ReferralCenter from "./pages/ReferralCenter";
import NotFound from "./pages/NotFound";
import LoginForm from "./pages/LoginForm";
import VendorRegistration from "./pages/VendorRegistration";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path="/home" element={<BuyerHome />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/discounts" element={<Discounts />} /> */}
          <Route path="/login" element={<LoginForm />} />   {/* ✅ New Route */}
          <Route path="/register" element={<VendorRegistration />} />   {/* ✅ New Route */}

          <Route path="/profile" element={<Profile />} />
          <Route path="/vendor" element={<VendorDashboard />} />
          <Route path="/vendor/products" element={<VendorProducts />} />
          <Route path="/vendor/store" element={<VendorStore />} />
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
