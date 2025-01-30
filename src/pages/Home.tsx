import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import ProductCard from "../components/layout/ProductCard";
import CategoryChip from "../components/layout/CategoryChip";

const CATEGORIES = ["All", "New In", "Clothing", "Shoes", "Accessories"];

const FEATURED_PRODUCTS = [
  {
    id: "1",
    name: "Premium Cotton T-Shirt",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    id: "2",
    name: "Designer Denim Jacket",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    id: "3",
    name: "Classic Leather Boots",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    id: "4",
    name: "Silk Evening Dress",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  }
];

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-6">Discover</h1>
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {CATEGORIES.map((category) => (
              <CategoryChip
                key={category}
                name={category}
                active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>
        </header>

        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;