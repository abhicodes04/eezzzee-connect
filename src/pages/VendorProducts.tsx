import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Edit3, Trash2, Eye, Package } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const VendorProducts = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  
  const [products] = useState([
    {
      id: 1,
      name: "Fresh Organic Mangoes",
      category: "Fruits",
      price: 150,
      discount: 20,
      stock: 25,
      image: "/placeholder.svg",
      status: "active"
    },
    {
      id: 2,
      name: "Premium Basmati Rice",
      category: "Grains",
      price: 280,
      discount: 15,
      stock: 50,
      image: "/placeholder.svg",
      status: "active"
    },
    {
      id: 3,
      name: "Farm Fresh Tomatoes",
      category: "Vegetables",
      price: 40,
      discount: 0,
      stock: 0,
      image: "/placeholder.svg",
      status: "out_of_stock"
    },
    {
      id: 4,
      name: "Pure Coconut Oil",
      category: "Oil & Spices",
      price: 320,
      discount: 25,
      stock: 15,
      image: "/placeholder.svg",
      status: "active"
    }
  ]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (status: string, stock: number) => {
    if (status === 'out_of_stock' || stock === 0) {
      return <Badge variant="destructive" className="text-xs">Out of Stock</Badge>;
    }
    return <Badge variant="secondary" className="text-xs bg-success-lighter text-success">Active</Badge>;
  };

  return (
    <Layout showBottomNav={true} userRole="vendor">
      <div className="min-h-screen bg-gradient-subtle">
        {/* Header */}
        <div className="bg-gradient-primary p-6 text-white">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-2">My Products</h1>
            <p className="text-primary-lighter">Manage your product listings</p>
          </div>
        </div>

        <div className="max-w-md mx-auto p-4 -mt-8 relative z-10">
          {/* Search and Add */}
          <Card className="shadow-medium border-0 mb-6">
            <CardContent className="p-4">
              <div className="flex space-x-3 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button
                  onClick={() => navigate('/vendor/add-product')}
                  className="bg-gradient-primary hover:opacity-90 px-4"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="text-sm text-muted-foreground">
                {filteredProducts.length} products found
              </div>
            </CardContent>
          </Card>

          {/* Products List */}
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="shadow-medium border-0 overflow-hidden hover:shadow-strong transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="w-24 h-24 bg-muted flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-foreground line-clamp-1">{product.name}</h3>
                          <p className="text-sm text-muted-foreground">{product.category}</p>
                        </div>
                        {getStatusBadge(product.status, product.stock)}
                      </div>
                      
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-primary">₹{product.price}</span>
                          {product.discount > 0 && (
                            <Badge variant="secondary" className="text-xs bg-secondary-lighter text-secondary">
                              {product.discount}% OFF
                            </Badge>
                          )}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          Stock: {product.stock}
                        </span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => navigate(`/product/${product.id}`)}
                          className="flex-1"
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => navigate(`/vendor/edit-product/${product.id}`)}
                          className="flex-1"
                        >
                          <Edit3 className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <Card className="shadow-medium border-0">
              <CardContent className="p-8 text-center">
                <div className="text-muted-foreground mb-4">
                  <Package className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>No products found</p>
                  <p className="text-sm">Try adjusting your search or add a new product</p>
                </div>
                <Button
                  onClick={() => navigate('/vendor/add-product')}
                  className="bg-gradient-primary hover:opacity-90"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Your First Product
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default VendorProducts;