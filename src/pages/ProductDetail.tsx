import { useParams, Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// This would typically come from an API, using the product ID to fetch details
const PRODUCT_DETAILS: Record<string, {
  name: string;
  price: number;
  image: string;
  description: string;
  nutrition: string;
  origin: string;
}> = {
  "1": {
    name: "Organic Avocados",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    description: "Premium organic avocados, perfectly ripened and ready to eat. Rich in healthy fats and nutrients, these avocados are perfect for guacamole, salads, or as a nutritious spread.",
    nutrition: "Rich in healthy fats, fiber, and potassium",
    origin: "California, USA"
  },
  "2": {
    name: "Fresh Bread Loaf",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    description: "Freshly baked artisanal bread made with organic flour. Crusty on the outside, soft and fluffy on the inside. Baked daily in our local bakery.",
    nutrition: "Source of complex carbohydrates and fiber",
    origin: "Local Bakery"
  },
  "3": {
    name: "Organic Milk",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
    description: "Fresh organic whole milk from grass-fed cows. No artificial hormones or antibiotics. Perfect for drinking, cooking, or your morning coffee.",
    nutrition: "Excellent source of calcium and vitamin D",
    origin: "Local Dairy Farm"
  },
  "4": {
    name: "Farm Fresh Eggs",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7",
    description: "Free-range eggs from locally raised hens. These eggs have bright orange yolks and are packed with protein and nutrients.",
    nutrition: "High in protein and omega-3 fatty acids",
    origin: "Local Family Farm"
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  
  const product = id ? PRODUCT_DETAILS[id] : null;

  if (!product) {
    return <div className="container mx-auto px-4 pt-24">Product not found</div>;
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto px-4 pt-24">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>{product.name}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <Card>
            <CardContent className="pt-6">
              <h1 className="text-3xl font-bold text-primary mb-2">{product.name}</h1>
              <p className="text-2xl font-semibold text-primary mb-6">${product.price.toFixed(2)}</p>
              
              <div className="space-y-6">
                <div>
                  <h2 className="font-semibold mb-2">Description</h2>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>

                <div>
                  <h2 className="font-semibold mb-2">Nutrition</h2>
                  <p className="text-muted-foreground">{product.nutrition}</p>
                </div>

                <div>
                  <h2 className="font-semibold mb-2">Origin</h2>
                  <p className="text-muted-foreground">{product.origin}</p>
                </div>

                <div className="flex items-center gap-2 text-green-600 font-medium">
                  <Clock className="h-4 w-4" />
                  <span>Get it in 10 minutes</span>
                </div>

                <Button 
                  className="w-full"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;