import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star } from "lucide-react";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  vendor: string;
  location: string;
  rating?: number;
  className?: string;
}

const ProductCard = ({
  id,
  title,
  price,
  originalPrice,
  discount,
  image,
  vendor,
  location,
  rating,
  className
}: ProductCardProps) => {
  return (
    <Card className={`overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 ${className}`}>
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-32 object-cover"
        />
        {discount && (
          <Badge className="absolute top-2 left-2 bg-secondary text-secondary-foreground">
            {discount}% OFF
          </Badge>
        )}
      </div>
      
      <CardContent className="p-3">
        <h3 className="font-semibold text-sm text-foreground mb-1 line-clamp-2">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg font-bold text-primary">₹{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{originalPrice}
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-medium">{vendor}</span>
          {rating && (
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span>{rating}</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-1 mt-1">
          <MapPin className="h-3 w-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">{location}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;